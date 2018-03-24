




/*
     FILE ARCHIVED ON 6:07:03 maj 24, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:45:07 cze 3, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function changePic(ziel, wert) {
    document.getElementById(ziel).style.backgroundImage = "url("+wert+")";
}

function showLang() {
    document.getElementById("choose_lang").style.display = "block";
}
function hideLang () {
    document.getElementById("choose_lang").style.display = "none";
}

function showSEO() {

    // andere layer verschwinden lassen
    document.getElementById("alertBox").style.display = "none";

    showBusyLayer();
    var win = window;
    width_x = win.innerWidth ? win.innerWidth : win.document.body.clientWidth;
    container_x = document.getElementById("seo").style.width.substr(0,document.getElementById("seo").style.width.length-2);
    document.getElementById("seo").style.left = ((width_x/2) - (container_x/2))+"px";
    document.getElementById("seo").style.top = "20px";
    document.getElementById('seo').style.display= "block";
}


/* ## layersteuerung ## */

function show_preview (itemID, buttonID){
    pe.stop();

    if (document.getElementById("div_flashtrailer").style.visibility == "visible") {
        controlMovie('trailer','stop');
    } else if (document.getElementById("div_ingame").style.visibility == "visible") {
        controlMovie('ingame','stop');
    }

    //document.getElementById("div_screenshots").style.visibility = "hidden";
    document.getElementById("div_flashtrailer").style.visibility = "hidden";
    document.getElementById("div_gewinne").style.visibility = "hidden";
    document.getElementById("div_infos").style.visibility = "hidden";
    document.getElementById("div_ingame").style.visibility = "hidden";

    document.getElementById(current_item).style.visibility = "hidden";
    document.getElementById(current_button).className = "mm_box_std";

    current_item = itemID;
    current_button = buttonID;

    document.getElementById(current_item).style.visibility = "visible";
    document.getElementById(current_button).className = "mm_box_active";

    if (document.getElementById("div_flashtrailer").style.visibility == "visible") {
        if (itemID == "div_flashtrailer") {
            controlMovie('trailer','play');
        }
    }
    if (document.getElementById("div_ingame").style.visibility == "visible") {
        if (itemID == "div_ingame") {
            controlMovie('ingame','play');
        }
    }
}
/* ## layersteuerung ## */

/* ## FLASHSTEURUNG ## */
function findFlash (flash) {
    if (document.all) {
        if (document.all[flash]) {
            return document.all[flash];
        }
        if (window.opera) {
            var movie = eval(window.document + flash);
            if (movie.SetVariable) {
                return movie;
            }
        }
        return;
    }
    if(document.layers) {
        if(document.embeds) {
            var movie = document.embeds[flash];
            if (movie.SetVariable) {
                return movie;
            }
        }
        return;
    }
    if (!document.getElementById) {
        return;
    }

    var movie = document.embeds[flash];////document.getElementById(flash);
    if (movie.SetVariable) {
        return movie;
    }

    var movies = movie.getElementsByTagName('embed');
    if (!movies || !movies.length) {
        return;
    }

    movie = movies[0];
    if (movie.SetVariable) {
        return movie;
    }
    return;
}

function getFlashMovie(movieName) {
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    return (isIE) ? window[movieName] : document[movieName];
}

function controlMovie(target,rawAction) {
    var actionStr = rawAction;

    //findFlash(target).controlMovieInFlash(actionStr);
    window.setTimeout('findFlash("'+target+'").controlMovieInFlash("'+actionStr+'")', 500);
}
/* ## FLASHSTEURUNG ## */

/* ## Rotator ## */
var item_no = 0;

//var items = new Array('div_flashtrailer', 'div_ingame', 'div_gewinne', 'div_screenshots', 'div_infos');
var items = new Array('div_flashtrailer', 'div_ingame', 'div_gewinne', 'div_infos');
//var buttons = new Array('but_trailer', 'but_ingame', 'but_gewinne', 'but_screenshots', 'but_infos');
var buttons = new Array('but_trailer', 'but_ingame', 'but_gewinne', 'but_infos');

function show_item(itemID, buttonID) {
    //alert('show item ' + item_id);
    if(itemID == current_item) {
        //alert('active ' + current_item);
        return;
    }

    document.getElementById(current_item).style.visibility = "hidden";
    document.getElementById(current_button).className = "mm_box_std";

    current_item = itemID;
    current_button = buttonID;

    document.getElementById(current_item).style.visibility = "visible";
    document.getElementById(current_button).className = "mm_box_active";
}

var pe = new PeriodicalExecuter(playNext, 5);
//new PeriodicalExecuter(playNext, 5);

function playNext() {
    show_item(items[item_no], buttons[item_no]);
    item_no++;
    item_no %= items.length;
}
/* ## Rotator ## */

function stopRotator () {
    pe.stop();
}

/* ## Screenshots ## */
var screen_number = 1;
var screen_maxNumber = 7;
function changeScreen(where) {
    pe.stop();
    if (where == "up") {
        if (screen_number<screen_maxNumber) {
            screen_number++;
        } else {
            screen_number=1;
        }
    } else {
        if (screen_number>1) {
            screen_number--;
        } else {
            screen_number = screen_maxNumber;
        }
    }
    document.getElementById("screenshot").innerHTML = '<img src="'+CDN+'do_img/global/intro/screenshot_'+screen_number+'.jpg" width="426" height="160" alt="" />';
}
/* ## Screenshots ## */

/* ## Gewinne ## */
var prize_number = 1;
var prize_maxNumber = 1;
var text = "";
function changePrize(where) {
    pe.stop();
    if (where == "up") {
        if (prize_number<prize_maxNumber) {
            prize_number++;
        } else {
            prize_number=1;
        }
    } else {
        if (prize_number>1) {
            prize_number--;
        } else {
            prize_number = prize_maxNumber;
        }
    }
    document.getElementById("prizes").style.backgroundImage = CDN+'do_img/global/intro/prizes_'+prize_number+'.png';
    document.getElementById("prizes").innerHTML = "{/literal}{$res.intro_prize_1_text}{literal}";
}
/* ## Screenshots ## */

function getPreload() {
    preloadImg('do_img/de/intro/but_register_1.png','do_img/global/intro/loader_anim.gif','do_img/global/intro/bg_alert.png','do_img/global/intro/bg_choose_instance.png','do_img/global/intro/but_reg_1.png','do_img/global/intro/but_log_1.png','do_img/global/intro/but_lang_1.png','do_img/global/intro/but_box_std_1.png','do_img/global/intro/but_box_std_2.png','do_img/global/intro/but_std_1.png');
}


function showOpenId() {
    $('loginForm_default').style.display = 'none';
    $('loginForm_openId_container').style.display = 'block';
}

function hideOpenId() {
    $('loginForm_openId_container').style.display = 'none';
    $('loginForm_default').style.display = 'block';
}
