var $textToCrypto = document.querySelector('#textarea');
const $cryptoButton = document.querySelector('.crypton-button');
const $decryptionButton = document.querySelector('.decryption-button');
var $showResult = document.querySelector('#text-back-face');


function crypto(text) {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var space = [" "];
    var newText = "";
    for (var i = 0; i < text.length; i++) {
        for (var f = 0; f < alphabet.length; f++) {
            if (text[i] == space[0]) {
                newText += space[0];
                break;
            } else if (text[i] == alphabet[f]) {
                var nova = (f + 15) % 51;
                newText += alphabet[nova];
                break;
            } else if (f == 51) {
                newText += text[i];
                break;
            }
        }
    }
    return newText;
}

function decryption(text) {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var space = [" "];
    var newText = "";
    for (var i = 0; i < text.length; i++) {
        for (var f = 0; f < alphabet.length; f++) {
            if (text[i] == space[0]) {
                newText += space[0];
                break;
            } else if (text[i] == alphabet[f]) {
                var nova = (f - 15);
                if (nova < 0){
                    nova = 51 + (nova);
                }
                newText += alphabet[nova];
                break;
            } else if (f == 51) {
                newText += text[i];
                break;
            }
        }
    }
    return newText;
}

$cryptoButton.addEventListener('click', function () {
    if($showResult != undefined){
    $showResult.innerHTML = '<div id="text-face">'+crypto($textToCrypto.value)+'</div>'
    $showResult.classList.remove('front-face');}
})

$decryptionButton.addEventListener('click', function () {
    if($showResult != undefined){
    $showResult.innerHTML = '<div id="text-face">'+decryption($textToCrypto.value)+'</div>'
    $showResult.classList.remove('front-face');}
})