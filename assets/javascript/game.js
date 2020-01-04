//`Health Points`, `Attack Power` and `Counter Attack Power`.
//* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
//  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
//* The enemy character only has `Counter Attack Power`. 
//
//  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.
//
//* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.
//
//* No characters in the game can heal or recover Health Points. 
//
//  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.
//
//* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.
let health = 0;
let attackPower = 0;
let counterPower = 0;

//switch over to jquery
let babyHTML = $("#baby")
let youngHTML = $("#young")
let middleHTML = $("#middle")
let oldHTML = $("#old")

let baby = {
    health: 10,
    attackPower: 5,
    counterPower: 2,
};

let young = {
    health: 12,
    attackPower: 8,
    counterPower: 3,
};

let middle = {
    health: 15,
    attackPower: 10,
    counterPower: 1,
};

let old = {
    health: 8,
    attackPower: 5,
    counterPower: 5,
};

let deniros = [baby, young, middle, old];
let fighters = [];
let f = ["#baby", "#young", "#middle", "#old"]



$("#baby").click(function() {
    // $(fighters).push(baby)
    if (fighters.length < 2) {
        $("#choose").css({ "text-decoration": "line-through" })
        $(this).appendTo("#battleground")
        fighters.push("#baby")

        f = f.filter(function(element) {
            return element !== "#baby";
        })
        for (let i = 0; i < f.length; i++) {
            $(f[i]).appendTo("#theBench")
        }
        console.log(f)
        console.log(fighters);
    }
});

$("#young").click(function() {
    if (fighters.length < 2) {

        $("#choose").css({ "text-decoration": "line-through" })
        $(this).appendTo("#battleground")

        fighters.push("#young")
        f = f.filter(function(element) {
            return element !== "#young";
        })
        for (let i = 0; i < f.length; i++) {
            $(f[i]).appendTo("#theBench")
        }

        console.log(f)
        console.log(fighters);
    }
});

$("#middle").click(function() {
    if (fighters.length < 2) {

        $("#choose").css({ "text-decoration": "line-through" })
        $(this).appendTo("#battleground")

        fighters.push("#middle")
        f = f.filter(function(element) {
            return element !== "#middle";
        })
        for (let i = 0; i < f.length; i++) {
            $(f[i]).appendTo("#theBench")
        }

        console.log(this)
        console.log(fighters);
    }
});

$("#old").click(function() {
    if (fighters.length < 2) {

        $("#choose").css({ "text-decoration": "line-through" })
        $(this).appendTo("#battleground")

        fighters.push("#old")
        f = f.filter(function(element) {
            return element !== "#old";
        })
        for (let i = 0; i < f.length; i++) {
            $(f[i]).appendTo("#theBench")
        }

        console.log(this)
        console.log(fighters);
    }
});




console.log(fighters);
//nemesis selection clicks

//$("#youngAgain").click(function() {
//    $(this).remove("#theBench")
//    $(this).appendTo("#battleground")
//});
//
//$("#middleAgain").click(function() {
//    $(this).appendTo("#battleground")
//});
//
//$("#oldAgain").click(function() {
//    $(this).appendTo("#battleground")
//});
//
//$("#babyAgain").click(function() {
//    $(this).appendTo("#battleground")
//});


//if (#battleground.children = 2) //lock ability to click

//$(deniros).click(function() {
//    for (i = 0; i < 2; i++) {
//        $(deniros).appendTo(fighters);
//    }
//    $(fighters).appendTo("#battleground"),
//        $("#choose").css({ "text-decoration": "line-through" });
//});

//character selection click
//babyHTML.click(function() {

//$(deniros).click(function() {
//
//    $("#choose").css({ "text-decoration": "line-through" }),
//        $(this).appendTo("#battleground");
//});

//for (i = 0; i < 1; i++)