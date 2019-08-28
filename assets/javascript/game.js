$(document).ready(function () {
    // Hide attack button on load
    $("#atckBtn").hide();
var attackBounusPower = [];
var defender = [];
var attacker = [];
var dead = [];

var character = {
    yunna: {
        "Health": 475,
        "Attack Power": 50,
        "Counter Attack Power": 110,
    },
    tidus: {
        "Health": 520,
        "Attack Power": 50,
        "Counter Attack Power": 110,
    },
    auron: {
        "Health": 1030,
        "Attack Power": 50,
        "Counter Attack Power": 110,
    },
    lulu: {
        "Health": 380,
        "Attack Power": 50,
        "Counter Attack Power": 110,
    }
}



    $("#yuna").text(character.yunna.Health)
    $("#auron").text(character.auron.Health)
    $("#lulu").text(character.lulu.Health)
    $("#tidus").text(character.tidus.Health)


    // Selecting Charater
    $(".chars").click(function () {
        


    });

    // Area for attack, health, counter attack 
    $("#attack").click(function () {

    });



    // Refresh button 
    $("#restart").click(function () {
        location.reload();
    });

  //END  
});