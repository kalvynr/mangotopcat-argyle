/*
 * mtc.argyle.grid.js
 * Grid feature module
 */

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
 */
 
/*global $, mtc */

mtc.argyle.grid = (function () {
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
	  configMap   = {
	  	gridSize       : undefined,
	  	gridColumnCnt  : undefined
	  },
	  stateMap    = {
	  	$append_target : null
	  },
	  jqueryMap   = {},
	  
	  setJqueryMap, generateAppendHtml,
	  getPaddedNumber, refreshGrid,
    gridTile, gridMosaic,
	  configModule, initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
	//------------------- BEGIN UTILITY METHODS ------------------
  getPaddedNumber = function ( number ) {
  	var paddedStr;
  	
    if ( number < 10 ) {
      paddedStr = '00' + number.toString();
    }
    else if ( number < 100 ) {
      paddedStr = '0' + number.toString();
    }
    else {
      paddedStr = number.toString();
    }
    
    return paddedStr;
  };
	
	gridTile = (function () {
		var
		  getTileHtml, getTileItemHtml, flip;
		
    getTileItemHtml = function ( inputMap ) {
      var
        htmlStr,
        isTileFront = inputMap.is_tile_front,
        isMosaicTile = inputMap.is_mosaic_tile,
        mosaicIdx = inputMap.mosaic_idx;
      
      if ( isTileFront ) {
        htmlStr = '<span class="mtc-argyle-grid-tile-front">';
      }
      else {
        htmlStr = '<span class="mtc-argyle-grid-tile-rear">';
      }
      
      // Add the image
      // TODO: Add a list to track active images to make sure the same image doesn't appear twice
      htmlStr += String()
        + '<img src="'
        + mtc.argyle.model.artwork.getNextImage().thumbnail_url
        + '" class="img-rounded">';
      
      if ( isMosaicTile ) {
        htmlStr += String()
          + '<img src="images/'
          + gridMosaic.getMosaicImageForIndex( mosaicIdx )
          + '" class="img-rounded overlay-image">';
      }
      
      // Close out the div
      htmlStr += String()
        + '</span>';
      
      return htmlStr;
    };
    
		getTileHtml = function ( inputMap ) {
			var
				htmlStr,
				gridIdx				= inputMap.grid_idx;
			
      // Add the Bootstrap col class
			htmlStr = String()
        + '<div class="col-md-'
            + (12 / configMap.gridColumnCnt)
            + ' center-block">';
      
      // Add the tile class and set an ID
      htmlStr += String()
				+ '<div class="mtc-argyle-grid-tile" id="mtc-argyle-grid-tile-idx-'
          + getPaddedNumber( gridIdx + 1 )
          + '">';
      
      // Set the content of the tile
      htmlStr += getTileItemHtml({
        is_tile_front   : inputMap.is_tile_front,
        is_mosaic_tile  : inputMap.is_mosaic_tile,
        mosaic_idx      : inputMap.mosaic_idx
      });
      
      // Close out the divs
      htmlStr += String()
          + '</div>'
        + '</div>';
			
			return htmlStr;
		};
		
		flip = function ( $targetTile ) {
	    var
        doesContainFlipped, idList, gridIdx,
        $gridTileItem,
        tileInfoMap = {};
      
      // Determine the grid index
      idList = $targetTile.attr( 'id' ).split( /\s+/ );
      $.each( idList, function( index, item ) {
        if (item.indexOf( 'mtc-argyle-grid-tile-idx-' ) !== -1) {
          gridIdx = item.substring( item.length - 3, item.length );
        }
      });
      
      // Set the common elements of the tile map
      if ( gridIdx ) {
        tileInfoMap.is_mosaic_tile = gridMosaic.verifyMosaicStatus( Number( gridIdx ) - 1 );
        tileInfoMap.mosaic_idx = gridMosaic.getMosaicIndex( Number( gridIdx ) - 1 );
      }
      
      // Get the tile to flip
	    doesContainFlipped = $targetTile.hasClass( 'flipped' );
	    if ( doesContainFlipped === false ) {
        // Add the tile-rear class
        tileInfoMap.is_tile_front = false;
        $targetTile.append( getTileItemHtml( tileInfoMap ) );
        
        setTimeout( function () {
          $targetTile.addClass( 'flipped' );
        }, 50);
        
        // Remove the tile-front class
        $gridTileItem = $targetTile.find( '.mtc-argyle-grid-tile-front' );
        $gridTileItem.one( "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
          $gridTileItem.remove();
        });
	    }
	    else {
        // Add the tile-front class
        tileInfoMap.is_tile_front = true;
        $targetTile.append( getTileItemHtml( tileInfoMap ) );
        
        setTimeout( function () {
          $targetTile.removeClass( 'flipped' );
        }, 50);
        
        // Remove the tile-rear class
        $gridTileItem = $targetTile.find( '.mtc-argyle-grid-tile-rear' );
        $gridTileItem.one( "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
          $gridTileItem.remove();
        });
	    }
		};
		
		return {
      getTileItemHtml  : getTileItemHtml,
			getTileHtml      : getTileHtml,
			flip             : flip
		};
	}());
	
  gridMosaic = (function () {
    var
      verifyMosaicStatus, getMosaicIndex, getMosaicImageForIndex;
    
    verifyMosaicStatus = function ( grid_idx ) {
      var colIdx = grid_idx % configMap.gridColumnCnt;
      
      // TODO: Hardcoded for now
      return (colIdx >= 1 && colIdx <= 4);
    };
    
    getMosaicIndex = function ( grid_idx ) {
      var
        colIdx, rowIdx, mosaicIdx;
      
      // Sanity check
      if ( !verifyMosaicStatus( grid_idx ) ) {
        return configMap.gridSize;
      }
      
      colIdx = grid_idx % configMap.gridColumnCnt;
      colIdx --;
      
      rowIdx = Math.floor( grid_idx / configMap.gridColumnCnt );
      
      mosaicIdx = (rowIdx * 4) + colIdx;
      
      return mosaicIdx;
    };
    
    getMosaicImageForIndex = function ( mosaic_idx ) {
      var
        imageName, adjustedMosaicIdx,
        gridMosaicImagePrefix = 'bully_project_mosaic_';
      
      imageName = gridMosaicImagePrefix;
      
      // Adjust the index to be 1-based instead of 0-based
      adjustedMosaicIdx = mosaic_idx + 1;
      
      imageName += ( adjustedMosaicIdx < 10 ) ? '0' + adjustedMosaicIdx.toString() : adjustedMosaicIdx.toString();
      
      // Add the file extension
      imageName += '.png';
      
      return imageName;
    };
    
    return {
      verifyMosaicStatus       : verifyMosaicStatus,
      getMosaicIndex           : getMosaicIndex,
      getMosaicImageForIndex   : getMosaicImageForIndex
    };
  }());
  
	//-------------------- END UTILITY METHODS -------------------
	
	//--------------------- BEGIN DOM METHODS --------------------
	
	// Begin DOM method /setJqueryMap/
	setJqueryMap = function () {
		var $append_target = stateMap.$append_target;
		
		jqueryMap = { $append_target : $append_target };
	};
	// End DOM method /setJqueryMap/
	
	// Begin DOM method /generateAppendHtml/
	generateAppendHtml = function () {
    var
      i,
      htmlStr = String();
    
    // Begin constructing the grid
    for ( i = 0; i < configMap.gridSize; i++ ) {
      if ( (i % configMap.gridColumnCnt) === 0 ) {
        htmlStr += '<div class="row mtc-argyle-grid-bootstrap-top-buffer">';
      }
      
      htmlStr += gridTile.getTileHtml({
      	grid_idx        : i,
        is_tile_front   : true,
      	is_mosaic_tile  : gridMosaic.verifyMosaicStatus( i ),
      	mosaic_idx      : gridMosaic.getMosaicIndex( i )
      });
      
      if ( (i % configMap.gridColumnCnt) === (configMap.gridColumnCnt - 1) ) {
        htmlStr += '</div>';
      }
    }
    // End constructing the grid
    
    return htmlStr;
	};
	// End DOM method /generateAppendHtml/
	
	//---------------------- END DOM METHODS ---------------------
	
	//------------------- BEGIN EVENT HANDLERS -------------------
	// example: onClickButton = ...
	//-------------------- END EVENT HANDLERS --------------------
	
	//------------------- BEGIN PUBLIC METHODS -------------------
	
	// Begin public method /configModule/
	// Purpose : Adjust configuration of allowed keys
	// Arguments : A map of settable keys and values
	//   * color_name - color to use
	// Settings :
	//   * configMap.settable_map declares allowed keys
	// Returns : true
	// Throws : none
	//
	configModule = function ( inputMap ) {
		configMap.gridSize       = inputMap.grid_size;
		configMap.gridColumnCnt  = inputMap.grid_column_cnt;
		
		return true;
	};
	// End public method /configModule/
	
	// Begin public method /initModule/
	// Purpose : Initializes module
	// Arguments :
	//   * $container the jquery element used by this feature
	// Returns : true
	// Throws : none
	//
	initModule = function ( $append_target ) {
		stateMap.$append_target = $append_target;
		$append_target.append( generateAppendHtml() );
		setJqueryMap();
		
		return true;
	};
	// End public method /initModule/
	
  // Begin public method /refreshGrid/
  // Purpose : Refreshes a random tile in the grid
  // Arguments : none
  // Returns : none
  // Throws : none
  //
  refreshGrid = function () {
    var
      $gridTile, gridTileIdx, gridTileIdxStr;
    
    gridTileIdx = Math.floor( Math.random() * configMap.gridSize );
    if ( gridTileIdx === 0 ) { gridTileIdx = 1; }
    
    // TODO: Used for testing
    //gridTileIdx = 1;
    gridTileIdxStr = '#mtc-argyle-grid-tile-idx-' + getPaddedNumber( gridTileIdx );
    $gridTile = jqueryMap.$append_target.find( gridTileIdxStr );
    
    gridTile.flip( $gridTile.first() );
  };
  // End public method /refreshGrid/
  
	// return public methods
	return {
		configModule  : configModule,
		initModule    : initModule,
		refreshGrid	  : refreshGrid
	};
	//------------------- END PUBLIC METHODS ---------------------
}());
