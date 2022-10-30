
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
        