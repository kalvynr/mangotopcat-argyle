/*
 * mtc.js
 * Root namespace module
 */

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
 */
 
/*global $ */

var mtc = (function () {
  'use strict';
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
    configMap = {},
    stateMap  = {},
	  
    initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
  //------------------- BEGIN UTILITY METHODS ------------------
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  //---------------------- END DOM METHODS ---------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  // example: onClickButton = ...
  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------

  // Begin public method /initModule/
  // Purpose : Initializes module
  // Arguments : none
  // Returns : true
  // Throws : nonaccidental
  //
  initModule = function () {
    return true;
  };
  // End public method /initModule/

  // return public methods
  return {
    initModule  : initModule
  };
	//------------------- END PUBLIC METHODS ---------------------
}());
