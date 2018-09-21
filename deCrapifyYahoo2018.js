// ==UserScript==
// @name         deCrapifyYahoo2018
// @namespace    https://football.fantasysports.yahoo.com
// @version      0.0003
// @description  Decrapify the Yahoo Fantasy Footbal experience.
// @author       the_umm_guy
// @match        https://football.fantasysports.yahoo.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    //functions to check page for elements recursivley by class or by id.
    function singleCheck(val) {
        if (document.body.contains(val)){
            val.style.visibility = "hidden"; // or
            val.style.display = "none";
        }
        else{
        }
    }
    //
    function recursiveCheck(val){
        if (document.body.contains(val[0])){
            for(var i = 0; i < val.length; i++){
                val[i].style.visibility = "hidden"; // or
                val[i].style.display = "none"; // depending on what you're doing
            }
        }
        else {
        }
    }
    //
    //remove items from dropdown menu.
    var cashSignMenu = document.getElementsByClassName("F-icon F-shade F-bright Grid-u Wpx-30 Fz-2xl F-positive");
    singleCheck(cashSignMenu[0]);
    //
    var dailyLinkMenu = document.getElementsByClassName("F-header F-bright Grid-u");
    singleCheck(dailyLinkMenu[0]);

    var dailyLinkIcon = document.getElementsByClassName("Fz-med No-py Grid-h-mid");
    singleCheck(dailyLinkIcon[0]);
    //
    var menuButton1 = document.getElementsByClassName("Btn Btn-short Fz-xxs Grid-u");
    singleCheck(menuButton1[0]);
    //
    var menuButton2 = document.getElementsByClassName("Btn-primary Btn-short Fz-xxs Grid-u");
    singleCheck(menuButton2[0]);
    //
    var menuLinksBottom = document.getElementsByClassName("Pstart-30 Ptop-med");
    singleCheck(menuLinksBottom[0]);
    //Hide ads.
    var trophySection = document.getElementById("fantasytrophypromo");
    singleCheck(trophySection);
    var fantasyHero = document.getElementById("fantasyhero");
    singleCheck(fantasyHero);
    var whatsNewSection = document.getElementById("whatsnew");
    singleCheck(whatsNewSection);
    var fantasyShop = document.getElementById("fantasyshoppromo");
    singleCheck(fantasyShop);

    var survivalBox = document.getElementsByClassName("W-100 D-b Mbot-xl");
    singleCheck(survivalBox[0]);
    //Hide side-bar
    var dailyFantasyAd = document.getElementsByClassName("RailSub");
    recursiveCheck(dailyFantasyAd);
    //Hide DF ad header.
    var pageHeader = document.getElementById('ysppageheader');
    singleCheck(pageHeader);
})();