let health = 0;
let attackPower = 0;
let counterPower = 0;

//characters
let babyHTML = $("#baby")
let youngHTML = $("#young")
let middleHTML = $("#middle")
let oldHTML = $("#old")
    //character traits
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

let myHealth = fighters[0].health
let nemesisHealth = fighters[1].health

$("#myHealthHTML").append(myHealth);
$("#nemesisHealthHTML").append(nemesisHealth);

//arrays of characters for actions
let deniros = [baby, young, middle, old];
let fighters = [];
let f = ["#baby", "#young", "#middle", "#old"];
//click functions for moving characters
$("#baby").click(function() {
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


//have fighters "fight" eachother
let myNewPower = fighters[0].attackPower;
//connect that function to BANG button

$("<button>Bang!</button>").click(function() {
    fighters[0] = {
        health: health - (fighters[1].counterPower)
        myNewPower: fighters[0].attackPower + fighters[0].attackPower
        counterPower: counterPower;
    }

    fighters[1] = {
        health: health - (fighters[0].attackPower)
        attackPower: attackPower
        counterPower: counterPower;
    }
}) return myNewPower = fighters[0].attackPower;


//clear defeated fighter out of battleground

if $(myHealth) = 0 {
    //game over
    //tally loss or win

}

if $(nemesisHealth) = 0 {
    //tally loss or win
    //win=select new nemesis

}