
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
            if (totalWater >= neededGallons) {
                document.write("You have enough water.")
            }
            else {
                document.write("You don't have enough water. You need an additional:", Math.ceil(neededGallonsWater - totalWater),
                      "gallons, or:", Math.ceil((neededGallonsWater - totalWater) / 0.13203125), "bottles of water.")
            }
        };

        function enoughFoodShelter() {
            document.write("You need a total of:", math.ceil(neededRationsSheltering * 3), "meals.")
            document.write("This is the equivalent of", math.ceil(neededCaloriesSheltering), "calories, or:")
            document.write(math.ceil(neededCaloriesSheltering / 6800.0), "bags of Huel meal replacement, or:")
            document.write(math.ceil((neededRationsSheltering * 3) / 8), "Mountain House #10 Cans.")
        };

        function additionalSuppliesShelter() {
            document.write("You need a total of", math.ceil((numPeopleSheltering * 2) * numWeeks), "N95 masks to reduce the spread of Covid-19.")
            document.write("You need a total of", math.ceil((numPeopleSheltering * numWeeks) / 2), "bottles of hand sanitizer.")
            document.write("You need enough prescription medication per person for", numDaysSheltering, "days.")
            document.write("You need", numPeopleSheltering, "flashlights, and", numPeopleSheltering, "headlamps.")
            document.write("You need", math.ceil(numPeopleSheltering * numDaysSheltering * 1.5), "protein bars.")
            document.write("You need", math.ceil((numPeopleSheltering * numDaysSheltering) / 3), "boxes of Cosmic Brownies.")
            // This is a New Orleans in-joke.
            document.write("You need approximately", neededGallonsGas, "gallons of gas for a standard 2000w Honda inverter generator.")
        };

        enoughWaterShelter();
        enoughFoodShelter();
        additionalSuppliesShelter();
};

//function getEvacuationResults() {

//}