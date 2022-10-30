$(document).ready(function() {
    $( "#getTakeoffDist" ).click(function() {
        console.log("Handler for getTakeoffDist .click() called.");
        getTakeoffDist();
    });    

   // getTakeoffDist();
});
    

let lowtempLowPressure = parseFloat($("#lowtempLowPressure").val());
let targettempLowPressure = parseFloat($("#targettempLowPressure").val());
let hitempLowPressure = parseFloat($("#hitempLowPressure").val());
let hiGrndRollLowPressure = parseFloat($("#hiGrndRollLowPressure").val());
let lowGrndRollLowPressure = parseFloat($("#lowGrndRollLowPressure").val());
let targetGrndRollLowPressure = parseFloat($("#targetGrndRollLowPressure").val());
let lowTotalFtToClearObsLowPressure = parseFloat($("#lowTotalFtToClearObsLowPressure").val());
let hiTotalFtToClearObsLowPressure = parseFloat($("#hiTotalFtToClearObsLowPressure").val());
let targetTotalFtToClearObsLowPressure = parseFloat($("#targetTotalFtToClearObsLowPressure").val());
let hiGrndRollHiPressure = parseFloat($("#hiGrndRollHiPressure").val());
let lowGrndRollHiPressure = parseFloat($("#lowGrndRollHiPressure").val());
let targetGrndRollHiPressure = parseFloat($("#targetGrndRollHiPressure").val());
let lowTotalFtToClearObsHiPressure = parseFloat($("#lowTotalFtToClearObsHiPressure").val());
let hiTotalFtToClearObsHiPressure = parseFloat($("#hiTotalFtToClearObsHiPressure").val());
let targetTotalFtToClearObsHiPressure = parseFloat($("#targetTotalFtToClearObsHiPressure").val());
let pressureAlt = parseFloat($("#pressureAlt").val());
let pressureAltLowPressure = parseFloat($("#pressureAltLowPressure").val());
let hipressureAlt = parseFloat($("#hipressureAlt").val());

function updateVariables(){
    lowtempLowPressure = parseFloat($("#lowtempLowPressure").val());
    targettempLowPressure = parseFloat($("#targettempLowPressure").val());
    hitempLowPressure = parseFloat($("#hitempLowPressure").val());
    hiGrndRollLowPressure = parseFloat($("#hiGrndRollLowPressure").val());
    lowGrndRollLowPressure = parseFloat($("#lowGrndRollLowPressure").val());
    targetGrndRollLowPressure = parseFloat($("#targetGrndRollLowPressure").val());
    lowTotalFtToClearObsLowPressure = parseFloat($("#lowTotalFtToClearObsLowPressure").val());
    hiTotalFtToClearObsLowPressure = parseFloat($("#hiTotalFtToClearObsLowPressure").val());
    targetTotalFtToClearObsLowPressure = parseFloat($("#targetTotalFtToClearObsLowPressure").val());
    hiGrndRollHiPressure = parseFloat($("#hiGrndRollHiPressure").val());
    lowGrndRollHiPressure = parseFloat($("#lowGrndRollHiPressure").val());
    targetGrndRollHiPressure = parseFloat($("#targetGrndRollHiPressure").val());
    lowTotalFtToClearObsHiPressure = parseFloat($("#lowTotalFtToClearObsHiPressure").val());
    hiTotalFtToClearObsHiPressure = parseFloat($("#hiTotalFtToClearObsHiPressure").val());
    targetTotalFtToClearObsHiPressure = parseFloat($("#targetTotalFtToClearObsHiPressure").val());
    pressureAlt = parseFloat($("#pressureAlt").val());
    pressureAltLowPressure = parseFloat($("#pressureAltLowPressure").val());
    hipressureAlt = parseFloat($("#hipressureAlt").val());

}


class TempDistanceInfo {
    constructor(pressureAltitudeFt, temp, grndRollFt, totalFtToClear50FtObs){
        this.pressureAltitudeFt = pressureAltitudeFt;
        this.temp = temp;
        this.grndRollFt = grndRollFt;
        this.totalFtToClear50FtObs = totalFtToClear50FtObs;
    }
}
class TakeoffDistance {
    constructor(AirplaneType, TempDistanceInfos) {
        this.AirplaneType = AirplaneType;
        this.TempDistanceInfos = TempDistanceInfos;
    }
}

let c152TakeoffDistances = 
    [
        new TempDistanceInfo(0,0,450,1160),
        new TempDistanceInfo(0,10,465,1185),
        new TempDistanceInfo(0,20,485,1215),
        new TempDistanceInfo(0,30,500,1240),
        new TempDistanceInfo(0,40,515,1265),
        new TempDistanceInfo(1000,0,465,1185),
        new TempDistanceInfo(1000,10,485,1215),
        new TempDistanceInfo(1000,20,500,1240),
        new TempDistanceInfo(1000,30,520,1270),
        new TempDistanceInfo(1000,40,535,1295),
        new TempDistanceInfo(2000,0,485,1215),
        new TempDistanceInfo(2000,10,500,1240),
        new TempDistanceInfo(2000,20,520,1270),
        new TempDistanceInfo(2000,30,535,1300),
        new TempDistanceInfo(2000,40,555,1330),
        new TempDistanceInfo(3000,0,500,1240),
        new TempDistanceInfo(3000,10,520,1275),
        new TempDistanceInfo(3000,20,540,1305),
        new TempDistanceInfo(3000,30,560,1335),
        new TempDistanceInfo(3000,40,575,1360),
        new TempDistanceInfo(4000,0,520,1275),
        new TempDistanceInfo(4000,10,540,1305),
        new TempDistanceInfo(4000,20,560,1335),
        new TempDistanceInfo(4000,30,580,1370),
        new TempDistanceInfo(4000,40,600,1400),
        new TempDistanceInfo(5000,0,540,1305),
        new TempDistanceInfo(5000,10,560,1335),
        new TempDistanceInfo(5000,20,580,1370),
        new TempDistanceInfo(5000,30,600,1400),
        new TempDistanceInfo(5000,40,620,1435),
        new TempDistanceInfo(6000,0,560,1340),
        new TempDistanceInfo(6000,10,580,1370),
        new TempDistanceInfo(6000,20,605,1410),
        new TempDistanceInfo(6000,30,625,1440),
        new TempDistanceInfo(6000,40,645,1475),
        new TempDistanceInfo(7000,0,585,1375),
        new TempDistanceInfo(7000,10,605,1410),
        new TempDistanceInfo(7000,20,625,1440),
        new TempDistanceInfo(7000,30,650,1480),
        new TempDistanceInfo(7000,40,670,1515),
        new TempDistanceInfo(8000,0,605,1410),
        new TempDistanceInfo(8000,10,630,1450),
        new TempDistanceInfo(8000,20,650,1480),
        new TempDistanceInfo(8000,30,675,1520),
        new TempDistanceInfo(8000,40,695,1555)
    ];

let AirplaneTakeoffDistances = [
    new TakeoffDistance("C152",c152TakeoffDistances)
];

function getAirplaneDetails(){  
    updateVariables();

    //get the temperatures above and below:
    let numAbove = getNumberAbove(targettempLowPressure,10);
    let numBelow = getNumberBelow(targettempLowPressure,10);
    hitempLowPressure = numAbove;
    $("#hitempLowPressure").val(hitempLowPressure);
    lowtempLowPressure = numBelow;
    $("#lowtempLowPressure").val(lowtempLowPressure);

    //Get the altitudes above and below:
    let altAbove = getNumberAbove(pressureAlt, 1000);
    let altBelow = getNumberBelow(pressureAlt, 1000);
    pressureAltLowPressure = altBelow;
    $("#pressureAltLowPressure").val(pressureAltLowPressure);
    hipressureAlt = altAbove;
    $("#hipressureAlt").val(hipressureAlt);

    //Enter corresponding data for each into grid:
    for (let i=0;i<AirplaneTakeoffDistances[0].TempDistanceInfos.length; i++){
        let curATD = AirplaneTakeoffDistances[0].TempDistanceInfos[i];
        if (curATD.pressureAltitudeFt==pressureAltLowPressure){
            if (curATD.temp == hitempLowPressure){
                hiGrndRollLowPressure = curATD.grndRollFt;
                $("#hiGrndRollLowPressure").val(hiGrndRollLowPressure);
                hiTotalFtToClearObsLowPressure = curATD.totalFtToClear50FtObs;
                $("#hiTotalFtToClearObsLowPressure").val(hiTotalFtToClearObsLowPressure);
            }
            if (curATD.temp == lowtempLowPressure){
                lowGrndRollLowPressure = curATD.grndRollFt;
                $("#lowGrndRollLowPressure").val(lowGrndRollLowPressure);
                lowTotalFtToClearObsLowPressure = curATD.totalFtToClear50FtObs;
                $("#lowTotalFtToClearObsLowPressure").val(lowTotalFtToClearObsLowPressure);
            }
        }
        if (curATD.pressureAltitudeFt==hipressureAlt){
            if (curATD.temp == hitempLowPressure){
                hiGrndRollHiPressure = curATD.grndRollFt;
                $("#hiGrndRollHiPressure").val(hiGrndRollHiPressure);
                hiTotalFtToClearObsHiPressure = curATD.totalFtToClear50FtObs;
                $("#hiTotalFtToClearObsHiPressure").val(hiTotalFtToClearObsHiPressure);
            }
            if (curATD.temp == lowtempLowPressure){
                lowGrndRollHiPressure = curATD.grndRollFt;
                $("#lowGrndRollHiPressure").val(lowGrndRollHiPressure);
                lowTotalFtToClearObsHiPressure = curATD.totalFtToClear50FtObs;
                $("#lowTotalFtToClearObsHiPressure").val(lowTotalFtToClearObsHiPressure);
            }
        }
    }
}

function getTakeoffDist(){
    updateVariables();
    getAirplaneDetails();
    //for 10, 18, 20 this gives 8/10
    let theTempRatio;
    if ((targettempLowPressure - lowtempLowPressure) == 0)
    {
        //we have a number that is right on requested, make ratio 100%
        theTempRatio = 1;
    }else{
        theTempRatio = (targettempLowPressure - lowtempLowPressure) / (hitempLowPressure - lowtempLowPressure);
    }

    targetGrndRollLowPressure = theTempRatio * (hiGrndRollLowPressure - lowGrndRollLowPressure) + lowGrndRollLowPressure;
    $("#targetGrndRollLowPressure").val( targetGrndRollLowPressure );

    targetTotalFtToClearObsLowPressure = theTempRatio * (hiTotalFtToClearObsLowPressure - lowTotalFtToClearObsLowPressure) + lowTotalFtToClearObsLowPressure;
    $("#targetTotalFtToClearObsLowPressure").val( targetTotalFtToClearObsLowPressure);

    targetGrndRollHiPressure = theTempRatio * (hiGrndRollHiPressure - lowGrndRollHiPressure) + lowGrndRollHiPressure;
    $("#targetGrndRollHiPressure").val( targetGrndRollHiPressure);

    targetTotalFtToClearObsHiPressure = theTempRatio * (hiTotalFtToClearObsHiPressure - lowTotalFtToClearObsHiPressure) + lowTotalFtToClearObsHiPressure;
    $("#targetTotalFtToClearObsHiPressure").val( targetTotalFtToClearObsHiPressure );

    let thePressureRatio;
    if ((pressureAlt - pressureAltLowPressure) == 0){
        // pressure alt is on the 1000's, make ratio 100%
        thePressureRatio=1;
    }else{
        thePressureRatio = (pressureAlt - pressureAltLowPressure) / (hipressureAlt - pressureAltLowPressure);
    }

    let targetGrndRoll = thePressureRatio * (targetGrndRollHiPressure - targetGrndRollLowPressure) + targetGrndRollLowPressure;
    let targetTotalFtToClearObs = thePressureRatio * (targetTotalFtToClearObsHiPressure - targetTotalFtToClearObsLowPressure) + targetTotalFtToClearObsLowPressure;

    $("#targetGrndRoll").val( targetGrndRoll);
    $("#targetTotalFtToClearObs").val( targetTotalFtToClearObs);

    let theHeadwind = parseFloat( $("#theHeadwind").val());
    let isDryGrass = $("#isDryGrass").prop("checked");
    let flapsAreUp = $("#flapsAreUp").prop("checked");
    let theHtml="";
    if (theHeadwind>0){
        let reduceBy = (theHeadwind / 9) * .1;
        targetGrndRoll = (1 - reduceBy) * targetGrndRoll;
        targetTotalFtToClearObs = (1 - reduceBy) * targetTotalFtToClearObs;
        theHtml += "Decrease distances due to headwind to:<br />Ground Roll:<b>" + targetGrndRoll + "</b><br />Total Ft to clear 50 ft obs: <b>" + targetTotalFtToClearObs + "</b>";
    }else if (theHeadwind<0){
        let increaseBy = (theHeadwind * -1 / 2) * .1;
        targetGrndRoll = (1 + increaseBy) * targetGrndRoll;
        targetTotalFtToClearObs = (1 + increaseBy) * targetTotalFtToClearObs;
        theHtml += "Increase distances due to tailwind to:<br />Ground Roll:<b>" + targetGrndRoll + "</b><br />Total Ft to clear 50 ft obs: <b>" + targetTotalFtToClearObs + "</b>"
    }else{
        theHtml += "Wind is 0, no change";
    }
    theHtml+="<br />";

    if (isDryGrass){
        let increaseBy = .45 * targetGrndRoll;
        targetGrndRoll += increaseBy;
        targetTotalFtToClearObs += increaseBy;
        theHtml += "Increase dist 45% of ground roll due to dry grass:<br />Ground Roll:<br /><b>" + targetGrndRoll + "</b><br />Total Ft to clear 50 ft obs:<b> " + targetTotalFtToClearObs + "</b>";
    }
    theHtml += "<br />";

    if (flapsAreUp){
        let increaseGrndRollBy = .35 * targetGrndRoll;
        let increase50FtToClearBy = .35 * targetTotalFtToClearObs;
        targetGrndRoll += increaseGrndRollBy;
        targetTotalFtToClearObs += increase50FtToClearBy;
        theHtml += "Increase dist 35% of ground roll due to dry grass:<br />Ground Roll:<br /><b>" + targetGrndRoll + "</b><br />Total Ft to clear 50 ft obs:<b> " + targetTotalFtToClearObs + "</b>";
    }
    $("#theTotals").html(theHtml);

}
