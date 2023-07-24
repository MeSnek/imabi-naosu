// ==UserScript==
// @name         Imabi Naosu
// @namespace    https://github.com/MeSnek/imabi-naosu
// @version      0.3
// @update       https://github.com/MeSnek/imabi-naosu/raw/master/build/imabi-naosu.user.js
// @description  centers the text on Imabi.net because it hurts my neck.
// @author       Sneku
// @match        http*://www.imabi.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imabi.net
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    var positionElem = document.querySelector(".wrap");
    var widthElem = document.querySelector(".wrap-main");
    var membersElem = document.querySelector("#\35 f52ad7fe4b05373b339bb2d");

    changePosition(positionElem);
    changeWidth(widthElem);
    addDiv(membersElem);

    //changes the actual width of the box to let more text sit in it so it doesnt look like a mobile thing
    function changeWidth(elem) {
        elem.style.width = "800px";
    }
    //changes the position of the box
    function changePosition(elem) {
        elem.style.margin = "0px";
        elem.style.width = "1425px";
    }
    function addDiv(elem) {
        div = elem.createElement("div");
    }
})();