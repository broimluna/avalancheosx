//Apps

//Calculator 
function dis(val)
         {
             document.getElementById("result").value+=val
         }
           
         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
           
         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = ""
         }
// Next App



var i = 0,
minimizedWidth = new Array,
minimizedHeight = new Array,
windowTopPos = new Array,
windowLeftPos = new Array,
panel,
id;

//jQuery
setTimeout(function(){
    $("#startup").fadeOut(200);
	document.getElementById("startupsnd").play(); 
}, 2000)
  
$(function() {
	$("#icons a").draggable();
});
//end of jquery

//custom code
function startTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
   // var s = date.getSeconds(); 
    //var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    //if(h > 12){
      //  h = h - 12;
        //session = "PM";
    //}
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    //s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " " //+ session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function startDate(){
    var date = new Date();
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

	d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    
    var date = y + "-" + m + "-" + d
    document.getElementById("date").innerText = date;
    document.getElementById("date").textContent = date;
    setTimeout(startDate, 1000);
}
function appstoggle() {
	document.getElementById("appsmenu").classList.toggle("opened");
}
document.oncontextmenu = rightClick;
  
  function rightClick(clickEvent) {
	  clickEvent.preventDefault();
	  // return false;
  }
  document.onclick = hideMenu;
  document.oncontextmenu = rightClick;
	
  function hideMenu() {
	  document.getElementById("contextMenu")
			  .style.display = "none"
  }

  function rightClick(e) {
	  e.preventDefault();

	  if (document.getElementById("contextMenu")
			  .style.display == "block")
		  hideMenu();
	  else{
		  var menu = document.getElementById("contextMenu")

		  menu.style.display = 'block';
		  menu.style.left = e.pageX + "px";
		  menu.style.top = e.pageY + "px";
	  }
  }

  function activatefull(ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	}
}

// Function for full screen activation
function deactivatefull() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
}

function openTab(tabName) {
var i;
var x = document.getElementsByClassName("tab");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
document.getElementById(tabName).style.display = "block";
}
function openTabb(tabName) {
	var i;
	var x = document.getElementsByClassName("tabb");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
	}

$(document).ready(function(){
	$("#appsmenu").click(function(){
		document.getElementById("appsmenu").classList.toggle("opened");
	  }, function(){
		document.getElementById("appsmenu").classList.remove("opened");
  
	});
  });			
  

  var changeBG = function(event) {
    var output = document.getElementsByClassName('desktop')[0];
    output.style.background= "url("+URL.createObjectURL(event.target.files[0])+")";
  };

  var resetBG = function(event) {
	var output = document.getElementsByClassName('desktop')[0];
	output.style.background= "";
  }
  function localBG() {
	document.getElementsByClassName('desktop')[0].style.background = "url('https://bing.biturl.top/?resolution=3840&format=image&index=0&mkt=en-CA')";
}


  function defaultColors() {
	// Get the checkbox
	var checkBox = document.getElementById("defaultColor");
	// Get the output text
	var taskbar = document.getElementById("taskbar");
	var appsmenu = document.getElementById("appsmenu");
	var htmltemp = document.getElementById("htmltemp");
	// If the checkbox is checked, display the output text
	if (checkBox.checked == true){
	  taskbar.style.background = "";
	  appsmenu.style.background = "";
	  htmltemp.style.color = "";
	  
	} else {
	  taskbar.style.background = "";
	  appsmenu.style.background = "";
	  htmltemp.style.color = "";
	}
	const winhead = document.getElementsByClassName('windowHeader');
    $(winhead).css('background', '');
	$("#abranding a").css('color', '');
	$("#watermark").css('color', '');
	$('button').css('border-color', '');
	$('.checkBox').css('color', '');
	$('.wppicker').css('border-color', '');
  }

  function centeredApps() {
	// Get the checkbox
	var checkBox = document.getElementById("centrdAppsChk");
	// Get the output text
	var appsBtn = document.getElementById("appsPanel");
	var appsmenu = document.getElementById("appsmenu");
	// If the checkbox is checked, display the output text
	if (checkBox.checked == true){
	  appsBtn.style.left = "unset";
	  appsBtn.style.position = "unset";
	  appsmenu.style.margin = "0 auto"
	  appsmenu.style.left = "0"
	  
	} else {
		appsBtn.style.left = "";
		appsBtn.style.position = "";
		appsmenu.style.margin = ""
		appsmenu.style.left = ""
	}
 
}



//THEMES COOKIES
// *** TO BE CUSTOMISED ***

var style_cookie_name = "xostheme" ;
var style_cookie_duration = 30 ;
var style_domain = "broimluna.github.io" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie_style( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie_style( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie_style ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie_style ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}


// Cookies 




function startupFunctions() {
	startTime();
	startDate();
	set_style_from_cookie();
}


  
// Core Code

function adjustFullScreenSize() {
	$(".fullSizeWindow .wincontent").css("width", (window.innerWidth - 32));
	$(".fullSizeWindow .wincontent").css("height", (window.innerHeight - 98));
	setTimeout(adjustFullScreenSize, 10);
}
function makeWindowActive(thisid) {
	$(".window").each(function() {      
		$(this).css('z-index', $(this).css('z-index') - 1);
	});
	$("#window" + thisid).css('z-index',1000);
	$(".window").removeClass("activeWindow");
	$("#window" + thisid).addClass("activeWindow");
	
	$(".taskbarPanel").removeClass('activeTab');
	
	$("#minimPanel" + thisid).addClass("activeTab");
}

function minimizeWindow(id){
	windowTopPos[id] = $("#window" + id).css("top");
	windowLeftPos[id] = $("#window" + id).css("left");
	
	$("#window" + id).animate({
		top: 800,
		left: 0
	}, 200, function() {		//animation complete
		$("#window" + id).addClass('minimizedWindow');
		$("#minimPanel" + id).addClass('minimizedTab');
		$("#minimPanel" + id).removeClass('activeTab');
	});	
}

function openWindow(id) {
	if ($('#window' + id).hasClass("minimizedWindow")) {
		openMinimized(id);
	} else {	
		makeWindowActive(id);
		$("#window" + id).removeClass("closed");
		$("#minimPanel" + id).removeClass("closed");
	}
}
function closeWindwow(id) {
	$("#window" + id).addClass("closed");
	$("#minimPanel" + id).addClass("closed");
}

function openMinimized(id) {
	$('#window' + id).removeClass("minimizedWindow");
	$('#minimPanel' + id).removeClass("minimizedTab");
	makeWindowActive(id);
		
	$('#window' + id).animate({
		top: windowTopPos[id],
		left: windowLeftPos[id]
	}, 200, function() {
	});				
}

$(document).ready(function(){
	$(".window").each(function() {      		// window template
		$(this).css('z-index',1000)
		$(this).attr('data-id', i);
		minimizedWidth[i] = $(this).width();
		minimizedHeight[i] = $(this).height();
		windowTopPos[i] = $(this).css("top");
		windowLeftPos[i] = $(this).css("left");
		$("#taskbar").append('<div class="taskbarPanel" id="minimPanel' + i + '" data-id="' + i + '">' + $(this).attr("icon") + '</div>');
		if ($(this).hasClass("closed")) {	$("#minimPanel" + i).addClass('closed');	}		
		$(this).attr('id', 'window' + (i++));
		$(this).wrapInner('<div class="wincontent"></div>');
		$(this).prepend('<div class="windowHeader"><strong>' + $(this).attr("data-title") + '</strong><span title="Minimize" class="winminimize"><span></span></span><span title="Maximize" class="winmaximize"><span></span><span></span></span><span title="Close" class="winclose">x</span></div>');
	});
	
	$("#minimPanel" + (i-1)).addClass('activeTab');
	$("#window" + (i-1)).addClass('activeWindow');
	
	$( ".wincontent" ).resizable();			// resizable
	$( ".window" ).draggable({ cancel: ".wincontent" });	// draggable
	

    $(".window").mousedown(function(){		// active window on top (z-index 1000)
		makeWindowActive($(this).attr("data-id"));
    });
	
    $(".winclose").click(function(){		// close window
		closeWindwow($(this).parent().parent().attr("data-id"));
    });	

    $(".winminimize").click(function(){		// minimize window
		minimizeWindow($(this).parent().parent().attr("data-id"));
    });	
	
    $(".taskbarPanel").click(function(){		// taskbar click
		id = $(this).attr("data-id");
		if ($(this).hasClass("activeTab")) {	// minimize if active
			minimizeWindow($(this).attr("data-id"));
		} else {
			if ($(this).hasClass("minimizedTab")) {	// open if minimized
				openMinimized(id);
			} else {								// activate if inactive
				makeWindowActive(id);
			}
		}
    });	
	
    $(".openWindow").click(function(){		// open closed window
		openWindow($(this).attr("data-id"));
    });
	
    $(".winmaximize").click(function(){
		if ($(this).parent().parent().hasClass('fullSizeWindow')) {			// minimize
			
			$(this).parent().parent().removeClass('fullSizeWindow');
			$(this).parent().parent().children(".wincontent").height(minimizedHeight[$(this).parent().parent().attr("data-id")]);	
			$(this).parent().parent().children(".wincontent").width(minimizedWidth[$(this).parent().parent().attr("data-id")]);
		} else {															// maximize
			$(this).parent().parent().addClass('fullSizeWindow');
			
			minimizedHeight[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").height();
			minimizedWidth[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").width();
			
			adjustFullScreenSize();
		}
    });		
	adjustFullScreenSize();	
});