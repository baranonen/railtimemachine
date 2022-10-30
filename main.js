"use strict"

var maps = ["Kasım 2006.pdf", "2007.pdf", "Şubat 2007.pdf", "Ağustos 2007.pdf", "Kasım 2007.pdf", "Haziran 2008.pdf", "Ağustos 2009.pdf", "Eylül 2009.pdf", "Ekim 2012.pdf", "Rev:8 (2013).pdf", "Rev:10 (2014).pdf", "V:3 Rev:0 (2014).pdf", "V:3 Rev:1 (2014).pdf", "V:3 Rev:2 (2015).pdf", "v.3 rev.4 (2016).pdf", "v.3 rev.5 (Kasım 2017).pdf", "v.3 rev.7 (Ekim 2018).pdf", "v.3 rev.8 (Mart 2019).pdf", "v.3 rev.11.2 (Eylül 2020).pdf", "v.3 rev.12 (Aralık 2020).pdf", "v.3 rev.12.1 (Ocak 2021).pdf", "v.3 rev.13.1 (Mayıs 2021).pdf", "v.3 rev.15.1 (Ekim 2022).pdf"]
var currentIndex = maps.length - 1

function back() {
    if (currentIndex != 0) {
        currentIndex += -1
        updateMap()
    }
}

function forward() {
    if (currentIndex != maps.length - 1) {
        currentIndex += 1
        updateMap()
    }
}

function updateMap() {
    document.getElementById("map").style.backgroundImage = "url('maps/" + maps[currentIndex] + "')"
    document.getElementById("date").innerHTML = maps[currentIndex].slice(0, -4)
    if (currentIndex == 0) {
        document.getElementById("backbutton").style.opacity = "30%"
    } else {
        document.getElementById("backbutton").style.opacity = "unset"
    }
    if (currentIndex == maps.length - 1) {
        document.getElementById("forwardbutton").style.opacity = "30%"
    } else {
        document.getElementById("forwardbutton").style.opacity = "unset"
    }
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       back()
    }
    else if (e.keyCode == '39') {
       forward()
    }

}