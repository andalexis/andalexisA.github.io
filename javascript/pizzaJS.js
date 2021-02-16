//Javascript for pizza function
// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.
function getReceipt() {
    // This initializes our string so it can get passed from  
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var text2 = "<h3>Item Price</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    var itemPrice = sizeTotal;
    sizeTotal = itemPrice;
    text2 = text2 + itemPrice + "<br>";

    runningTotal = sizeTotal;
    getMeat(runningTotal, text1, text2); // All three of these variables will be passed on to each function
};

// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total
function getMeat(runningTotal, text1, text2) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatPrice = [0];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            text1 = text1 + meatArray[j].value + "<br>";

        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);

    } else {
        meatTotal = 0;
    }

    for (var j = 1; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            meatPrice.push("<br>", 1);
        }
    }


    text2 = text2 + meatPrice + "<br>";

    runningTotal = (runningTotal + meatTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("itemPrice").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getCheese(runningTotal, text1, text2);
};

//cheese
function getCheese(runningTotal, text1, text2) {
    var cheeseTotal = 0;
    var amountArray = document.getElementsByClassName("cheeses");
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i].checked) {
            var selectedSize = amountArray[i].value;
            text1 = text1 + amountArray[i].value + "<br>";
        }
    }
    if (selectedSize === "No Cheese") {
        cheeseTotal = 0;
    } else if (selectedSize === "Regular") {
        cheeseTotal = 0;
    } else if (selectedSize === "Extra Cheese") {
        cheeseTotal = 3;
    }


    itemPrice = cheeseTotal;
    text2 = text2 + itemPrice + "<br>";

    runningTotal = (runningTotal + cheeseTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("itemPrice").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getCrust(runningTotal, text1, text2);
};

//crust 
function getCrust(runningTotal, text1, text2) {
    var crustTotal = 0;
    var typeArray = document.getElementsByClassName("crusts");
    for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i].checked) {
            var selectedCrust = typeArray[i].value;
            text1 = text1 + typeArray[i].value + "<br>";
        }
    }
    if (selectedCrust === "Gluten Free Crust") {
        crustTotal = 3;
    } else if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else {
        crustTotal = 0;
    }


    itemPrice = crustTotal;
    text2 = text2 + itemPrice + "<br>";

    runningTotal = (runningTotal + crustTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("itemPrice").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getVeggie(runningTotal, text1, text2);
};

//veggie
function getVeggie(runningTotal, text1, text2) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggiePrice = [0];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
            text1 = text1 + veggieArray[j].value + "<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }


    for (var j = 1; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            veggiePrice.push("<br>", 1);
        }
    }


    text2 = text2 + veggiePrice + "<br>";

    runningTotal = (runningTotal + veggieTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("itemPrice").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getSauce(runningTotal, text1, text2);
};

//sauce
function getSauce(runningTotal, text1, text2) {
    var sauceTotal = 0;
    var typeArray = document.getElementsByClassName("sauces");
    for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i].checked) {
            var selectedSauce = typeArray[i].value;
            text1 = text1 + typeArray[i].value + "<br>";
        }
    }
    var selectedSauce = sauceTotal;

    var itemPrice = sauceTotal;
    sauceTotal = itemPrice;
    text2 = text2 + itemPrice + "<br>";

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("itemPrice").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};