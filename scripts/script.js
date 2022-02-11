
function getShelteringResults() {
    var numPeopleSheltering = parseInt(document.getElementById("numPeopleShelteringLabel").value);
    var numDaysSheltering = parseInt(document.getElementById("numDaysShelteringLabel").value);
    var numGallonsWaterSheltering = parseInt(documents.getElementById("numGallonsWaterShelteringLabel").value);
    var numWaterBottlesSheltering = parseInt(documents.getElementById("numBottlesWaterShelteringLabel").value);

    var neededRationsSheltering = (numPeopleSheltering * numDaysSheltering);
    var neededCaloriesSheltering = (neededRationsSheltering * 2000);
    var numWeeks = (Math.ceil(numDaysSheltering / 7));
    var numHours = (numDaysSheltering * 24);
    var neededGallonsWater = (neededRations * 3);
    var totalWater = (numGallonsWaterSheltering + (numWaterBottlesSheltering * 0.13203125));
    var gPH = round((9.1 / 1.1), 2)
    var neededGallonsGas = round(numHours / gPH, 2)

        function enoughWaterShelter() {
            if (totalWater >= neededGallonsWater) {
                document.getElementById("resultsShelteringEnoughWater").innerHTML = "You have enough water.";
            }
            else {
                document.getElementById("resultsShelteringEnoughWater").innerHTML = "You don't have enough water. You need an additional:" +Math.ceil(neededGallonsWater - totalWater) +
                      "gallons, or:" + Math.ceil((neededGallonsWater - totalWater) / 0.13203125) + "bottles of water.";
            }
        };

        function enoughFoodShelter() {
            document.getElementById("resultsShelteringEnoughFood").innerHTML = "You need a total of:" + Math.ceil(neededRationsSheltering * 3) + "meals. This is the equivalent of" + math.ceil(neededCaloriesSheltering) + "calories, or:" + Math.ceil(neededCaloriesSheltering / 6800.0) + "bags of Huel meal replacement, or:" + Math.ceil((neededRationsSheltering * 3) / 8) + "Mountain House #10 Cans.";
        };

        function additionalSuppliesShelter() {
            document.getElementById("resultsShelteringN95").innerHTML = "You need a total of" + Math.ceil((numPeopleSheltering * 2) * numWeeks) + "N95 masks to reduce the spread of Covid-19.";
            document.getElementById("resultsShelteringHandSanitizer").innerHTML = "You need a total of" + Math.ceil((numPeopleSheltering * numWeeks) / 2) + "bottles of hand sanitizer.";
            document.getElementById("resultsShelteringPrescriptionMeds").innerHTML = "You need enough prescription medication per person for" + numDaysSheltering + "days.";
            document.getElementById("resultsShelteringLights").innerHTML = "You need" + numPeopleSheltering + "flashlights, and" + numPeopleSheltering + "headlamps.";
            document.getElementById("resultsShelteringProteinBars").innerHTML = "You need" + Math.ceil(numPeopleSheltering * numDaysSheltering * 1.5) + "protein bars.";
            document.getElementById("resultsShelteringCosmicBrownies").innerHTML = "You need" + Math.ceil((numPeopleSheltering * numDaysSheltering) / 3) + "boxes of Cosmic Brownies.";
            // This is a New Orleans in-joke.
            document.getElementById("resultsShelteringGas").innerHTML = "You need approximately" + neededGallonsGas + "gallons of gas for a standard 2000w Honda inverter generator.";
        };

        enoughWaterShelter();
        enoughFoodShelter();
        additionalSuppliesShelter();
};

//function getEvacuationResults() {

//}