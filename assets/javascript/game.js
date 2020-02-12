$(document).ready(function() {



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
    let nemesis
    let winTally = 0
    let playerHealth
    let playerAttack
    let nemesisHealth
    let nemesisCounter
    let newPlayerHealth
    let newNemesisHealth

    $("div.popup-overlay").hide()
    $("#winTally").append(`  ` + winTally)


    for (let i = 0; i < deniros.length; i++) {

        $(deniros[i].cssID).click(function() {
            // if the first two cards are selected, move to battle ground
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
                playerHealth = deniros[i].health
                playerAttack = deniros[i].attackPower
                $("#myHealthHTML").text(playerHealth)
            } else if (fighters.length < 3) {
                let nemesis = fighters[1]
                console.log(nemesis)
                nemesisHealth = deniros[i].health
                nemesisCounter = deniros[i].counterPower
                $("#nemesisHealthHTML").text(nemesisHealth)
            } else {
                console.log("no action")
            }
            return nemesisCounter
            return playerAttack;
        })
    };

    console.log(f)

    //var shootout = $(function() {});

    //console.log($(playerHealth))

    let regPlay = function() {

        console.log("button")

        let nowPlayerHealth = $("#myHealthHTML").text()
            //console.log(nowPlayerHealth)
        let nowNemesisHealth = $("#nemesisHealthHTML").text()
        newPlayerHealth = nowPlayerHealth - nemesisCounter
            //console.log(newPlayerHealth)
        newNemesisHealth = nowNemesisHealth - playerAttack
            //   return newPlayerHealth
            //return newNemesisHealth
        console.log(newPlayerHealth)
        console.log(newNemesisHealth)
        $("#myHealthHTML").text(newPlayerHealth)
        $("#nemesisHealthHTML").text(newNemesisHealth);
    }


    let ultimateVictor = function() {
        //$("#deniroPic").append()
        $("div.popup-overlay").show()
    }



    let gameOver = function() {
        $("#myHealthHTML").text("GAME OVER")
            //console.log($("#myHealthHTML").text())
        $("div#button").hide();
        //if I have time, I'll make this appear on a pop up or something
        console.log("Choke, choke, gurgle, gurgle, mlehhhhh");
    };

    //start here on my win function




    $("#button").click(function() {

        regPlay();
        let h = $("#myHealthHTML").text();
        let n = $("#nemesisHealthHTML").text()
        console.log("Nemesis health", n)
        if (h <= 0) {
            return gameOver();
        } else if (n < 1) {
            $("div#button").hide()
            winTally += 1
            $("#winTally").text(winTally)
            if (winTally >= 3) {
                return ultimateVictor()
            } else {
                $("#nemesisHealthHTML").text("Choke, choke, gurgle, gurgle, mlehhhhhh --- You win!")
                let nem = fighters[1];
                fighters = fighters.filter(function(fighter) {
                        return fighter != nem;
                    })
                    //console.log(nem) 
                    //console.log(fighters);
                $(nem).hide();
                $("div#button").show()
            }

        }
    })




});