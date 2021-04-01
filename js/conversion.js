var items = [
  {
    id: "hummingbird",
    cad: 4000,
    pre: "< ",
    post: ""
  },
  {
    id: "swift",
    cad: 400000,
    pre: "",
    post: "/kg"
  }
]

var currencyRates = {
        "USD": 0.8,
        "GBP": 0.6,
        "CAD": 1
}
var currentlySelected = "CAD";
var valueInCad = 0;

var product;
for (i of items) {
  if (i.id === document.getElementById("product").textContent) {
    product = i;
  }
}

valueInCad = product.cad;

var currentPos = {
    "1": "USD",
    "2": "GBP"
}

var order = ["CAD", "USD", "GBP"]
var currentVal = valueInCad;

function convert(clickedID) {
    currentlySelected = currentPos[clickedID];
    currentVal = valueInCad*currencyRates[currentlySelected];

    //update display list and current pos lists
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
    var currentValstr = "";
    if (currentlySelected === "GBP") {
        currentValstr += "£";
    } else {
        currentValstr += "$"
    }
    currentValstr += currentVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("cost").textContent = product.pre + currentValstr + product.post + " " + currentlySelected;
}
