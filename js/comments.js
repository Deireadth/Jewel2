﻿if (window.innerWidth<480) setTimeout("zmienKomentarz()", 5000);
var widoczny = 1

function zmienKomentarz() {
    $("#comment" + widoczny).fadeOut(1000)
    $("#comment" + widoczny).addClass("mobileHidden")
    widoczny++
    if (widoczny > 6) widoczny = 1
    $("#comment" + widoczny).removeClass("mobileHidden")
    $("#comment" + widoczny).fadeIn(950)
    setTimeout("zmienKomentarz()", 5000);
}
