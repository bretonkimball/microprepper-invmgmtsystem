

var numDays;
var numHours;
var numPeople;
var neededRations;
var neededCalories;

function hurricane_shelter() {
    numPeople = 
    numDays = 
    // var waterGallons = 



    neededRations = (numPeople * numDays)
    neededCalories = (neededRations * 2000)
    var numWeeks = math.ceil(numDays / 7)
    var neededGallons = (neededRations * 3)
    var totalWater = (waterGallons + (waterBottles * 0.13203125))
    var gPH = round((9.1 / 1.1), 2)
    var neededGallonsGas = round(numHours / gPH, 2)



    function enough_water_shelter() {
        if (totalWater >= neededGallons) {
            print("You have enough water.")
        }
        else {
            print("You don't have enough water. You need an additional:", math.ceil(neededGallons - totalWater),
                  "gallons, or:", math.ceil((neededGallons - totalWater) / 0.13203125), "bottles of water.")
        }
    }

    function enough_food_shelter() {
        print("You need a total of:", math.ceil(neededRations * 3), "meals.")
        print("This is the equivalent of", math.ceil(neededCalories), "calories, or:")
        print(math.ceil(neededCalories / 6800.0), "bags of Huel meal replacement, or:")
        print(math.ceil((neededRations * 3) / 8), "Mountain House #10 Cans.")
    }

    function additional_supplies_shelter() {
        print("You need a total of", math.ceil((numPeople * 2) * numWeeks),
              "N95 masks to reduce the spread of Covid-19.")
        print("You need a total of", math.ceil((numPeople * numWeeks) / 2), "bottles of hand sanitizer.")
        print("You need enough prescription medication per person for", numDays, "days.")
        print("You need", numPeople, "flashlights, and", numPeople, "headlamps.")
        print("You need", math.ceil(numPeople * numDays * 1.5), "protein bars.")
        print("You need", math.ceil((numPeople * numDays) / 3), "boxes of Cosmic Brownies.")
        // This is a New Orleans in-joke.
        print("You need approximately", neededGallonsGas,
              "gallons of gas for a standard 2000w Honda inverter generator.")
    }
}