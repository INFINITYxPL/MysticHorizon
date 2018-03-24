




/*
     FILE ARCHIVED ON 6:08:41 maj 24, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:21:04 cze 3, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function redirect(destination, newWindow)
{
    if (destination)
    {
        if (newWindow)
        {
            window.open(destination, '_blank');
        }
        else
        {
            window.open(destination, '_self');
        }
    }
    else
    {
        return false;
    }
}

function translate(s)
{
    return s;
}

var browserType = 'unknown';
if (navigator.userAgent.match(/Opera/)) {
    browserType = 'opera';
} else if (navigator.userAgent.match(/MSIE/)) {
    browserType = 'ie';
} else if (navigator.userAgent.match(/Mozilla/)) {
    browserType = 'ns';
}


function domGet(id)

{

    if (typeof(id) != 'string') {

        return id;

    } else {

        return document.getElementById(id);

    }

}



function domGetChild(obj, id)

{

    for (var i=0; i<obj.childNodes.length; i++) {

        var n = obj.childNodes[i];

        if (n.nodeType != 1) continue;

        if (n.id == id) return n;

        var r = domGetChild(n, id);

        if (r != false) return r;

    }

    return false;

}



function domGetBody()

{

    var tmp = document.getElementsByTagName('BODY');

    return tmp[0];

}



function domGetOffset(obj)

{

    obj = domGet(obj);

    var offset = { x:0, y:0 };

    if (obj.offsetX) return { x:obj.offsetX, y:obj.offsetY };

    while (obj) {

        offset.x += obj.offsetLeft;

        offset.y += obj.offsetTop;

        obj = obj.offsetParent;

    }

    return offset;

}



function domFireEvent(obj, name)

{

    if (browserType == 'ns') {

//      var evnt = createEventObject(); //obj.ownerDocument.createEventObject();

//      evnt.initEvent(name.slice(2), false, false);

//      obj.dispatchEvent(evnt);

/*

        if (!event) event = obj.ownerDocument.createEventObject();

        event.initEvent(name.slice(2), false, false);

        obj.dispatchEvent(event);

*/

        if (typeof(obj[name]) == 'function') {

            obj[name]();

        } else if (obj.getAttribute(name)) {

            eval(obj.getAttribute(name));

        }

    } else {

        obj.fireEvent(name, window.event);

    }

}



function domAttachEvent(obj, name, handler)

{

    if (browserType == 'ns') {

        obj.addEventListener(name.slice(2), handler, false);

    } else {

        obj.attachEvent(name, handler);

    }

}



function domDetachEvent(obj, name, handler)

{

    if (browserType == 'ns') {

        obj.removeEventListener(name.slice(2), handler, false);

    } else {

        obj.removeEvent(name, handler);

    }

}



function domOnLoad(handler)

{

    domAttachEvent(window, 'onload', handler);

}



function domEventGetCoords()

{

    if (window.event) {

        return { x:window.event.clientX, y:window.event.clientY };

    } else {

        return { x:window.nsevent.pageX, y:window.nsevent.pageY };

    }

}



function domEventGetTarget()

{

    if (window.event) {

        return window.event.srcElement;

    } else {

        return window.nsevent.target;

    }

}



function domEventPreventDefault()

{

    if (window.event) {

        window.event.returnValue = false;

    } else {

        window.nsevent.preventDefault();

    }

}



function domEventCancelBubble()

{

    if (window.event) {

        window.event.cancelBubble = true;

    } else {

        window.nsevent.stopPropagation();

    }

}



function domGetParent(obj, tagName)

{

    if (!tagName) {

        while (obj && obj.nodeType && obj.nodeType != 1) obj = obj.parentNode;

    } else {

        while (obj && obj.tagName && obj.tagName.toLowerCase() != tagName.toLowerCase()) obj = obj.parentNode;

    }

    return obj;

}



function domGetPrevious(obj, tagName)

{

    obj = domGet(obj);

    while (true) {

        if (obj.nodeType == 1) {

            if (typeof(tagName) == 'object') {

                for (var i=0; i<tagName.length; i++) if (tagName[i].toLowerCase() == obj.tagName.toLowerCase()) return obj;

            } else if (typeof(tagName) == 'string') {

                if (tagName.toLowerCase() == obj.tagName.toLowerCase()) return obj;

            } else {

                return obj;

            }

        }

        if (obj.previousSibling) {

            obj = obj.previousSibling;

        } else if (obj.parentNode) {

            obj = obj.parentNode;

        } else {

            return null;

        }

    }

}



function domGetNext(obj, tagName)

{

    obj = domGet(obj);

    while (true) {

        if (obj.nodeType == 1) {

            if (typeof(tagName) == 'object') {

                for (var i=0; i<tagName.length; i++) if (tagName[i].toLowerCase() == obj.tagName.toLowerCase()) return obj;

            } else if (typeof(tagName) == 'string') {

                if (tagName.toLowerCase() == obj.tagName.toLowerCase()) return obj;

            } else {

                return obj;

            }

        }

        if (obj.nextSibling) {

            obj = obj.nextSibling;

        } else if (obj.parentNode) {

            obj = obj.parentNode;

        } else {

            return null;

        }

    }

}



function domSetAlpha(obj, alpha)

{

    obj = domGet(obj);

    if (document.addEventListener) {

        obj.style.MozOpacity = parseInt(alpha)/100;

    } else {

        obj.style.filter = 'alpha(opacity='+parseInt(alpha)+', finishopacity=0, style=0)';

    }

}



function domRemove(obj)

{

    obj = domGet(obj);

    obj.parentNode.removeChild(obj);

}











var gDomSetFlashVarQueue = new Array();

var gDomSetFlashVarTimer = false;



function domSetFlashVarTimer()

{

    if (gDomSetFlashVarQueue.length == 0) {

        clearInterval(gDomSetFlashVarTimer);

        gDomSetFlashVarTimer = false;

        return;

    }

    var queueItem = gDomSetFlashVarQueue.pop();

    try {

        queueItem.obj.SetVariable(queueItem.name, queueItem.value);

    } catch (e) {

    }

    try {

        queueItem.obj.SetVariable('c.'+queueItem.name, queueItem.value);

    } catch (e) {

    }

    queueItem.count--;

    if (queueItem.count > 0) {

        gDomSetFlashVarQueue.unshift(queueItem);

    }

}



function domSetFlashVar(id, name, value)

{

    var obj = false;

    if (document.embeds) obj = document.embeds[id];

    if (!obj) obj = document.getElementById(id);

    if (!obj) return;

    var queueItem = new Object();

    queueItem.obj = obj;

    queueItem.name = name;

    queueItem.value = value;

    queueItem.count = 3;

    gDomSetFlashVarQueue.unshift(queueItem);

    if (!gDomSetFlashVarTimer) {

        gDomSetFlashVarTimer = setInterval('domSetFlashVarTimer()', 20);

    }

}





if (browserType == 'ns') {

    document.addEventListener('mousedown', function(e) { window.nsevent=e; }, true);

    document.addEventListener('mouseup', function(e) { window.nsevent=e; }, true);

    document.addEventListener('mousemove', function(e) { window.nsevent=e; }, true);

    document.addEventListener('click', function(e) { window.nsevent=e; }, true);

    document.addEventListener('keyup', function(e) { window.nsevent=e; }, true);

    document.addEventListener('keydown', function(e) { window.nsevent=e; }, true);

    document.addEventListener('keypressed', function(e) { window.nsevent=e; }, true);

    document.addEventListener('blur', function(e) { window.nsevent=e; }, true);

    document.addEventListener('focus', function(e) { window.nsevent=e; }, true);

}



////////////////////////////////////////////////////////////////////////////////

function popup(width, height, name, url)
{
    if (!url) {
        var a = domGetParent(domEventGetTarget(), 'A');
        if (a) url = a.href;
    }
    if (url) {
        if (!name) name = '';
        var w = window.open(url, name, 'width='+width+',height='+height+',menubar=no,location=no,status=yes,toolbar=no');
        if (w) {
            w.focus();
            if (window.event || window.nsevent) {
                domEventPreventDefault();
                domEventCancelBubble();
            }
            return false;
        }
    }
    return false;
}
function popupAbo(width, height, name, url)
{
    if (!url) {
        var a = domGetParent(domEventGetTarget(), 'A');
        if (a) url = a.href;
    }
    if (url) {
        if (!name) name = '';
        var w = window.open(url, name, 'width='+width+',height='+height+',menubar=no,location=no,status=yes,toolbar=no');
        if (w) {
            w.focus();
            if (window.event || window.nsevent) {
                domEventPreventDefault();
                domEventCancelBubble();
            }
            return false;
        }
    }
}

function popupClose(reload)
{
    if (window.opener) {
        if (reload) if (window.opener.location) window.opener.location.reload();
        window.close();
    } else {
        history.back();
    }
}



////////////////////////////////////////////////////////////////////////////////

function changeButtons(welchen) {
    var image = welchen.src;
    var endung = (image.substr(image.length-3,3));
    if((image.substr(image.length-5,1)) == 0)  var teil = 1;
    else teil = 0;
    var newImage = (image.substring(0,image.length-5)) + teil + "." +endung;
    welchen.src = newImage;
}
/*
var F1;
function popup(ziel,breite,hoehe) {
    if(F1 && !F1.closed) {
        F1.close();
    }
    F1 = window.open(ziel, "Fenster1", "width="+breite+",height="+hoehe+",left=0,top=0");
}
*/


function bilderVorladen() {
    document.Vorladen = new Array();
    if(document.images) {
        for(var i = 0; i < bilderVorladen.arguments.length; i++) {
            document.Vorladen[i] = new Image();
            document.Vorladen[i].src = bilderVorladen.arguments[i];
        }
    }
}

function popMap(width, height, name, url)
{
    if (!url) {
        var a = domGetParent(domEventGetTarget(), 'A');
        if (a) url = a.href;
    }
    if (url) {
        if (!name) name = '';
        var w = window.open(url, name, 'width='+width+',height='+height+',menubar=no,location=no,status=yes,toolbar=no');
        if (w) {
            w.focus();
            if (window.event || window.nsevent) {
                domEventPreventDefault();
                domEventCancelBubble();
            }
            return false;
        }
        else
        {
                  nextpage =confirm('Bitte Deaktiviere bei deinem Browser den Popupblocker. Dieser verhindert das die Karte geladen wird. Soll nun die Karte ohne Popup angezeigt werden');
                  if (nextpage) window.location.href=url;
                }
    }
}

// ############################################################
// Seitenabdeckung bei infolayern #############################
// ############################################################
function showBusyLayer() {
    var busyLayer = document.getElementById("busy_layer")
    if (busyLayer != null) {
        busyLayer.style.visibility = "visible";
        // Would be nicer to have something like window.height, but that does not work with all browsers.
        busyLayer.style.height = "850px";
    }
}

function hideBusyLayer() {
    var busyLayer = document.getElementById("busy_layer")
    if (busyLayer != null) {
        busyLayer.style.visibility = "hidden";
        busyLayer.style.height = "0px";
    }
}


/***********************************************
* Bookmark site script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at /web/20100524060841/http://www.dynamicdrive.com/ for full source code
***********************************************/
function bookmarkDO(title,url){
    if (window.sidebar) {// firefox
        window.sidebar.addPanel(title, url, "");
    } else if(window.opera && window.print) { // opera
        var elem = document.createElement('a');
        elem.setAttribute('href',url);
        elem.setAttribute('title',title);
        elem.setAttribute('rel','sidebar');
        elem.click();
    } else if(document.all) {// ie
        window.external.AddFavorite(url, title);
    }
}

function hideQuestDetails()
{
    $('questDetails').innerHTML = '<img src="'+CDN+'do_img/global/intro/loader_anim.gif" alt="" style="position: absolute; left: -118px; top: 28px;" />';
};

function toggleQuestChildrenVisibility(idToToggle, idOfImage, type)
{
    $('list_' + idToToggle).toggle();
    if ($('list_' + idToToggle).style.display == 'none')
    {
        $(type + '_' + idOfImage).src = CDN+'do_img/global/quests/condition_closed.gif';
    }
    else
    {
        $(type + '_' + idOfImage).src = CDN+'do_img/global/quests/condition_open.gif';
    }
}

function preloadImg() {
    document.Vorladen = new Array();

    if(document.images) {
        for(var i = 0; i < preloadImg.arguments.length; i++) {
            document.Vorladen[i] = new Image();
            document.Vorladen[i].src = preloadImg.arguments[i];
        }
    }
}

function questDetailToggle()
{
    $('questDetailTasks').toggle();
    $('questDetailDescription').toggle();
    if (!$('questDetailTasks').visible())
    {
        $('questDetailToggle').style.backgroundImage = 'url(' + CDN + '../do_img/global/quests/toggle_list.png)';
    }
    else
    {
        $('questDetailToggle').style.backgroundImage = 'url(' + CDN + '../do_img/global/quests/toggle_text.png)';
    }
}


function closeLayer (layer) {
    $(layer).style.display = 'none';
    hideBusyLayer();
}

function referToURL(webURL)
{
    if (window.opener) {
        if(webURL.indexOf("//") == 0) {
            webURL = webURL.substr(1,webURL.length);
        }
        window.opener.location.href = webURL;
        window.opener.focus();
    }
}

function referToExternalURL(webURL)
{
    if (window.opener) {
        window.opener.location.href = webURL;
        window.opener.focus();
    }
}

function openContextHelp() {
    showHelp();
}

function showHangar () {
    if (window.opener) {
        window.opener.location.href = 'indexInternal.es?action=internalDock';
        window.opener.focus();
    } else {
        // todo: öffne neue seite mit dock-startseite
    }
}


/* Breaking News */
function BreakingNews()
{
    this.breakingNewsInterval = false;
    this.currentIconID        = 0;
    this.maxIconID            = 0;
    this.keys                 = false;
    this.images               = false;
    this.titles               = false;
    this.links                = false;
    this.durations            = false;
    this.secondsCounter       = 0;
    this.titlePosition        = 12;

    breakingNewsObject = this;

    this.setMaxIconID = function(iconCount)
    {
        this.maxIconID = iconCount - 1;
        if (this.maxIconID == 0) {
            $('breakingNewsIconContainer').hide();
        }
    };

    this.setKeys = function(array)
    {
        this.keys = array;
    };

    this.setImages = function(array)
    {
        this.images = array;
    };

    this.setTitles = function(array)
    {
        this.titles = array;
    };

    this.setLinks = function(array)
    {
        this.links = array;
    };

    this.setDurations = function(array)
    {
        this.durations = array;
    };

    this.init = function()
    {
        this.currentIconID = this.maxIconID;
        this.hardRedraw();
        window.setInterval('breakingNewsObject.scrollTitle()', 50);
    };

    this.start = function()
    {
        if (this.breakingNewsInterval == false && this.maxIconID > 0) {
            this.breakingNewsInterval = window.setInterval('breakingNewsObject.changeHighlight()', 1000);
        }
    };

    this.stop = function()
    {
        window.clearInterval(this.breakingNewsInterval);
        this.breakingNewsInterval = false;
    };

    this.changeHighlight = function()
    {
        this.secondsCounter++;
        if (this.durations[this.currentIconID] <= this.secondsCounter) {
            this.secondsCounter = 0;
            this.currentIconID--;
            if (this.currentIconID < 0) this.currentIconID = this.maxIconID;
            this.smoothRedraw();
            this.titlePosition = 12;
        }
    };

    this.smoothRedraw = function()
    {
        var myArray = $$('.breakingNewsTitle');
        for (var i = 0; i < myArray.length; i++) {
            myArray[i].innerHTML = ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ';
        }

        var helperDiv = $('breakingNewsContainer').cloneNode(true);
    	helperDiv.setAttribute('id', 'breakingNewsContainerHelper');
        helperDiv.style.display = 'none';
        helperDiv.style.backgroundImage = 'url(do_img/global/events/' + this.images[this.currentIconID] + ')';

        $('breakingNewsContainer').parentNode.appendChild(helperDiv);

        Effect.Fade('breakingNewsContainer', { duration: 0.5 } );
        Effect.Appear('breakingNewsContainerHelper', { duration: 0.5 } );
        window.setTimeout('$(\'breakingNewsContainer\').remove(); $(\'breakingNewsContainerHelper\').setAttribute(\'id\', \'breakingNewsContainer\');', 1100);

        $('currentIconID').value = this.keys[this.currentIconID];
        $('breakingNewsContainerFrame').onclick = function() { showNews($('currentIconID').value) }

        this.redrawIcons();
    };

    this.hardRedraw = function()
    {
        var myArray = $$('.breakingNewsTitle');
        for (var i = 0; i < myArray.length; i++) {
            myArray[i].innerHTML = ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ' + this.titles[this.currentIconID] + ' --- ';
        }

        $('breakingNewsContainer').style.backgroundImage = 'url(do_img/global/events/' + this.images[this.currentIconID] + ')';
        if ($('breakingNewsContainerHelper')) $('breakingNewsContainerHelper').style.backgroundImage = 'url(do_img/global/events/' + this.images[this.currentIconID] + ')';

        $('currentIconID').value = this.keys[this.currentIconID];
        $('breakingNewsContainerFrame').onclick = function() { showNews($('currentIconID').value) }

        this.redrawIcons();
        this.titlePosition = 12;
    };

    this.redrawIcons = function()
    {
        $$('.breakingNewsIcon').each(
            function(e)
            {
                e.style.border = '1px solid black';
            }
        );
        $('breakingNewsIcon' + (this.currentIconID + 1)).style.border = '1px solid #dcdcdc';
    };

    this.scrollTitle = function()
    {
        this.titlePosition -= 2;

        var titles = $$('.breakingNewsTitle');
        for (var i = 0; i < titles.length; i++) {
            titles[i].setStyle( { left: this.titlePosition + 'px' } );
        }
    };

    this.over = function(id)
    {
        this.currentIconID = id - 1;
        this.stop();
        this.hardRedraw();
    };

    this.out = function()
    {
        this.start();
    };
}

function clientResolutionChanged()
{
    if (opener) {
        xajax_clientResolutionChanged();
    }
}

function changeTwoTab(tabID, container) {
    if (tabID == 'last') {
        $('tab_first_'+container).className = 'tab_first skylab_font_tab_unselected';
        $('tab_last_'+container).className = 'tab_end skylab_font_tab_selected';
        $('tab_first_'+container).style.backgroundColor = '#1f2021';
        $('tab_last_'+container).style.backgroundColor = '#3C3E3F';
        $('tab_separator_first_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_select_right.jpg)';
        $('tab_endseparator_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_end_select.png)';
    } else if(tabID == 'first') {
        $('tab_first_'+container).className = 'tab_first skylab_font_tab_unselected';
        $('tab_last_'+container).className = 'tab_end skylab_font_tab_unselected';
        $('tab_first_'+container).style.backgroundColor = '#3C3E3F';
        $('tab_last_'+container).style.backgroundColor = '#1f2021';
        $('tab_separator_first_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_select_left.jpg)';
        $('tab_endseparator_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_end_unselect.png)';
    }
}

function changeThreeTab(tabID, container) {
    if (tabID == 'last') {
        $('tab_first_'+container).className = 'tab_first skylab_font_tab_unselected';
        $('tab_second_'+container).className = 'tab_first skylab_font_tab_unselected';
        $('tab_last_'+container).className = 'tab_end skylab_font_tab_selected';
        $('tab_first_'+container).style.backgroundColor = '#1f2021';
        $('tab_second_'+container).style.backgroundColor = '#1f2021';
        $('tab_last_'+container).style.backgroundColor = '#3C3E3F';
        $('tab_separator_first_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_middle_unselected.jpg)';
        $('tab_separator_second_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_middle_selected_right.jpg)';
        $('tab_endseparator_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_end_select.png)';
    } else if(tabID == 'first') {
        $('tab_first_'+container).className = 'tab_first skylab_font_tab_selected';
        $('tab_second_'+container).className = 'tab_end skylab_font_tab_unselected';
        $('tab_last_'+container).className = 'tab_end skylab_font_tab_unselected';
        $('tab_first_'+container).style.backgroundColor = '#3C3E3F';
        $('tab_second_'+container).style.backgroundColor = '#1f2021';
        $('tab_last_'+container).style.backgroundColor = '#1f2021';
        $('tab_separator_first_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_select_left.jpg)';
        $('tab_separator_second_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_middle_unselected.jpg)';
        $('tab_endseparator_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_end_unselect.png)';
    } else if(tabID == 'second') {
        $('tab_first_'+container).className = 'tab_first skylab_font_tab_unselected';
        $('tab_second_'+container).className = 'tab_first skylab_font_tab_selected';
        $('tab_last_'+container).className = 'tab_end skylab_font_tab_unselected';
        $('tab_first_'+container).style.backgroundColor = '#1f2021';
        $('tab_second_'+container).style.backgroundColor = '#3C3E3F';
        $('tab_last_'+container).style.backgroundColor = '#1f2021';
        $('tab_separator_first_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_middle_selected_right.jpg)';
        $('tab_separator_second_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_select_left.jpg)';
        $('tab_endseparator_'+container).style.backgroundImage = 'url(do_img/global/skylab/tab_end_unselect.png)';
    }
}

function sendTransport(mode, text) {
    $('mode').value = mode;
    if(mode == 'fast') {
        Dialog.confirm(text,
        {   height: 100,
            width:300,
            //className: "alphacube",
            ok:function(win) {$('sendTransport').submit(); return true;}
        });
    } else {
        $('sendTransport').submit()
    }
}

function openConfirm(myURI, text) {
    Dialog.confirm(text,
    {   height: 100,
        width:300,
        //className: "alphacube",
        ok:function(win) {location.href=myURI; return true;}
    });
}

function openConfirmSkillTreeReset(text) {
    Dialog.confirm(text,
    {   height: 100,
        width:300,
        //className: "alphacube",
        ok:function(win) {
            xajax_skillTreePurchaseSkillReset();
            return true;
        }
    });
}

function toggleTarget(target) {
    if (target == 'skylab') {
        $('to_ship').src = 'do_img/global/skylab/to_ship_0.png';
        $('to_skylab').src = 'do_img/global/skylab/to_skylab_1.png';
        $('but_to_ship').src = 'do_img/global/skylab/but_left_0.png';
        $('but_to_skylab').src = 'do_img/global/skylab/but_right_1.png';
        $('target').value = target;
    } else if (target == 'ship') {
        $('to_ship').src = 'do_img/global/skylab/to_ship_1.png';
        $('to_skylab').src = 'do_img/global/skylab/to_skylab_0.png';
        $('but_to_ship').src = 'do_img/global/skylab/but_left_1.png';
        $('but_to_skylab').src = 'do_img/global/skylab/but_right_0.png';
        $('target').value = target;
    }
}

function closeAllModules() {
    $('module_baseModule_large').hide();
    $('module_baseModule_small').show();
    $('module_solarModule_large').hide();
    $('module_solarModule_small').show();
    $('module_storageModule_large').hide();
    $('module_storageModule_small').show();
    $('module_transportModule_large').hide();
    $('module_transportModule_small').show();
    $('module_prometiumCollector_large').hide();
    $('module_prometiumCollector_small').show();
    $('module_enduriumCollector_large').hide();
    $('module_enduriumCollector_small').show();
    $('module_terbiumCollector_large').hide();
    $('module_terbiumCollector_small').show();
    $('module_prometidRefinery_large').hide();
    $('module_prometidRefinery_small').show();
    $('module_duraniumRefinery_large').hide();
    $('module_duraniumRefinery_small').show();
    $('module_promeriumRefinery_large').hide();
    $('module_promeriumRefinery_small').show();
    $('module_sepromRefinery_large').hide();
    $('module_sepromRefinery_small').show();
}

var textfeld = "";
function sendFocusTransport(textfeldID) {
    textfeld = textfeldID;
    for (j = 0; j < $('sendTransport').elements.length; j++) {
        if($('sendTransport').elements[j].value == "") {
            $('sendTransport').elements[j].value = 0;
        }
    }

    if ($(textfeldID).value == "0") {
        $(textfeldID).value = "";
    }
}

function showModule(moduleName) {
    $('module_'+moduleName+'_large').show();
    $('module_'+moduleName+'_small').hide();
    if (moduleName == 'transportModule' && textfeld != "") {
        $(textfeld).focus();
    }
}

function hideModule (moduleName) {
    $('module_'+moduleName+'_large').hide();
    $('module_'+moduleName+'_small').show();
}

function showImprint() {

    // andere layer verschwinden lassen
    document.getElementById("alertBox").style.display = "none";

    showBusyLayer();
    var win = window;
    width_x = win.innerWidth ? win.innerWidth : win.document.body.clientWidth;
    container_x = document.getElementById("imprint").style.width.substr(0,document.getElementById("imprint").style.width.length-2);
    document.getElementById("imprint").style.left = ((width_x/2) - (container_x/2))+"px";
    document.getElementById("imprint").style.top = "20px";
    document.getElementById('imprint').style.display= "block";
}

function closeInfo(welcher) {
    document.getElementById(welcher).style.display = "none";
    hideBusyLayer();
}

function checkTransportTime(value) {

    var countElements = 0;

    for (j = 0; j < $('sendTransport').elements.length; j++) {
        if ($('sendTransport').elements[j].type == 'text') {
            countElements = countElements + parseInt($('sendTransport').elements[j].value);
        }
    }
    time = (countElements * value);
    h=0;
    m=0;
    if ((time/60) >= 1) {
        h = Math.floor((time / 60));
    }
    if ((time - (h*60)) < 60) {
        m = Math.round(time - (h*60));
    }
    if (m>=60) m=0;
    if (m < 10) m = "0"+m;
    $('timeForTransport').innerHTML = h + ":" + m;
}

function do_redirect(destination, newWindow) {
    if (destination) {
        if (newWindow) {
            window.open(destination, '_blank');
        } else {
            window.open(destination, '_self');
        }
    } else {
        return false;
    }
}

function clientEvent(string)
{

}

var openSocial = 0;
function bpCloseWindow () {
    if (openSocial == 1) {
        document.location.reload();
    } else {
        self.close();
    }
}

function bpReloadOpener () {
    opener.document.location.reload();
}
