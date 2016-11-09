/*
 * mtc.argyle.fake.js
 * Fake module
 */

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
 */
 
/*global $, mtc */

mtc.argyle.model = (function () {
	'use strict';
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
	  artwork;
	
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
	//------------------- BEGIN UTILITY METHODS ------------------
	//-------------------- END UTILITY METHODS -------------------
	
	//------------------- BEGIN EVENT HANDLERS -------------------
	// example: onClickButton = ...
	//-------------------- END EVENT HANDLERS --------------------
	
	//------------------- BEGIN PUBLIC METHODS -------------------
	
	artwork = (function () {
		//---------------- BEGIN MODULE SCOPE VARIABLES --------------
		var
		  configMap   = {},
		  stateMap    = {
		  	artworkList    : undefined,
		  	nextImageIdx   : 0
		  },
		  
		  getNextImage;
		//----------------- END MODULE SCOPE VARIABLES ---------------
		
		getNextImage = function () {
			if ( !stateMap.artworkList ) {
				stateMap.artworkList = mtc.argyle.fake.getArtworkList();
			}
			
			if ( stateMap.nextImageIdx === stateMap.artworkList.length ) {
				stateMap.nextImageIdx = 0;
			}
			
			return stateMap.artworkList[stateMap.nextImageIdx ++];
		};
		
		return {
			getNextImage  : getNextImage
		};
	}());
	
	// return public methods
	return {
		artwork  : artwork
	};
	//------------------- END PUBLIC METHODS ---------------------
}());
