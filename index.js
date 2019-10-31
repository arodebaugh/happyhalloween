// number of drops created.
let nbDrop = 858;

// function to generate a random number range.
function randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {
    for( let i = 1; i<nbDrop; i++) {
        let dropLeft = randRange(0,1600);
        let dropTop = randRange(-1000,1400);

        $('#rain').append('<div class="drop" id="drop' + i + '"></div>');
        $('#drop' + i).css('left', dropLeft).css('top', dropTop);
    }
}
// Make it rain
createRain();

let animateHalloweenTextPlay = true;

let animateHalloweenText = anime({
    targets: '.halloween-text',
    loop: true,
    duration: 2000,
    autoplay: true,
    keyframes: [
        {rotate: '-20deg'},
        {rotate: '0deg'},
        {rotate: '20deg'},
        {rotate: '0deg'}
    ]
});

document.querySelector('#ht').onclick = function() {
    animateHalloweenTextPlay = !animateHalloweenTextPlay;
    if (animateHalloweenTextPlay) {
        animateHalloweenText.play();
    } else {
        document.querySelector('#ht').style.rotate = "0deg";
        animateHalloweenText.pause();
    }
};

/*anime({
    targets: '#moon',
    loop: true,
    duration: 10000,
    autoplay: true,
    keyframes: [
        {rotate: '-360deg'},
        {rotate: '0deg'},
        {rotate: '360deg'},
        {rotate: '0deg'}
    ]
});*/

// Lightning

const thunder = new Audio('./sfx/Thunder-Mark_DiAngelo-2147265856.mp3');

function lightning() {
    thunder.currentTime = 500;
    setTimeout(function () {
        $('#rip').css('filter', 'brightness(90%)');
        $('#background').css('filter', 'brightness(90%)');
        $('#pumpkin').css('filter', 'brightness(90%)');
        $('#cat').css('filter', 'brightness(90%)');
        $('#bird').css('filter', 'brightness(90%)');
        $('#ground').css('filter', 'brightness(20%)');
        thunder.play();
        setTimeout(function () {
            $('#rip').css('filter', 'brightness(50%)');
            $('#background').css('filter', 'brightness(50%)');
            $('#pumpkin').css('filter', 'brightness(50%)');
            $('#cat').css('filter', 'brightness(50%)');
            $('#bird').css('filter', 'brightness(50%)');
            $('#ground').css('filter', 'brightness(0%)');
            thunder.pause();
            thunder.currentTime = 500;
            setTimeout(function () {
                $('#rip').css('filter', 'brightness(90%)');
                $('#background').css('filter', 'brightness(90%)');
                $('#pumpkin').css('filter', 'brightness(90%)');
                $('#cat').css('filter', 'brightness(90%)');
                $('#bird').css('filter', 'brightness(90%)');
                $('#ground').css('filter', 'brightness(20%)');
                thunder.play();
                setTimeout(function () {
                    $('#rip').css('filter', 'brightness(50%)');
                    $('#background').css('filter', 'brightness(50%)');
                    $('#pumpkin').css('filter', 'brightness(50%)');
                    $('#cat').css('filter', 'brightness(50%)');
                    $('#bird').css('filter', 'brightness(50%)');
                    $('#ground').css('filter', 'brightness(0%)');
                    thunder.pause();
                    thunder.currentTime = 500;
                    setTimeout(function () {
                        lightning();
                    },  Math.floor((Math.random() * 3000) + 300));
                }, 1700);
            }, 1700);
        }, 1700);
    }, 1000);
}

lightning();
