
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        function getNumberBelow(theNumber, roundtoplace){
            return (Math.floor(theNumber / roundtoplace)) * roundtoplace;
        }

        //take 1800 and turn it into 2000, 800 into 1000, 14000 into 15000.
        function getNumberAbove(theNumber, roundtoplace){
            return (Math.ceil(theNumber / roundtoplace)) * roundtoplace;
        }
        
        $(document).ready(function() {
            let html = document.createElement("div"); 
            html.setAttribute("id","footer");
            html.innerHTML="The contents of this website are for education purposes only.  It is up to you to verify these results are correct when using them.";
            document.body.append(html);

            $("#header").html("<div style='border:1px solid black;'>Pages available on this site:<a href='../headings/headings.html'>Practice heading turning</a> <a href='../flightplan/flightplan.html'>Quickly calc RPM, KTAS and GPH</a> <a href='../flightplan/landingdist.html'>Landing distance calc</a> <a href='../flightplan/takeoffdist.html'>Takeoff distance calc</a></div>");
            
        });