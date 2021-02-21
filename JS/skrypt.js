var icons = ['<i class="im im-rocket"></i>', '<i class="im im-rocket"></i>', '<i class="im im-headphones"></i>', '<i class="im im-headphones"></i>', '<i class="im im-gift-card"></i>', '<i class="im im-gift-card"></i>', '<i class="im im-cookie"></i>', '<i class="im im-cookie"></i>', '<i class="im im-coffee"></i>', '<i class="im im-coffee"></i>', '<i class="im im-sun"></i>', '<i class="im im-sun"></i>', '<i class="im im-bug"></i>', '<i class="im im-bug"></i>', '<i class="im im-target"></i>', '<i class="im im-target"></i>'];

function start() {
    icons.randomize();
    output = "";
    for (i = 0; i < 16; i++) {
        $('#c' + i).html(icons[i]);
    }
}

window.onload = start;

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');
var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');

c0.addEventListener("click", function () { revealCard(0); });
c1.addEventListener("click", function () { revealCard(1); });
c2.addEventListener("click", function () { revealCard(2); });
c3.addEventListener("click", function () { revealCard(3); });
c4.addEventListener("click", function () { revealCard(4); });
c5.addEventListener("click", function () { revealCard(5); });
c6.addEventListener("click", function () { revealCard(6); });
c7.addEventListener("click", function () { revealCard(7); });
c8.addEventListener("click", function () { revealCard(8); });
c9.addEventListener("click", function () { revealCard(9); });
c10.addEventListener("click", function () { revealCard(10); });
c11.addEventListener("click", function () { revealCard(11); });
c12.addEventListener("click", function () { revealCard(12); });
c13.addEventListener("click", function () { revealCard(13); });
c14.addEventListener("click", function () { revealCard(14); });
c15.addEventListener("click", function () { revealCard(15); });

var visible = false;
var counter = 0;
var pairsLeft = 8;
var found = "";
var visibleNr;
var lock = false;

function revealCard(nr) {

    var opacityValue = $('#c' + nr).css('opacity');

    if (opacityValue != 0 && lock == false && nr != visibleNr) {

        lock = true;
        $('#c' + nr).css('background', 'white');
        $('#c' + nr).addClass('itemA');
        $('#c' + nr).removeClass('item');

        if (visible == false) {
            visible = true;
            visibleNr = nr;
            lock = false;
        }
        else {
            if (icons[visibleNr] == icons[nr]) {
                setTimeout(function () { hideCards(nr, visibleNr) }, 750);
                $('#found').append(icons[nr] + ' ');
            }
            else {
                setTimeout(function () { flip(nr, visibleNr) }, 1000);
            }
            counter++;
            $('#attempts').html(counter);
            visible = false;
        }
    }
}

function hideCards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');

    pairsLeft--;
    if (pairsLeft == 0) {
        $('#container').html('<h1 style="font-size: 30px;">BRAVO<br>Done in ' + counter + ' turns</h1>');
    }
    lock = false;
    $('#success').html(pairsLeft);
}

Array.prototype.randomize = function () {
    var i = this.length, j, temp;
    while (--i) {
        j = Math.floor(Math.random() * (i - 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
}

function flip(nr1, nr2) {
    $('#c' + nr1).css('background', '#209781');
    $('#c' + nr1).addClass('item');
    $('#c' + nr1).removeClass('itemA');

    $('#c' + nr2).css('background', '#209781');
    $('#c' + nr2).addClass('item');
    $('#c' + nr2).removeClass('itemA');

    lock = false;
}