/*
 * mtc.argyle.shell.js
 * Main controller for Argyle
 */

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
 */
 
/*global $, Backbone, mtc */

mtc.argyle.shell = (function () {
	'use strict';
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
	  configMap   = {},
	  stateMap    = {
	  	$container         		: null,
	  	backboneRouterType    : null,
	  	backboneRouterInst 		: null
	  },
	  jqueryMap   = {},
	  
	  setJqueryMap, configModule, initModule,
	  initBackbone;
	//----------------- END MODULE SCOPE VARIABLES ---------------

	//------------------- BEGIN UTILITY METHODS ------------------
	// 
	initBackbone = function () {
    stateMap.backboneRouterType = Backbone.Router.extend({
      routes: {
        '' : 'homeRoute'
      }
    });
    
    stateMap.backboneRouterInst = new stateMap.backboneRouterType();
    stateMap.backboneRouterInst.on( 'route:homeRoute', function () {
      console.log( 'home page loaded' );
    });
	};
	
	//-------------------- END UTILITY METHODS -------------------

	//--------------------- BEGIN DOM METHODS --------------------

	// Begin DOM method /setJqueryMap/
	setJqueryMap = function () {
		var $container = stateMap.$container;
		
		jqueryMap = {
			$container : $container,
			$content   : $container.find( '.argyle-main-content' )
		};
	};
	// End DOM method /setJqueryMap/

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
	configModule = function () {
		initBackbone();
		
		return true;
	};
	// End public method /configModule/

	// Begin public method /initModule/
	// Purpose : Initializes module
	// Arguments :
	//   * $container the jquery element used by this feature
	// Returns : true
	// Throws : nonaccidental
	//
	initModule = function ( $container ) {
		stateMap.$container = $container;
		setJqueryMap();
		
		mtc.argyle.grid.configModule({
			grid_size        : 24,
			grid_column_cnt  : 6,
		});
		mtc.argyle.grid.initModule( jqueryMap.$content );
		
    Backbone.history.start();
    
    //setTimeout( mtc.argyle.grid.refreshGrid, 2000 );
    setInterval( mtc.argyle.grid.refreshGrid, 3000 );
    
		return true;
	};
	// End public method /initModule/

	// return public methods
	return {
		configModule  : configModule,
		initModule    : initModule
	};
	//------------------- END PUBLIC METHODS ---------------------
}());
