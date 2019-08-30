// Defing Global Variables
var attackBounusPower = [];
var defender = [];
var attacker = [];
var dead = [];
var characters = [yuna, tidus, auron, lulu];
var charactersNames = ['yuna', 'tidus', 'auron', 'lulu'];
var game = {
    isAttacker: false,
    isDefender: false,
    enemies: characters,
    arenaReady: false,

}
// Define Character Properties
var yuna = {
    name: 'yuna',
    hp: 475,
    ap: 50,
    cap: 110,
};
var tidus = {
    name: 'tidus',
    hp: 520,
    ap: 50,
    cap: 110,
};
var auron = {
    name: 'auron',
    hp: 1030,
    ap: 50,
    cap: 110,
};
var lulu = {
    name: 'lulu',
    hp: 380,
    ap: 50,
    cap: 110,
};

//Selecting Charaters
function characterSelect() {
    $('.chars').click(function () {
        if (!game.isAttacker) {
            attacker = $(this).data();
            $(this).appendTo('#pickedChar');
            $(this).removeClass('col-lg-2');
            $('.chars').addClass('defender');
            $('.defender').removeClass('chars');
            $(this).addClass('col-lg-12');
            game.isAttacker = true;
            console.log('Attack Function Finish Exit');
        }
        testing();
        });
}

function defenderSelect() {
$('.defender').click(function () {
        if (!game.isDefender) {
            attacker = $(this).data();
            $(this).appendTo('#defender');
            $(this).removeClass('col-lg-2');
            $(this).removeClass('defender');
            $(this).addClass('col-lg-12');
            game.defender = true;
            console.log('Defender Function Finish Exit');
        }
        testing();
        });
}



// Testing Function
function testing() {
    console.log("Attacker:" + game.isAttacker)
    console.log("Defender:" + game.isDefender)
    console.log("Arena Ready:" + game.arenaReady)
    console.log("-------------------------------")
}

//Start
$(document).ready(function () {
    // Hide attack button on load
    $('#atckBtn').hide();
    //Prints charaters in div
    for (var i = 0; i < characters.length; i++) {
        var chars = $('<div>');
        chars.attr('id', charactersNames[i]);
        chars.addClass('chars col-lg-2');
        $('#characters').append(chars);
        $('#yuna').text(yuna.hp)
        $('#tidus').text(tidus.hp)
        $('#auron').text(auron.hp)
        $('#lulu').text(lulu.hp)
    }
    characterSelect();
    defenderSelect();
    // Area for attack, hp, counter attack 
    $('#attack').click(function () {

    });



    // Refresh button 
    $('#restart').click(function () {
        location.reload();
    });

    //END  
});