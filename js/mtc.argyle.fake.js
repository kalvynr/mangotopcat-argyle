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

mtc.argyle.fake = (function () {
	'use strict';
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
	  getArtworkList;
	
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
	//------------------- BEGIN UTILITY METHODS ------------------
	//-------------------- END UTILITY METHODS -------------------
	
	//------------------- BEGIN EVENT HANDLERS -------------------
	// example: onClickButton = ...
	//-------------------- END EVENT HANDLERS --------------------
	
	//------------------- BEGIN PUBLIC METHODS -------------------
	
	getArtworkList = function () {
		return [
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/beab9826161487.5552522401a7c.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/a629b825985141.554a4ca84ba08.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/07a0de25649843.55484b07b611a.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/f156f224975511.551b5b747e693.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/e9924a23716131.54e2150ca2d39.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/74521a23722729.54e2545df0104.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/c09a3524091653.54f2c23af41d2.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/6a719925848527.5543e4093085c.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/13e7d925746867.553fbe88c836f.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/8b4f0f24503947.5505f64813f5a.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/99d46e25675265.553cec758f8b1.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/b1c78a24553535.550830b0afb70.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/00773d24324709.54fdb3ae11518.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/a3092c24142117.54f4ef9e6e60e.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/202/1758892.544e84232a23b.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/16043767.548a6dcf8813d.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/22038889.548be8fb389da.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/202/22422453.54bfccc2af9ab.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/23138833.54c8215012b15.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/5cdc4c24597359.5509d02ddc5a4.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/e6100425861835.5544e07d22942.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/e3d7ab26142549.555202c8d543a.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/a9e37e25281251.552ac3ae67a67.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/5916531.5469ca7b1ff9e.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/47619025569881.5537cc1f8ffc7.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/3bccb525779473.5540f05a29525.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/bfd74424398843.5500903abe055.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/5ce22425940077.5548b2372aff5.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/2b561826000019.554ad818e1054.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/66ee8c26025701.554bcc393fd57.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/59579126029953.554bf788421f7.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/be8bbe26126107.55511756a98b1.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/9281c526153845.55521d593c719.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/de15e524615179.550aaa18a76a2.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/3babd925992435.554a87bec9d28.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/6bccdf25523195.5535fe50bdc5a.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/6b406425583283.55383d1fbda40.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/1b267e25753295.553fea561c65b.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/5428579.54673332af1d6.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/202/4545155.5462af5e96826.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/67658625212643.5526d12c2696a.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/21910349.5485d776e8f3b.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/21075619.545a7b910a578.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/20801423.544d0900e545e.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/18426777.548de9f953561.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/14546669.5485ab6de6d54.png'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/13190067.5483bb7c6a18d.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/11445387.5481661188c46.jpg'
	    },
	    {
	      thumbnail_url : 'https://mir-s3-cdn-cf.behance.net/projects/230/9972115.547f58d342876.jpg'
	    }
	  ];
	};

	// return public methods
	return {
		getArtworkList  : getArtworkList
	};
	//------------------- END PUBLIC METHODS ---------------------
}());
