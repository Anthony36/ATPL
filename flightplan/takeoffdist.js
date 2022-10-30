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
        new TempDistanceInfo(0,0,640,1190),
        new TempDistanceInfo(0,10,695,1290),
        new TempDistanceInfo(0,20,755,1390), 
        new TempDistanceInfo(0,30,810,1495),
        new TempDistanceInfo(0,40,875,1605),
        new TempDistanceInfo(1000,0,705,1310),
        new TempDistanceInfo(1000,10,765,1420),
        new TempDistanceInfo(1000,20,825,1530),
        new TempDistanceInfo(1000,30,890,1645),
        new TempDistanceInfo(1000,40,960,1770),
        new TempDistanceInfo(2000,0,755,1445),
        new TempDistanceInfo(2000,10,840,1565),
        new TempDistanceInfo(2000,20,910,1690),
        new TempDistanceInfo(2000,30,980,1820),
        new TempDistanceInfo(2000,40,1055,1960),
        new TempDistanceInfo(3000,0,855,1600),
        new TempDistanceInfo(3000,10,925,1730),
        new TempDistanceInfo(3000,20,1000,1870),
        new TempDistanceInfo(3000,30,1080,2020),
        new TempDistanceInfo(3000,40,1165,2185),
        new TempDistanceInfo(4000,0,940,1775),
        new TempDistanceInfo(4000,10,1020,1920),
        new TempDistanceInfo(4000,20,1100,2080),
        new TempDistanceInfo(4000,30,1190,2250),
        new TempDistanceInfo(4000,40,1285,2440),
        new TempDistanceInfo(5000,0,1040,1970),
        new TempDistanceInfo(5000,10,1125,2140),
        new TempDistanceInfo(5000,20,1215,2320),
        new TempDistanceInfo(5000,30,1315,2525),
        new TempDistanceInfo(5000,40,1420,2750),
        new TempDistanceInfo(6000,0,1145,2200),
        new TempDistanceInfo(6000,10,1245,2395),
        new TempDistanceInfo(6000,20,1345,2610),
        new TempDistanceInfo(6000,30,1455,2855),
        new TempDistanceInfo(6000,40,1570,3125),
        new TempDistanceInfo(7000,0,1270,2470),
        new TempDistanceInfo(7000,10,1375,2705),
        new TempDistanceInfo(7000,20,1490,2860),
        new TempDistanceInfo(7000,30,1615,3255),
        new TempDistanceInfo(7000,40,1745,3590),
        new TempDistanceInfo(8000,0,1405,2800),
        new TempDistanceInfo(8000,10,1525,3080),
        new TempDistanceInfo(8000,20,1655,3395),
        new TempDistanceInfo(8000,30,1795,3765),
        new TempDistanceInfo(8000,40,1940,4195)
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
        let increaseBy = .15 * targetGrndRoll;
        targetGrndRoll += increaseBy;
        targetTotalFtToClearObs += increaseBy;
        theHtml += "Increase dist 15% of ground roll due to dry grass:<br />Ground Roll:<br /><b>" + targetGrndRoll + "</b><br />Total Ft to clear 50 ft obs:<b> " + targetTotalFtToClearObs + "</b>";
    }
    $("#theTotals").html(theHtml);

}
