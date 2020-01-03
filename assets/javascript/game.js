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

let babyHTML = document.querySelector("#baby")
let youngHTML = document.querySelector("#young")
let middleHTML = document.querySelector("#middle")
let oldHTML = document.querySelector("#old")

let deniros = [babyHTML, youngHTML, middleHTML, oldHTML]

//babyHTML.click(function() {

$("#baby").click(function() {
    $("#choose").remove("")
    $(this).appendTo("#battleground")

    $("#young").appendTo("#theBench")
    $("#middle").appendTo("#theBench")
    $("#old").appendTo("#theBench")

    youngHTML.id = "#youngAgain"
    middleHTML.id = "#middleAgain"
    oldHTML = "#oldAgain"
});



//character selection clicks
$("#young").click(function() {
    $("#choose").remove("")
    $(this).appendTo("#battleground")
    $("#baby").appendTo("#theBench")
    $("#middle").appendTo("#theBench")
    $("#old").appendTo("#theBench")

    babyHTML.id = "#babyAgain"
    middleHTML.id = "#middleAgain"
    oldHTML = "#oldAgain"
});

$("#middle").click(function() {
    $("#choose").remove("")
    $(this).appendTo("#battleground")
    $("#young").appendTo("#theBench")
    $("#baby").appendTo("#theBench")
    $("#old").appendTo("#theBench")
    babyHTML.id = "#babyAgain"
    youngHTML.id = "#youngAgain"
    oldHTML = "#oldAgain"
});

$("#old").click(function() {
    $("#choose").remove("")
    $(this).appendTo("#battleground")
    $("#young").appendTo("#theBench")
    $("#middle").appendTo("#theBench")
    $("#baby").appendTo("#theBench")
    babyHTML.id = "#babyAgain"
    middleHTML.id = "#middleAgain"
    youngHTML = "#youngAgain"
});

//nemesis selection clicks

$("#youngAgain").click(function() {
    $(this).appendTo("#battleground")
});

$("#middleAgain").click(function() {
    $(this).appendTo("#battleground")
});

$("#oldAgain").click(function() {
    $(this).appendTo("#battleground")
});

$("#babyAgain").click(function() {
    $(this).appendTo("#battleground")
});