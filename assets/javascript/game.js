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
    cssID: "#baby",
    health: 10,
    attackPower: 5,
    counterPower: 2,
};

let young = {
    cssID: "#young",
    health: 12,
    attackPower: 8,
    counterPower: 3,
};

let middle = {
    cssID: "#middle",
    health: 15,
    attackPower: 10,
    counterPower: 1,
};

let old = {
    cssID: "#old",
    health: 8,
    attackPower: 5,
    counterPower: 5,
};

//arrays of characters for actions
let deniros = [baby, young, middle, old];
let fighters = [];
let f = ["#baby", "#young", "#middle", "#old"];


let player = []

winTally = 0

$("#winTally").append(`  ` + winTally)


for (let i = 0; i < deniros.length; i++) {

    $(deniros[i].cssID).click(function() {

        if (fighters.length < 2) {

            let id = `#${this.id}`
            $("#choose").css({ "text-decoration": "line-through" })
            $(id).appendTo("#battleground")
            fighters.push(id)
            console.log(fighters)

            f = f.filter(function(element) {
                return element !== id;
            })
            for (let j = 0; j < f.length; j++) {
                $(f[j]).appendTo("#theBench")
            }
        }
        if (fighters.length < 2) {
            player = fighters[0] //.replace("#", "")]
            console.log(player)
            $("#myHealthHTML").append(deniros[i].health)
        } else if (fighters.length < 3) {
            let nemesis = fighters[1]
            console.log(nemesis)
            $("#nemesisHealthHTML").append(deniros[i].health)
        } else {
            console.log("no action")
        }


        //console.log(deniros[i].health)






    })
};





console.log(f)

//$(deniros).onclick(
//for (let l = 0; l < fighters.length; l++)
//    $(fighters[l].cssID).click(function() {
//      $("#myHealthHTML").append(fighters[0].health) //$("#nemesisHealthHTML").append(fighters[1].health);

//});
//
//$("#myHealthHTML").append(myHealth);
//$("#nemesisHealthHTML").append(nemesisHealth);



//click functions for moving characters


//have fighters "fight" eachother
//let myNewPower = fighters[0].attackPower;
//connect that function to BANG button

$("#button").click(function() {
    console.log("button")
        // fighters[0] = {
        //     health: health - (fighters[1].counterPower)
        //     myNewPower: fighters[0].attackPower + fighters[0].attackPower
        //     counterPower: counterPower;
        // }
        //
        // fighters[1] = {
        //     health: health - (fighters[0].attackPower)
        //     attackPower: attackPower
        //     counterPower: counterPower;
        // }
        // return myNewPower = fighters[0].attackPower
});

//if (myHealth <= 0), {
//    $("#myHealthHTML").append("GAME OVER")
//    $("<button>Bang!</button>").hide();
//};
//else if (nemesisHealth <= 0) {
//    winTally = "" + 1
//    $(fighters[1]).remove("#battleground")
//};
//else if //all defeated, you win
//(wins = 3) {
//    $(document).alert("YOU ARE THE TOUGHEST DE NIRO")
//};

//
//$("#young").click(function() {
//    if (fighters.length < 2) {
//
//        $("#choose").css({ "text-decoration": "line-through" })
//        $(this).appendTo("#battleground")
//
//        fighters.push("#young")
//        f = f.filter(function(element) {
//            return element !== "#young";
//        })
//        for (let i = 0; i < f.length; i++) {
//            $(f[i]).appendTo("#theBench")
//        }
//
//        console.log(f)
//        console.log(fighters);
//    }
//});
//
//$("#middle").click(function() {
//    if (fighters.length < 2) {
//
//        $("#choose").css({ "text-decoration": "line-through" })
//        $(this).appendTo("#battleground")
//
//        fighters.push("#middle")
//        f = f.filter(function(element) {
//            return element !== "#middle";
//        })
//        for (let i = 0; i < f.length; i++) {
//            $(f[i]).appendTo("#theBench")
//        }
//
//        console.log(this)
//        console.log(fighters);
//    }
//});
//
//$("#old").click(function() {
//    if (fighters.length < 2) {
//
//        $("#choose").css({ "text-decoration": "line-through" })
//        $(this).appendTo("#battleground")
//
//        fighters.push("#old")
//        f = f.filter(function(element) {
//            return element !== "#old";
//        })
//        for (let i = 0; i < f.length; i++) {
//            $(f[i]).appendTo("#theBench")
//        }
//
//        console.log(this)
//        console.log(fighters);
//    }
//});
//console.log(fighters);