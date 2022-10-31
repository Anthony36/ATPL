$(document).ready(function() {
    $( "#getWindCorrection" ).click(function() {
        console.log("Handler for getWindCorrection .click() called.");
        getWindCorrection();
    });    
    $("#windDirection").focus();
    $("#windDirection").select();
});

function getWindCorrection(){
    let windDirection = $("#windDirection").val();
    let windVelocity = $("#windVelocity").val();
    let trueAirspeed = $("#trueAirspeed").val();
    let trueTrack = $("#trueTrack").val();
    
    //formula taken from here:
    //https://en.wikipedia.org/wiki/E6B

    //Wind correction angle:
    let windCorrection;
    //d - desired course, w - wind direction, Vw - wind speed, Va - KTAS (knot true air speed)
    let d = trueTrack;
    let w = windDirection;
    let Vw = windVelocity;
    let Va = trueAirspeed;
    
//    let a;
//    a = Math.sin((Vw * Math.sin(w-d)) / Va) ** -1;

//    let headingCheck = new e(350,153,8,100)
    let headingCheck = new e(trueTrack,windDirection,windVelocity,trueAirspeed);
    headingCheck = e6b(headingCheck);
    let theHtml = '';
    theHtml += 'Heading (TH): ' + headingCheck.h + '<br />';
    theHtml += 'Wind correction angle: ' + headingCheck.wca + '<br />';
    theHtml += 'Ground Speed (GS): ' + headingCheck.gs + '<br />';
    $("#WindCorrectionOutput").html(theHtml);
    $("#windDirection").focus();
    $("#windDirection").select();
    
}

class e{
    constructor(c, wd, ws, tas) {
        this.c = c;
        this.wd = wd;
        this.ws = ws;
        this.tas = tas;
        this.h;
        this.wca;
        this.gs;
    }
 }

 //taken from https://e6bx.com/e6b/
function e6b(e) {
    let t = 1 * (e.c || 0) || 0,
        a = 1 * (e.wd || 0) || 0,
        n = 1 * (e.ws || 0) || 0,
        i = 1 * (e.tas || 0) || 0,
        r = Math.PI / 180,
        o = r * (t % 360),
        s = r * a,
        c = n / i * Math.sin(s - o);
    var l = o + Math.asin(c);
    return !(Math.abs(c) > 1) && i && $.isNumeric(i) && $.isNumeric(o) && $.isNumeric(s) && $.isNumeric(l) && $.isNumeric(n) ? (l = l < 0 ? l + 2 * Math.PI : l > 2 * Math.PI ? l - 2 * Math.PI : l, e.h = Math.round(1 / r * l), e.gs = Math.round(i * Math.sqrt(1 - Math.pow(c, 2)) - n * Math.cos(s - o)), e.wca = Math.round(1 / r * (-1 * Math.atan2(n * Math.sin(l - s), i - n * Math.cos(l - s)))), e) : (e.h = e.gs = e.wca = "N/A", !1)
}
