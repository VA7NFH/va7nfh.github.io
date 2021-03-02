var currencyRates = {
        "USD": 0.8,
        "GBP": 0.6

}
var currentlySelected = "CAD";
var valueInCad = 0;

var product = document.getElementById("product");
if (product.textContent === "hummingbird") {
    valueInCad = 4000;
}

var currentPos = {
    "1": "USD",
    "2": "GBP"
}

var order = ["CAD", "USD", "GBP"]
var currentVal = valueInCad;

function convert(clickedID) {
    currentlySelected = currentPos[clickedID];
    currentVal = valueInCad*currencyRates[currentlySelected];


    //upade display list and current pos lists
    var currentEdited = 0;
    var button = document.querySelector('#buttonTitle');
        button.textContent = currentlySelected;
    for (var i = 0; i < order.length; i++) {
        if (order[i] == currentlySelected) {
            continue;
        }
        currentPos[(currentEdited+1).toString()] = order[i];
        document.getElementById((currentEdited+1).toString()).textContent = order[i];
        currentEdited++;
    }


    //update curernt displayed value
    document.getElementById("cost").textContent = "< " + currentVal + " " + currentlySelected;
}