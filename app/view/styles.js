(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/custom.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/css/custom.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n@import url(http://fonts.useso.com/css?family=Lato:300,400);\r\n@import url(http://fonts.useso.com/css?family=Ubuntu:300,400);\r\n/**\r\n * Table of Contents\r\n *\r\n * 1.0 - Google Font\r\n * 2.0 - General Elements\r\n * 3.0 - Site Header\r\n *   3.1 - Logo\r\n *   3.2 - Main Navigation\r\n *     3.2.1 - Main Nav CSS 3 Hover Effect\r\n * 4.0 - Home/Blog\r\n *   4.1 - Read More Button CSS 3 style\r\n * 5.0 - Widget\r\n * 6.0 - Footer\r\n * 7.0 - Header Search Bar\r\n * 8.0 - Mobile Menu\r\n * 9.0 - Contact Page Social\r\n * 10.0 - Contact Form\r\n * 11.0 - Media Query\r\n */\r\n/**\r\n * 1.0 - Google Font\r\n */\r\n/**\r\n * 2.0 - General Elements\r\n */\r\n* {outline: none;}\r\nh1, \r\nh2, \r\nh3, \r\nh4, \r\nh5, \r\nh6 { \r\n\tmargin-top: 0;\r\n}\r\nb {\r\n\tfont-weight: 400;\r\n}\r\na {\r\n\tcolor: #333;\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none; \r\n\tcolor: #000;\r\n}\r\n::-moz-selection {\r\n\tbackground-color: #eee;\r\n}\r\n::selection {\r\n\tbackground-color: #eee;\r\n}\r\nbody {\r\n\tcolor: #444;\r\n\tfont-family: 'Lato', sans-serif;\r\n}\r\np {\r\n\tfont-family: 'Ubuntu', sans-serif;\r\n\tfont-weight: 400;\r\n\tword-spacing: 1px;\r\n\tletter-spacing: 0.01em;\r\n}\r\n#single p,\r\n#page p {\r\n\tmargin-bottom: 25px;\r\n}\r\n.page-title {\r\n\ttext-align: center;\r\n}\r\n.title {\r\n\tmargin-bottom: 30px;\r\n}\r\nfigure {\r\n\tmargin-bottom: 25px;\r\n}\r\n.img-responsive-center img {\r\n\tmargin: 0 auto;\r\n}\r\n.height-40px {\r\n\tmargin-bottom: 40px;\r\n}\r\n/**\r\n * 3.0 - Site Header\r\n */\r\n#site-header {\r\n\tbackground-color: #FFF;\r\n\tpadding: 25px 20px;\r\n\tmargin-bottom: 40px;\r\n\tborder-bottom: 1px solid #e7e7e7;\r\n}\r\n.copyrights{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}\r\n/**\r\n * 3.1 - Logo\r\n */\r\n.logo h1 a {\r\n    color: #000;\r\n}\r\n.logo h1 a:hover {\r\n    text-decoration: none;\r\n    border-bottom: none;\r\n}\r\n.logo h1 {\r\n\tmargin: 0;\r\n\tfont-family: 'Lato', sans-serif;\r\n\tfont-weight: 300;\r\n}\r\n/**\r\n * 3.2 - Main Navigation\r\n */\r\n.main-nav {\r\n\tmargin-top: 11px;\r\n\tmax-width: 95%;\r\n}\r\n.main-nav a {\r\n\tcolor: #000000 !important;\r\n\tpadding: 0 0 5px 0 !important;\r\n\tmargin-right: 30px;\r\n\tfont-family: 'Lato', sans-serif;\r\n\tfont-weight: 300;\r\n\tfont-size: 24px;\r\n}\r\n.main-nav a:active,\r\n.main-nav a:focus,\r\n.main-nav a:hover {\r\n\tbackground-color: transparent !important;\r\n\tborder-bottom: 0;\r\n}\r\n.navbar-toggle {\r\n    margin: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    margin-right: 25px;\r\n}\r\n.navbar-toggle span {\r\n    font-size: 2em;\r\n    color: #000;\r\n}\r\n/**\r\n * 3.2.1 - Main Nav CSS 3 Hover Effect\r\n */\r\n.cl-effect-11 a {\r\n\tpadding: 10px 0;\r\n\tcolor: #0972b4;\r\n\ttext-shadow: none;\r\n}\r\n.cl-effect-11 a::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\toverflow: hidden;\r\n\tpadding: 0 0 5px 0 !important;\r\n\tmax-width: 0;\r\n\tborder-bottom: 1px solid #000;\r\n\tcolor: #000;\r\n\tcontent: attr(data-hover);\r\n\ttransition: max-width 0.5s;\r\n}\r\n.cl-effect-11 a:hover::before,\r\n.cl-effect-11 a:focus::before {\r\n\tmax-width: 100%;\r\n}\r\n/**\r\n * 4.0 - Home/Blog\r\n */\r\n.content-body {\r\n\tpadding-bottom: 4em;\r\n}\r\n.post {\r\n\tbackground: #fff;\r\n\tpadding: 30px 30px 0;\r\n}\r\n.entry-title {\r\n\ttext-align: center;\r\n\tfont-size: 1.9em;\r\n\tmargin-bottom: 20px;\r\n\tline-height: 1.6;\r\n\tpadding: 10px 20px 0;\r\n}\r\n.entry-meta {\r\n\ttext-align: center;\r\n\tcolor: #DDDDDD;\r\n\tfont-size: 13px;\r\n\tletter-spacing: 1px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.entry-content {\r\n\tfont-size: 18px;\r\n\tline-height: 1.9;\r\n\tfont-weight: 300;\r\n\tcolor: #000;\r\n}\r\n.post-category,\r\n.post-date,\r\n.post-author {\r\n\tposition: relative;\r\n\tpadding-right: 15px;\r\n}\r\n.post-category::after,\r\n.post-date::after,\r\n.post-author::after {\r\n\tposition: absolute;\r\n\tcontent: '.';\r\n\tcolor: #000;\r\n\tfont-size: 30px;\r\n\ttop: -22px;\r\n\tright: 1px;\r\n}\r\n/**\r\n * 4.1 - Read More Button CSS 3 style\r\n */\r\n.read-more {\r\n\tfont-family: 'Ubuntu', sans-serif;\r\n\tfont-weight: 400;\r\n\tword-spacing: 1px;\r\n\tletter-spacing: 0.01em;\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n}\r\n.cl-effect-14 a {\r\n\tpadding: 0 20px;\r\n\theight: 45px;\r\n\tline-height: 45px;\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin: 15px 25px;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n\ttext-shadow: 0 0 1px rgba(255,255,255,0.3);\r\n}\r\n.cl-effect-14 a::before,\r\n.cl-effect-14 a::after {\r\n\tposition: absolute;\r\n\twidth: 45px;\r\n\theight: 1px;\r\n\tbackground: #C3C3C3;\r\n\tcontent: '';\r\n\ttransition: all 0.3s;\r\n\tpointer-events: none;\r\n}\r\n.cl-effect-14 a::before {\r\n\ttop: 0;\r\n\tleft: 0;\r\n\t-webkit-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n\t-webkit-transform-origin: 0 0;\r\n\ttransform-origin: 0 0;\r\n}\r\n.cl-effect-14 a::after {\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n\t-webkit-transform-origin: 100% 0;\r\n\ttransform-origin: 100% 0;\r\n}\r\n.cl-effect-14 a:hover::before,\r\n.cl-effect-14 a:hover::after,\r\n.cl-effect-14 a:focus::before,\r\n.cl-effect-14 a:focus::after {\r\n\tbackground: #000;\r\n}\r\n.cl-effect-14 a:hover::before,\r\n.cl-effect-14 a:focus::before {\r\n\tleft: 50%;\r\n\t-webkit-transform: rotate(0deg) translateX(-50%);\r\n\ttransform: rotate(0deg) translateX(-50%);\r\n}\r\n.cl-effect-14 a:hover::after,\r\n.cl-effect-14 a:focus::after {\r\n\tright: 50%;\r\n\t-webkit-transform: rotate(0deg) translateX(50%);\r\n\ttransform: rotate(0deg) translateX(50%);\r\n}\r\n/**\r\n * 5.0 - Widget\r\n */\r\n.widget {\r\n    background: #fff;  \r\n    padding: 30px 0 0;  \r\n}\r\n.widget-title {  \r\n\tfont-size: 1.5em;  \r\n\tmargin-bottom: 20px;  \r\n\tline-height: 1.6;  \r\n\tpadding: 10px 0 0;\r\n\tfont-weight: 400;\r\n}\r\n.widget-recent-posts ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n}\r\n.widget-recent-posts ul li {\r\n    list-style-type: none;\r\n    position: relative;\r\n    line-height: 170%;\r\n    margin-bottom: 10px;\r\n}\r\n.widget-recent-posts ul li::before {\r\n    content: '\\f3d3';\r\n    font-family: \"Ionicons\";\r\n    position: absolute;\r\n    left: -17px;\r\n    top: 3px;\r\n    font-size: 16px;\r\n    color: #000;\r\n}\r\n.widget-archives ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    padding-left: 25px;\r\n}\r\n.widget-archives ul li {\r\n    list-style-type: none;\r\n    position: relative;\r\n    line-height: 170%;\r\n    margin-bottom: 10px;\r\n}\r\n.widget-archives ul li::before {\r\n    content: '\\f3f3';\r\n    font-family: \"Ionicons\";\r\n    position: absolute;\r\n    left: -25px;\r\n    top: 1px;\r\n    font-size: 16px;\r\n    color: #000;\r\n}\r\n.widget-category ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    padding-left: 25px;\r\n}\r\n.widget-category ul li {\r\n    list-style-type: none;\r\n    position: relative;\r\n    line-height: 170%;\r\n    margin-bottom: 10px;\r\n}\r\n.widget-category ul li::before {\r\n    content: '\\f3fe';\r\n    font-family: \"Ionicons\";\r\n    position: absolute;\r\n    left: -25px;\r\n    top: 1px;\r\n    font-size: 18px;\r\n    color: #000;\r\n}\r\n/**\r\n * 6.0 - Footer\r\n */\r\n#site-footer {\r\n\tpadding-top: 10px;\r\n\tpadding: 0 0 1.5em 0;\r\n}\r\n.copyright {\r\n\ttext-align: center;\r\n\tpadding-top: 1em;\r\n\tmargin: 0;\r\n\tborder-top: 1px solid #eee;\r\n\tcolor: #666;\r\n}\r\n/**\r\n * 7.0 - Header Search Bar\r\n */\r\n#header-search-box {\r\n\tposition: absolute;\r\n\tright: 38px;\r\n\ttop: 8px;\r\n}\r\n.search-form {\r\n\tdisplay: none;\r\n\twidth: 25%;\r\n\tposition: absolute;\r\n\tmin-width: 200px;\r\n\tright: -6px;\r\n\ttop: 33px;\r\n}\r\n#search-menu span {\r\n\tfont-size: 20px;\r\n}\r\n#searchform {\r\n    position: relative;\r\n\tborder: 1px solid #ddd;\r\n\tmin-height: 42px;\r\n}\r\n#searchform input[type=search] {\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tpadding: 10px 30px 10px 10px;\r\n\tz-index: 99;\r\n}\r\n#searchform button {\r\n\tposition: absolute;\r\n\tright: 6px;\r\n\ttop: 4px;\r\n\tz-index: 999;\r\n\tbackground: transparent;\r\n\tborder: 0;\r\n\tpadding: 0;\r\n}\r\n#searchform button span {\r\n\tfont-size: 22px;\r\n}\r\n#search-menu span.ion-ios-close-empty {\r\n    font-size: 40px;\r\n    line-height: 0;\r\n    position: relative;\r\n    top: -6px;\r\n}\r\n/**\r\n * 8.0 - Mobile Menu\r\n */\r\n.overlay {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbackground: #fff;\r\n}\r\n.overlay .overlay-close {\r\n\tposition: absolute;\r\n\tright: 25px;\r\n\ttop: 10px;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n\tborder: none;\r\n\tcolor: transparent;\r\n\tbackground-color: transparent;\r\n\tz-index: 100;\r\n}\r\n.overlay-hugeinc.open .ion-ios-close-empty {\r\n    color: #000;\r\n    font-size: 50px;\r\n}\r\n.overlay nav {\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\ttop: 50%;\r\n\theight: 60%;\r\n\tfont-size: 54px;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\r\n}\r\n.overlay ul {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin: 0 auto;\r\n\tdisplay: inline-block;\r\n\theight: 100%;\r\n\tposition: relative;\r\n}\r\n.overlay ul li {\r\n\tdisplay: block;\r\n\theight: 20%;\r\n\theight: calc(100% / 5);\r\n\tmin-height: 54px;\r\n}\r\n.overlay ul li a {\r\n\tfont-weight: 300;\r\n\tdisplay: block;\r\n\ttransition: color 0.2s;\r\n}\r\n.overlay ul li a:hover,\r\n.overlay ul li a:focus {\r\n\tcolor: #000;\r\n}\r\n.overlay-hugeinc {\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransition: opacity 0.5s, visibility 0s 0.5s;\r\n}\r\n.overlay-hugeinc.open {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\ttransition: opacity 0.5s;\r\n}\r\n.overlay-hugeinc nav {\r\n\t-webkit-perspective: 1200px;\r\n\tperspective: 1200px;\r\n}\r\n.overlay-hugeinc nav ul {\r\n\topacity: 0.4;\r\n\t-webkit-transform: translateY(-25%) rotateX(35deg);\r\n\ttransform: translateY(-25%) rotateX(35deg);\r\n\ttransition: opacity 0.5s, -webkit-transform 0.5s;\r\n\ttransition: transform 0.5s, opacity 0.5s;\r\n\ttransition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\r\n}\r\n.overlay-hugeinc.open nav ul {\r\n\topacity: 1;\r\n\t-webkit-transform: rotateX(0deg);\r\n\ttransform: rotateX(0deg);\r\n}\r\n.overlay-hugeinc.close nav ul {\r\n\t-webkit-transform: translateY(25%) rotateX(-35deg);\r\n\ttransform: translateY(25%) rotateX(-35deg);\r\n}\r\n/**\r\n * 9.0 - Contact Page Social\r\n */\r\n.social {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n.social li {\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n.social li a {\r\n\tborder: 1px solid #888;\r\n\tfont-size: 22px;\r\n\tcolor: #888;\r\n\ttransition: all 0.3s ease-in;\r\n}\r\n.social li a:hover {\r\n\tbackground-color: #333;\r\n\tcolor: #fff;\r\n}\r\n.facebook a {\r\n\tpadding: 12px 21px;\r\n}\r\n.twitter a {\r\n    padding: 12px 15px;\r\n}\r\n.google-plus a {\r\n    padding: 12px 15px;\r\n}\r\n.tumblr a {\r\n\tpadding: 12px 20px;\r\n}\r\n/**\r\n * 10.0 - Contact Form\r\n */\r\n.contact-form input {\r\n\tborder: 1px solid #aaa;\r\n\tmargin-bottom: 15px;\r\n\twidth: 100%;\r\n\tpadding: 15px 15px;\r\n\tfont-size: 16px;\r\n\tline-height: 100%;\r\n\ttransition: 0.4s border-color linear;\r\n}\r\n.contact-form textarea {\r\n\tborder: 1px solid #aaa;\r\n\tmargin-bottom: 15px;\r\n\twidth: 100%;\r\n\tpadding: 15px 15px;\r\n\tfont-size: 16px;\r\n\tline-height: 20px !important;\r\n\tmin-height: 183px;\r\n\ttransition: 0.4s border-color linear;\r\n}\r\n.contact-form input:focus,\r\n.contact-form textarea:focus {\r\n\tborder-color: #666;\r\n}\r\n.btn-send {\r\n\tbackground: none;\r\n\tborder: 1px solid #aaa;\r\n\tcursor: pointer;\r\n\tpadding: 25px 80px;\r\n\tdisplay: inline-block;\r\n\tletter-spacing: 1px;\r\n\tposition: relative;\r\n\ttransition: all 0.3s;\r\n}\r\n.btn-5 {\r\n\tcolor: #666;\r\n\theight: 70px;\r\n\tmin-width: 260px;\r\n\tline-height: 15px;\r\n\tfont-size: 16px;\r\n\toverflow: hidden;\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n.btn-5 span {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-transition: all 0.3s;\r\n\t-webkit-backface-visibility: hidden;\r\n\t-moz-transition: all 0.3s;\r\n\t-moz-backface-visibility: hidden;\r\n\ttransition: all 0.3s;\r\n\tbackface-visibility: hidden;\r\n}\r\n.btn-5:before {\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tline-height: 2.5;\r\n\tfont-size: 180%;\r\n\ttransition: all 0.3s;\r\n}\r\n.btn-5:active:before {\r\n\tcolor: #703b87;\r\n}\r\n.btn-5b:hover span {\r\n\t-webkit-transform: translateX(200%);\r\n\ttransform: translateX(200%);\r\n}\r\n.btn-5b:before {\r\n\tleft: -100%;\r\n\ttop: 0;\r\n}\r\n.btn-5b:hover:before {\r\n\tleft: 0;\r\n}\r\n/**\r\n * 11.0 - Media Query\r\n */\r\n@media (max-width: 991px) {\r\n\t.main-nav a {\r\n\t\tmargin-right: 20px;\r\n\t}\r\n\r\n\t#header-search-box {\r\n\t\tposition: absolute;\r\n\t\tright: 20px;\r\n\t}\r\n}\r\n@media (max-width: 767px) {\r\n\t#header-search-box {\r\n\t\tright: 20px;\r\n\t\ttop: 9px;\r\n\t}\r\n\r\n\t.main-nav {\r\n\t\tmargin-top: 2px;\r\n\t}\r\n\r\n\t.btn-5 span {\r\n    \tdisplay: none;\r\n\t}\r\n\r\n\t.btn-5b:before {\r\n\t    left: 0;\r\n\t}\r\n}\r\n@media (max-width: 431px) {\r\n\t.logo h1 {\r\n\t\tmargin-top: 8px;\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t.post {\r\n\t\tbackground: #fff;\r\n\t\tpadding: 0 10px 0;\r\n\t}\r\n\r\n\t.more-link {\r\n\t\tfont-size: 0.9em;\r\n\t\tline-height: 100%;\r\n\t}\r\n}\r\n@media screen and (max-height: 30.5em) {\r\n\t.overlay nav {\r\n\t\theight: 70%;\r\n\t\tfont-size: 34px;\r\n\t}\r\n\t.overlay ul li {\r\n\t\tmin-height: 34px;\r\n\t}\r\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/pace.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/css/pace.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pace .pace-progress {\n  background: #000;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 1px;\n  transition: width 1s;\n}\n\n.pace-inactive {\n  display: none;\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/custom.css":
/*!****************************!*\
  !*** ./src/css/custom.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!./custom.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/custom.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/pace.css":
/*!**************************!*\
  !*** ./src/css/pace.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!./pace.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/pace.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************************!*\
  !*** multi ./src/styles.css ./src/css/custom.css ./src/css/pace.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/leo/workspace/blog/web/src/styles.css */"./src/styles.css");
__webpack_require__(/*! /Users/leo/workspace/blog/web/src/css/custom.css */"./src/css/custom.css");
module.exports = __webpack_require__(/*! /Users/leo/workspace/blog/web/src/css/pace.css */"./src/css/pace.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map