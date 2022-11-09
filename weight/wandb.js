$(document).ready(function() {
    $( "#getWANOutput" ).click(function() {
        console.log("Handler for getWANOutput .click() called.");
        getWANOutput();
    });    
    //createWanChart();

});

function createWanChart(){
    let wanChart = $("#wanChart");
    wanChart.append("<div class='wanVertical'></div>");
    wanChart.append("<div class='wanHorizontal'></div>");
}

let basicEmptyWeightWeight;
let basicEmptyWeightArm;
let basicEmptyWeightMoment;

let frontSeatsWeight;
let frontSeatsArm;
let frontSeatsMoment;

let baggageAreaOneWeight;
let baggageAreaOneArm;
let baggageAreaOneMoment;

let subTotalNofuelWeight;
let subTotalNofuelArm;
let subTotalNofuelMoment;

let fuelOnBoardWeight;
let fuelOnBoardArm;
let fuelOnBoardMoment;

let totalWeight;
let totalArm;
let totalMoment;

let fuelForFlightWeight;
let fuelForFlightArm;
let fuelForFlightMoment;
let fuelOnBoardGal;

let landingWeightWeight;
let landingWeightArm;
let landingWeightMoment;

let fuelForFlightUsedGal;

let rampWt;
let taxiAllowance;

let baggageAreaTwoWeight;
let baggageAreaTwoArm;
let baggageAreaTwoMoment;

let totalLandingWeight;
let totalLandingArm;
let totalLandingMoment;

function refreshValues(){

    rampWt = parseFloat($("#rampWt").val());
    taxiAllowance = parseFloat($("#taxiAllowance").val());

    baggageAreaTwoWeight = parseFloat($("#baggageAreaTwoWeight").val());
    baggageAreaTwoArm = parseFloat($("#baggageAreaTwoArm").val());
    baggageAreaTwoMoment = parseFloat($("#baggageAreaTwoMoment").val());

    basicEmptyWeightWeight = parseFloat($("#basicEmptyWeightWeight").val());
    basicEmptyWeightArm = parseFloat($("#basicEmptyWeightArm").val());
    basicEmptyWeightMoment = parseFloat($("#basicEmptyWeightMoment").val());

    frontSeatsWeight = parseFloat($("#frontSeatsWeight").val());
    frontSeatsArm = parseFloat($("#frontSeatsArm").val());
    frontSeatsMoment = parseFloat($("#frontSeatsMoment").val());

    baggageAreaOneWeight = parseFloat($("#baggageAreaOneWeight").val());
    baggageAreaOneArm = parseFloat($("#baggageAreaOneArm").val());
    baggageAreaOneMoment = parseFloat($("#baggageAreaOneMoment").val());

    subTotalNofuelWeight = parseFloat($("#subTotalNofuelWeight").val());
    subTotalNofuelArm = parseFloat($("#subTotalNofuelArm").val());
    subTotalNofuelMoment = parseFloat($("#subTotalNofuelMoment").val());

    fuelOnBoardWeight = parseFloat($("#fuelOnBoardWeight").val());
    fuelOnBoardArm = parseFloat($("#fuelOnBoardArm").val());
    fuelOnBoardMoment = parseFloat($("#fuelOnBoardMoment").val());
    fuelOnBoardGal = parseFloat($("#fuelOnBoardGal").val())

    totalWeight = parseFloat($("#totalWeight").val());
    totalArm = parseFloat($("#totalArm").val());
    totalMoment = parseFloat($("#totalMoment").val());

    fuelForFlightWeight = parseFloat($("#fuelForFlightWeight").val());
    fuelForFlightArm = parseFloat($("#fuelForFlightArm").val());
    fuelForFlightMoment = parseFloat($("#fuelForFlightMoment").val());

    landingWeightWeight = parseFloat($("#landingWeightWeight").val());
    landingWeightArm = parseFloat($("#landingWeightArm").val());
    landingWeightMoment = parseFloat($("#landingWeightMoment").val());
    
    fuelForFlightUsedGal = parseFloat($("#fuelForFlightUsedGal").val());

    totalLandingWeight = parseFloat($("#totalLandingWeight").val());
    totalLandingArm = parseFloat($("#totalLandingArm").val());
    totalLandingMoment = parseFloat($("#totalLandingMoment").val());

}
function getWANOutput(){
    refreshValues();
    //taxiallowance is entered as a negative so add here:
    grossWt = rampWt + taxiAllowance;
    $("#grossWt").val(grossWt);
    fuelOnBoardWeight = (fuelOnBoardGal * 6) + taxiAllowance;
    $("#fuelOnBoardWeight").val(fuelOnBoardWeight);

    fuelForFlightMoment = fuelForFlightArm * fuelForFlightWeight;
    $("#fuelForFlightMoment").val(fuelForFlightMoment);
    basicEmptyWeightMoment = basicEmptyWeightWeight * basicEmptyWeightArm;
    $("#basicEmptyWeightMoment").val(basicEmptyWeightMoment);
    frontSeatsMoment = frontSeatsWeight * frontSeatsArm;
    $("#frontSeatsMoment").val(frontSeatsMoment);
    baggageAreaOneMoment = baggageAreaOneWeight * baggageAreaOneArm;
    $("#baggageAreaOneMoment").val(baggageAreaOneMoment);
    baggageAreaTwoMoment = baggageAreaTwoArm * baggageAreaTwoWeight;
    $("#baggageAreaTwoMoment").val(baggageAreaTwoMoment);
    fuelOnBoardMoment = fuelOnBoardArm * fuelOnBoardWeight;
    $("#fuelOnBoardMoment").val(fuelOnBoardMoment);
    
    subTotalNofuelWeight = basicEmptyWeightWeight + frontSeatsWeight + baggageAreaOneWeight + baggageAreaTwoWeight;
    $("#subTotalNofuelWeight").val(subTotalNofuelWeight);

    subTotalNofuelMoment = basicEmptyWeightMoment + frontSeatsMoment + baggageAreaOneMoment + baggageAreaTwoMoment;
    $("#subTotalNofuelMoment").val(subTotalNofuelMoment);

    subTotalNofuelArm = subTotalNofuelMoment / subTotalNofuelWeight;
    $("#subTotalNofuelArm").val(subTotalNofuelArm);

    totalWeight = subTotalNofuelWeight + fuelOnBoardWeight;
    $("#totalWeight").val(totalWeight);

    totalMoment = subTotalNofuelMoment + fuelOnBoardMoment;
    $("#totalMoment").val(totalMoment);

    totalArm = totalMoment / totalWeight;
    $("#totalArm").val(totalArm);

    //take initial fuel, subtract taxi allowance and fuel used in flight:
    //remember taxi allowance is a negative number!
    landingWeightWeight = (fuelOnBoardGal * 6) + taxiAllowance - (fuelForFlightUsedGal * 6); //(fuelForFlightUsedGal * 6)
    $("#landingWeightWeight").val(landingWeightWeight);

    landingWeightMoment = landingWeightArm * landingWeightWeight;
    $("#landingWeightMoment").val(landingWeightMoment);

    totalLandingWeight = subTotalNofuelWeight + landingWeightWeight;
    $("#totalLandingWeight").val(totalLandingWeight);

    totalLandingMoment = subTotalNofuelMoment + landingWeightMoment;
    $("#totalLandingMoment").val(totalLandingMoment);

    totalLandingArm = totalLandingMoment / totalLandingWeight;
    $("#totalLandingArm").val(totalLandingArm);

    let theHtml="";
    if (totalWeight > grossWt) {
        theHtml += "<b>Flight is overweight!</b> You need to loose: " + (totalWeight - grossWt) + "lbs.  That could be: " + ((totalWeight - grossWt) /6) + " gal of fuel.<br />New Fuel on Board in gal could be:" +  (fuelOnBoardGal - ((totalWeight - grossWt) /6))
    } 
    else {
        theHtml += "<b>Flight weight is ok</b> You could carry: " + (grossWt - totalWeight) + "lbs more."
    }
    $("#wanOutput").html(theHtml);
}