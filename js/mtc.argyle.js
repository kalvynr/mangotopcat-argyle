/*
 * mtc.argyle.js
 * MangoTopcat Argyle app root namespace
 */

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
 */
 
/*global $, mtc */

mtc.argyle = (function () {
  'use strict';
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
        + '<div class="container">'
          + '<div class="argyle-header">'
            + '<h1>The Bully Project Mural Installation</h1>'
          + '</div>'
          + '<div class="argyle-main-content"></div>'
          + '<div class="argyle-footer">'
            + '<h6>Powered by <em>Behance</em></h6>'
          + '</div>'
        + '</div>'
    },
    stateMap    = { $container : null },
    jqueryMap   = {},
    
    setJqueryMap, initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  // example : getTrimmedString
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------

  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
  	var $container = stateMap.$container;
  	
  	jqueryMap = { $container : $container };
  };
  // End DOM method /setJqueryMap/

  //---------------------- END DOM METHODS ---------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  // example: onClickButton = ...
  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------

  // Begin public method /initModule/
  // Purpose : Initializes module
  // Arguments :
  //   * $container the jquery element used by this feature
  // Returns : true
  // Throws : nonaccidental
  //
  initModule = function ( $container ) {
  	stateMap.$container = $container;
    $container.html( configMap.main_html );
  	setJqueryMap();
    
    mtc.argyle.shell.configModule();
    mtc.argyle.shell.initModule( $container );
    
  	return true;
  };
  // End public method /initModule/

  // return public methods
  return {
  	initModule  : initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
}());
