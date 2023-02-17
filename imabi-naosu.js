// ==UserScript==
// @name         Centerize Imabi
// @namespace    https://github.com/MeSnek
// @version      0.1
// @description  centers the text on Imabi.net because it hurts my neck.
// @author       Sneku
// @match        http*://www.imabi.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imabi.net
// @grant        none
// @source

// ==/UserScript==

(function() {
    'use strict';

    //changes the position of the box
    var elem = document.querySelector(".wrap");

    elem.style.margin = "0px";
    elem.style.width = "1425px";

    //changes the actual width of the box to let more text sit in it so it doesnt look like a mobile thing
    var width_elem = document.querySelector(".wrap-main");

    width_elem.style.width = "800px";
    //tesingtonerino
})();