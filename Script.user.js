// ==UserScript==
// @name          TagPro Leaderboard Countdown
// @namespace     http://www.reddit.com/user/Satrex/
// @description   Shows a Countdown on the leaderboard until the reset
// @include       http://tagpro-*.koalabeast.com/boards
// @include       http://tangent.jukejuice.com/boards
// @include       http://maptest.newcompte.fr/boards
// @copyright     2014+ Satrex
// @author        Satrex
// @version       1.0
// ==/UserScript==
var canvas = document.createElement('canvas');
canvas.id = "CursorLayer";
canvas.width = 213;
canvas.height = 25;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";
canvas.style.display = "inline";
canvas.style.backgroundColor = 'rgba(0,0,0,1)';
canvas.style.marginTop = "195px"
canvas.style.marginLeft = window.innerWidth  +"px";
 
var body = document.getElementsByTagName("body")[0];
body.insertBefore(canvas, body.firstChild);
 
cursorLayer = document.getElementById("CursorLayer");
var ctx = cursorLayer.getContext("2d");
 
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
 
function daily()
{
    var dayboard = document.getElementById("Day");
    if(dayboard.style.display != "none")
    {
        cursorLayer.width = 213;
        var daily = new Date();
                var dhours = daily.getUTCHours();
        var dmonth = daily.getUTCMonth() + 1;
        var dyear = daily.getUTCFullYear();
             
        var dsLeft = 59 - daily.getUTCSeconds();
        var dmLeft = 59 - daily.getMinutes();
        var dhLeft = 19 - dhours;
       
        if (dhLeft< 0)
        {
            dhLeft = 24 + dhLeft;    
        }
       
        var s10 = "";
        var m10 = "";
        var h10 = "";
       
        if (dsLeft < 10)
        {
            s10 = "0";
           
        }
        if (dmLeft <10)
        {
            m10 = "0";
           
        }
        if (dhLeft <10)
        {
            h10 = "0";
           
        }
        var actualtimer = h10 + (dhLeft).toString() + ":"+ m10 + (dmLeft).toString() + ":" + s10 + (dsLeft).toString();
       
        actualtimer = "Time until reset: " + actualtimer;
        ctx.fillStyle="#FFFFFF";
        ctx.font="20px Hallo Sans Light";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       
        ctx.fillText(actualtimer,1,20);
    }
   
   
}
setInterval(daily,1000);
 
function weekly()
{
    var weekboard = document.getElementById("Week");
    if(weekboard.style.display != "none")
    {
        cursorLayer.width = 230;
        var w = new Date();
 
                var whours = w.getUTCHours();
        var wmonth = w.getUTCMonth() + 1;
        var wyear = w.getUTCFullYear();
             
        var wsLeft = 59 - w.getUTCSeconds();
        var wmLeft = 59 - w.getMinutes();
        var whLeft = 19 - whours;
       
       
     
        if(whLeft<0)
        {
            whLeft = 24 + whLeft;    
        }
       
        var ws10 = "";
        var wm10 = "";
        var wh10 = "";
       
        if (wsLeft < 10)
        {
            ws10 = "0";
           
        }
        if (wmLeft < 10)
        {
            wm10 = "0";
           
        }
        if (whLeft < 10)
        {
            wh10 = "0";
           
        }
        var weekday = w.getUTCDay();
        
        if (weekday == 0)
        {weekday = 7;}
        
        weekday = 7 - weekday;
        
        
        
        
         if(w.getUTCHours() >= 20)
       {
            weekday = weekday - 1;
       if(weekday == -1)
       {weekday = 6;}
           
       }
        
        
        
        
        
        
        var weeklytimer = weekday.toString() + ":" + wh10 + (whLeft).toString() + ":" + wm10 + (wmLeft).toString() + ":" + ws10 + (wsLeft).toString();
        weeklytimer = "Time until reset: " + weeklytimer;
        ctx.fillStyle="#FFFFFF";
        ctx.font="20px Hallo Sans Light";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       
        ctx.fillText(weeklytimer,1,20);
    }
   
   
}
setInterval(weekly,1000);
 
 
 
 
function monthly()
{
    var monthboard = document.getElementById("Month");
    if(monthboard.style.display != "none")
    {
       
       
        var m = new Date();
 
        var mhours = m.getUTCHours();
        var mmonth = m.getUTCMonth() + 1;
        var myear = m.getUTCFullYear();
        var day = m.getUTCDate();
       
        var msLeft = 59 - m.getUTCSeconds();
        var mmLeft = 59 - m.getUTCMinutes();
        var mhLeft = 19 - mhours;
       
   
       
        if (mhLeft< 0)
        {
            mhLeft = 24 + mhLeft;    
        }
       
        var s10 = "";
        var m10 = "";
        var h10 = "";
       
        if (msLeft < 10)
        {
            s10 = "0";
           
        }
        if (mmLeft <10)
        {
            m10 = "0";
           
        }
        if (mhLeft <10)
        {
            h10 = "0";
           
        }
        var actualtimer = h10 + (mhLeft).toString() + ":"+ m10 + (mmLeft).toString() + ":" + s10 + (msLeft).toString();
       
       
        var ndays = daysInMonth(mmonth,m.getUTCFullYear());
 
      day = ndays - day;
       
       
       
        if( day > 9)
        {
            cursorLayer.width = 240;
        }
        if( day < 10)
        {
            cursorLayer.width = 230;
        }
       if(m.getUTCHours() >= 20)
       {
           day = day - 1;
       }
        if(day == -1)
        {
            if(mmonth == 11)
            {day = daysInMonth(01 ,m.getUTCFullYear() + 1);}
        
            else{day = daysInMonth(mmonth + 1 ,m.getUTCFullYear());}
        }
        
        actualtimer = "Time until reset: " + day.toString() +":" + actualtimer;
        ctx.fillStyle="#FFFFFF";
        ctx.font="20px Hallo Sans Light";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       
        ctx.fillText(actualtimer,1,20);
    }
   
   
}
setInterval(monthly,1000);
 
function center()
{
    cursorLayer.style.marginLeft = Math.round((window.innerWidth  / 2) - (cursorLayer.width /2)) +"px";
}
setInterval(center,30);
