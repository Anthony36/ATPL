        class CruisePerformance {
            constructor(pressureAltitudeFt, rpm, twentybelowBhp, twentybelowKtas, twentybelowGph, standardtempBhp, standardtempKtas, standardtempGph, twentyaboveBhp, twentyaboveKtas, twentyaboveGph) {
               this.pressureAltitudeFt = pressureAltitudeFt;
               this.rpm = rpm;
               this.twentybelowBhp = twentybelowBhp;
               this.twentybelowKtas = twentybelowKtas;
               this.twentybelowGph = twentybelowGph;
               this.standardtempBhp = standardtempBhp;
               this.standardtempKtas = standardtempKtas;
               this.standardtempGph = standardtempGph;
               this.twentyaboveBhp = twentyaboveBhp;
               this.twentyaboveKtas = twentyaboveKtas;
               this.twentyaboveGph = twentyaboveGph
            }
        }
        class CruiseValue{
            constructor(pressureAltitudeFt, rpm, Bhp, Ktas, Gph) {
                this.pressureAltitudeFt = pressureAltitudeFt;
                this.rpm = rpm;
                this.Bhp = Bhp;
                this.Ktas = Ktas;
                this.Gph = Gph;
             }
         }
        let CruisePerformances = [
            new CruisePerformance(2000,2400,null,null,null,77,102,6.3,73,101,6),
            new CruisePerformance(2000,2300,73,97,6,69,97,5.7,66,96,5.4),
            new CruisePerformance(2000,2200,65,93,5.4,62,92,5.1,58,91,4.9),
            new CruisePerformance(2000,2100,58,88,4.9,55,87,4.7,52,85,4.5),
            new CruisePerformance(2000,2000,51,82,4.5,48,81,4.3,45,79,4.2),
            new CruisePerformance(4000,2450,null,null,null,78,104,6.4,74,103,6),
            new CruisePerformance(4000,2400,78,102,6.4,74,101,6,70,101,5.8),
            new CruisePerformance(4000,2300,70,97,5.8,66,97,5.5,62,96,5.2),
            new CruisePerformance(4000,2200,62,92,5.2,59,91,4.9,55,90,4.7),
            new CruisePerformance(4000,2100,55,87,4.7,52,86,4.5,49,84,4.4),
            new CruisePerformance(6000,2500,null,null,null,78,106,6.4,74,105,6.1),
            new CruisePerformance(6000,2400,75,101,6.1,70,101,5.8,66,100,5.5),
            new CruisePerformance(6000,2300,67,97,5.5,63,96,5.2,59,95,5),
            new CruisePerformance(6000,2200,59,91,5,56,90,4.7,53,89,4.6),
            new CruisePerformance(6000,2100,53,86,4.6,49,84,4.4,47,82,4.3),
            new CruisePerformance(8000,2550,null,null,null,78,108,6.4,74,107,6.1),
            new CruisePerformance(8000,2500,79,106,6.4,74,105,6.1,70,105,5.8),
            new CruisePerformance(8000,2400,72,101,5.8,67,100,5.5,63,99,5.2),
            new CruisePerformance(8000,2300,64,96,5.3,60,95,5,56,94,4.8),
            new CruisePerformance(8000,2200,57,91,4.8,53,89,4.6,50,87,4.4),
            new CruisePerformance(10000,2500,75,105,6.2,71,105,5.8,67,104,5.5),
            new CruisePerformance(10000,2400,68,101,5.6,63,99,5.3,60,98,5),
            new CruisePerformance(10000,2300,60,95,5.1,57,94,4.8,54,92,4.6),
            new CruisePerformance(10000,2200,54,89,4.6,51,87,4.5,48,84,4.3),
            new CruisePerformance(12000,2450,68,102,5.6,64,101,5.3,60,100,5),
            new CruisePerformance(12000,2400,68,102,5.6,64,101,5.3,60,100,5),
            new CruisePerformance(12000,2300,57,94,4.9,54,92,4.6,51,89,4.5),
            new CruisePerformance(12000,2200,51,88,4.5,48,84,4.4,45,79,4.2)

        ];

        let CruisePerformanceOutput;
        $(document).ready(function() {
            $( "#getCruisePerformance" ).click(function() {
                console.log("Handler for getCruisePerformance .click() called.");
                getCruisePerformance();
            });    

        });

        let pressureAltValues,pressureAltValuesBelow;
        function getCruisePerformance(){

            var targetBhp = $("#targetBhp").val();
            var targetAltitude = $("#pressureAltitude").val();
            var targetTemp = $("#targetTemp").val();
            var hasspeedFairings = $("#speedFairings").prop("checked");

            //get altitudes within 1000 of the selected, unless we have exact altitude or we're above 12,000 ft or below 2000 ft.
            console.log("targetAltitude " + targetAltitude);
            
            if (targetAltitude<=2000){
                pressureAltValues = getPressureAltValues(2000,targetTemp);
            } else
            if (targetAltitude>=12000){
                pressureAltValues = getPressureAltValues(12000,targetTemp);
            } else
            if (targetAltitude == 4000) {
                pressureAltValues = getPressureAltValues(4000,targetTemp);
                } else 
            if (targetAltitude<4000) {
                pressureAltValues = getPressureAltValues(4000,targetTemp);
                pressureAltValuesBelow = getPressureAltValues(2000,targetTemp);
                pressureAltValues = getPressureAltValuesFromPressAlt(pressureAltValues,pressureAltValuesBelow,targetAltitude);
                } else 
            if (targetAltitude == 6000) {
                pressureAltValues = getPressureAltValues(6000,targetTemp);
                } else 
            if (targetAltitude<6000) {
                pressureAltValues = getPressureAltValues(6000,targetTemp);
                pressureAltValuesBelow = getPressureAltValues(4000,targetTemp);
                pressureAltValues = getPressureAltValuesFromPressAlt(pressureAltValues,pressureAltValuesBelow,targetAltitude);
                } else 
            if (targetAltitude == 8000) {
                pressureAltValues = getPressureAltValues(8000,targetTemp);
                } else 
            if (targetAltitude<8000) {
                pressureAltValues = getPressureAltValues(8000,targetTemp);
                pressureAltValuesBelow = getPressureAltValues(6000,targetTemp);
                pressureAltValues = getPressureAltValuesFromPressAlt(pressureAltValues,pressureAltValuesBelow,targetAltitude);
                } else 
            if (targetAltitude == 10000) {
                pressureAltValues = getPressureAltValues(10000,targetTemp);
                } else 
            if (targetAltitude<10000) {
                pressureAltValues = getPressureAltValues(10000,targetTemp);
                pressureAltValuesBelow = getPressureAltValues(8000,targetTemp);
                pressureAltValues = getPressureAltValuesFromPressAlt(pressureAltValues,pressureAltValuesBelow,targetAltitude);
                } else 
            if (targetAltitude == 12000) {
                pressureAltValues = getPressureAltValues(12000,targetTemp);
                } else 
            if (targetAltitude<12000) {
                pressureAltValues = getPressureAltValues(12000,targetTemp);
                pressureAltValuesBelow = getPressureAltValues(10000,targetTemp);
                pressureAltValues = getPressureAltValuesFromPressAlt(pressureAltValues,pressureAltValuesBelow,targetAltitude);
                } 

            console.log("pressureAltValues: " + pressureAltValues);
            
            //deduct 2 knots for no speed fairings:
            if (!hasspeedFairings){
                for (let i=0;i<pressureAltValues.length;i++){
                    pressureAltValues[i].Ktas = pressureAltValues[i].Ktas -2;
                }
            }

            let theHtml = "<table class='pressureTable'>" + 
            "<tr>" +
            "<td>Pressure Alt Ft</td>" +
            "<td>RPM</td>" +
            "<td>BHP</td>" +
            "<td>KTAS</td>" +
            "<td>GPH</td>" +
            "</tr>";
            for (let i=0;i<pressureAltValues.length;i++){
                theHtml += 
                "<tr>" +
                "<td>" + pressureAltValues[i].pressureAltitudeFt + "</td>" +
                "<td>" + pressureAltValues[i].rpm + "</td>" +
                "<td>" + pressureAltValues[i].Bhp + "</td>" +
                "<td>" + pressureAltValues[i].Ktas + "</td>" +
                "<td>" + pressureAltValues[i].Gph + "</td>" +
                "</tr>" ;
            }
            theHtml += "</tr>" + 
            "</table>";

            $("#CruisePerformanceOutput").html(
                theHtml
            );
        }

        function getPressureAltValuesFromPressAlt(pressureAltValues,pressureAltValuesBelow, theTargetPressureAlt){
            let thePressureValues = [];//new CruiseValue();
            for (let i=0;i<pressureAltValues.length; i++){
                for (let ii=0;ii<pressureAltValuesBelow.length; ii++){
                    //Get each matching pressure alt by RPM and then average out the values:
                    if (pressureAltValues[i].rpm == pressureAltValuesBelow[ii].rpm){
                        let percentDifference = (theTargetPressureAlt - pressureAltValuesBelow[i].pressureAltitudeFt )/2000;
                        let pressCV = new CruiseValue();
                        //higher number minus lower number times percent diff:
                        pressCV.Bhp = pressureAltValuesBelow[ii].Bhp - ((pressureAltValuesBelow[ii].Bhp - pressureAltValues[i].Bhp) * percentDifference);
                        pressCV.Ktas = pressureAltValuesBelow[ii].Ktas - ((pressureAltValuesBelow[ii].Ktas - pressureAltValues[i].Ktas) * percentDifference);
                        pressCV.Gph = pressureAltValuesBelow[ii].Gph - ((pressureAltValuesBelow[ii].Gph - pressureAltValues[i].Gph) * percentDifference);
                        pressCV.pressureAltitudeFt = theTargetPressureAlt;
                        pressCV.rpm = pressureAltValues[i].rpm;
                        thePressureValues.push(pressCV);
                    }
                }                
            }
            return thePressureValues;
            //consider adding support for odd RPMs, like 2550, 2450, etc.
//get all items that don't match and add them
        /*   for (let i=0;i<pressureAltValues.length; i++){
                var bMatched = false;
                for (let ii=0;ii<pressureAltValuesBelow.length; ii++){
                    if (pressureAltValues[i].rpm == pressureAltValuesBelow[ii].rpm){
                        bMatched = true;
                    }
                }             
                if (!bMatched){
                    let cruiseVal = new CruiseValue();
                    cruiseVal.Bhp = 
                }   
            }*/
        }

        function getPressureAltValues(thePressAlt, theTemp){
            let thecruiseValues=[];
            console.log("getPressureAltValues " + thePressAlt + "  " + theTemp);
            //first go through all the data from 5.15 and collapse it on temperature:
            for (let i = 0; i < CruisePerformances.length; i++) {
                if (CruisePerformances[i].pressureAltitudeFt == thePressAlt){
                    let cruiseValue = new CruiseValue();
                    //Which temps?
                    cruiseValue.rpm = CruisePerformances[i].rpm;
                    cruiseValue.pressureAltitudeFt = CruisePerformances[i].pressureAltitudeFt;
                    if (theTemp==15) {
                        cruiseValue.Ktas = CruisePerformances[i].standardtempKtas;
                        cruiseValue.Bhp = CruisePerformances[i].standardtempBhp;
                        cruiseValue.Gph = CruisePerformances[i].standardtempGph;
                        } else 
                    if (theTemp==20) {
                        cruiseValue.Ktas = CruisePerformances[i].twentyaboveKtas;
                        cruiseValue.Bhp = CruisePerformances[i].twentyaboveBhp;
                        cruiseValue.Gph = CruisePerformances[i].twentyaboveGph;
                        } else 
                    if (theTemp==-20) {
                        cruiseValue.Ktas = CruisePerformances[i].twentybelowKtas;
                        cruiseValue.Bhp = CruisePerformances[i].twentybelowBhp;
                        cruiseValue.Gph = CruisePerformances[i].twentybelowGph;
                        } else 
                    if (theTemp<15) {
                        //figure out diff between standard and requested temp as a percentage) {
                        if (CruisePerformances[i].twentybelowKtas === null){
                            // 20º below and less than 8000 ft can't be handled by 152
                        }else{
                            var thePercent = (15 - theTemp)/20
    //percent * difference plus lower number to get new number) {
                            cruiseValue.Ktas = CruisePerformances[i].standardtempKtas + (thePercent * (CruisePerformances[i].standardtempKtas - CruisePerformances[i].twentybelowKtas)*-1);
                            cruiseValue.Bhp = CruisePerformances[i].standardtempBhp + (thePercent * (CruisePerformances[i].standardtempBhp - CruisePerformances[i].twentybelowBhp)*-1);
                            cruiseValue.Gph = CruisePerformances[i].standardtempGph + (thePercent * (CruisePerformances[i].standardtempGph - CruisePerformances[i].twentybelowGph)*-1);
                            }
                        } else 
                    if (theTemp>15) {
                        //figure out diff between standard and requested temp as a percentage:
                        var thePercent = (theTemp - 15)/20
//percent * difference plus lower number to get new number:
                        cruiseValue.Ktas = CruisePerformances[i].standardtempKtas - (thePercent * (CruisePerformances[i].standardtempKtas - CruisePerformances[i].twentyaboveKtas)) ;
                        cruiseValue.Bhp = CruisePerformances[i].standardtempBhp - (thePercent * (CruisePerformances[i].standardtempBhp - CruisePerformances[i].twentyaboveBhp)) ;
                        cruiseValue.Gph = CruisePerformances[i].standardtempGph - (thePercent * (CruisePerformances[i].standardtempGph - CruisePerformances[i].twentyaboveGph)) ;
                        }
                    thecruiseValues.push(cruiseValue); // all PA's still, just one column for the given temp
                }
            }
            return thecruiseValues;            
        }
