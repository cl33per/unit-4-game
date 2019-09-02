$(document).ready(function () {

    // Defing Global Variables
    var attacker = [];
    var defender = [];
    var defenders = 3;
    var characters = [yuna, tidus, auron, lulu];
    var charactersNames = ['yuna', 'tidus', 'auron', 'lulu'];
    var game = {
        isAttacker: false,
        isDefender: false,
        enemies: characters,
        arenaReady: false,

    };
    // Define Character Properties
    var yuna = {
        name: 'yuna',
        hp: 380,
        ap: 4,
        cap: 32,
    };
    var tidus = {
        name: 'tidus',
        hp: 520,
        ap: 5,
        cap: 25,
    };
    var auron = {
        name: 'auron',
        hp: 1030,
        ap: 10,
        cap: 33,
    };
    var lulu = {
        name: 'lulu',
        hp: 480,
        ap: 12,
        cap: 37,
    };

    //Selecting Charaters
    function characterSelect() {
        $('.chars').click(function () {
            if (!game.isAttacker) {
                attacker = $(this).data();
                $(this).appendTo('#pickedChar');
                $(this).removeClass('col-lg-2');
                $(this).addClass('col-lg-12');
                $(this).addClass('attackchar');
                game.isAttacker = true;
                console.log('Attack Function Finish Exit');
            } else if (game.isAttacker && !game.isDefender) {
                defender = $(this).data();
                $(this).appendTo('#defender');
                $(this).removeClass('col-lg-2');
                $(this).addClass('enemy');
                $(this).addClass('col-lg-12');
                game.isDefender = true;
                game.arenaReady = true;
                $('.chars').removeClass('col-lg-2');
                $('.chars').addClass('col-lg-4');
                $('.chars').addClass('disable');
                $('#atckBtn').show();
                console.log('Defender Function Finish Exit');
            } else if (game.arenaReady) {};
            charactersArena();
            testing();
        });
    };

    function charactersArena() {
        // Assigning ID's to attacker in arena or defender in arena
        var attackerArena = $('.attackchar').attr('id');
        var defenderArena = $('.enemy').attr('id');
        // Using switch to asign charater attributes to attacker or defender
        if (!game.arenaReady){
        switch (attackerArena) {
            case 'yuna':
                attacker = yuna;
                attackerOg = yuna.ap;
                console.log('Attacker: yuna');
                break;
            case 'tidus':
                attacker = tidus;
                attackerOg = tidus.ap;
                console.log('Attacker: tidus');
                break;
            case 'auron':
                attacker = auron;
                attackerOg = auron.ap;
                console.log('Attacker: auron');
                break;
            case 'lulu':
                attacker = lulu;
                attackerOg = lulu.ap;
                console.log('Attacker: lulu');
                break;
        };
    };
        switch (defenderArena) {
            case 'yuna':
                defender = yuna;
                console.log('Defender: yuna')
                break;
            case 'tidus':
                defender = tidus;
                console.log('Defender: tidus');
                break;
            case 'auron':
                defender = auron;
                console.log('Defender: auron');
                break;
            case 'lulu':
                defender = lulu;
                console.log('Defender: lulu');
                break;
        };
    };

    // Testing Function
    function testing() {
        console.log('-------------------------------')
        console.log('Attacker:' + game.isAttacker);
        console.log('Defender:' + game.isDefender);
        console.log('Arena Ready:' + game.arenaReady);
        console.log('Defenders Left: ' + defenders);
        console.log('Attacker AP:' + attacker.ap);
        console.log('-------------------------------')
    }

    //Adds values and text to IDs
    function chartacterProperty() {
        $('#yuna').text(yuna.hp);
        $('#tidus').text(tidus.hp);
        $('#auron').text(auron.hp);
        $('#lulu').text(lulu.hp);
    };

    // Double checks health defender validation wihthin click fucntion
    function win() {
        if (defenders == 0) {
            console.log('Game Win');
            $('#display').empty();
            var winText = document.createElement('h2');
            winText.className = 'text-light';
            winText.textContent ='You have won the game... Click Resart Game to play again...'
            $('#display').append(winText);
        };
    };

    // Area for attack, hp, counter attack 
    $('#atckBtn').click(function () {
        if (attacker.hp >= 0 && defender.hp >= 0) {
            console.log('Both Alive');
            defender.hp = defender.hp - attacker.ap;
            attacker.ap = attacker.ap + attackerOg;
            attacker.hp = attacker.hp - defender.cap;
            console.log('Attacker: ' + attacker.hp);
            attackStatus = ('You Attacked for:' + attacker.ap);
            $('#attackStats').text(attackStatus);
            console.log('Defender: ' + defender.hp);
            defenderstats = ('Defender Counter Attack for:' + defender.cap);
            $('#defenderStats').text(defenderstats);
            console.log('Attacker AP:' + attacker.ap);
            chartacterProperty();
        } else if (attacker.hp <= 0) {
            console.log('Attacker Dead');
        };
        //Game loss
        if (attacker.hp <= 0) {
            console.log("Attacker Dead");
            $('#pickedChar').empty();
            game.isAttacker = false;
            game.arenaReady = false;
            $('#display').empty();
            var lostText = document.createElement('h2');
            lostText.className = 'text-light';
            lostText.textContent ='You have lost the game... Click Resart Game to try again...'
            $('#display').append(lostText);
        }
        // Win Round
        if (defender.hp <= 0 && game.isDefender) {
            console.log('Defender Dead');
            $('#defender').empty();
            game.isDefender = false;
            game.arenaReady = false;
            defenders--;
        };
        win();
    });

    // Hide attack button on load
    $('#atckBtn').hide();
    //Prints charaters in div
    for (var i = 0; i < characters.length; i++) {
        var chars = $('<div>');
        chars.attr('id', charactersNames[i]);
        chars.addClass('chars col-lg-2');
        $('#characters').append(chars);
        chartacterProperty();
    }
    //Start calling functions
    characterSelect();
    testing();
    // Refresh button 
    $('#restart').click(function () {
        location.reload();
    });

    //END  
});