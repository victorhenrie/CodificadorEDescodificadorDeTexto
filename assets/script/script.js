const $cryptoButton = document.querySelector('.crypton-button');
const $decryptionButton = document.querySelector('.decryption-button');
const $copyButton = document.querySelector('.container__text-output--face-button')
var $showResult = document.querySelector('#text-back-face');
var $textToCrypto = document.querySelector('#textarea');
var $missingMensage = document.querySelector('.front-face');
var $resultMensage = document.querySelector('.back-face');
var copyText = '';


function crypto(text) {
    var alphabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var newText = "";
    for (var i = 0; i < text.length; i++) {
        for (var f = 0; f < alphabet.length; f++) {
             if (text[i] == alphabet[52]){
                newText += "Σ";
                break;
            } else if (text[i] == alphabet[f]) {
                var nova = (f + 15) % 52;
                newText += alphabet[nova];
                break;
            } else if (f == 52) {
                newText += text[i];
                break;
            }
        }
    }
    return newText;
}

function decryption(text) {
    var alphabet = [' ','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var newText = "";
    for (var i = 0; i < text.length; i++) {
        for (var f = 0; f < alphabet.length; f++) {
            if (text[i] == "Σ"){
                newText += "z";
                break;
            } else if (text[i] == alphabet[f]) {
                var nova = (f - 15);
                if (nova < 0){
                    nova = 52 + (nova);
                }
                newText += alphabet[nova];
                break;
            } else if (f == 52) {
                newText += text[i];
                break;
            }
        }
    }
    return newText;
}

$cryptoButton.addEventListener('click', function () {
    if($textToCrypto.value != ""){
        $missingMensage.style.display = 'none';
        $resultMensage.style.display = 'flex';
        $showResult.innerHTML = crypto($textToCrypto.value)
        copyText = crypto($textToCrypto.value)

    }else if($textToCrypto.value == ""){
        $missingMensage.style.display = 'flex';
        $resultMensage.style.display = 'none';
    }
})

$decryptionButton.addEventListener('click', function () {
    if($textToCrypto.value != ""){
        $missingMensage.style.display = 'none';
        $resultMensage.style.display = 'flex';
        $showResult.innerHTML = decryption($textToCrypto.value);
        copyText = decryption($textToCrypto.value);
    }else if($textToCrypto.value == ""){
        $missingMensage.style.display = 'flex';
        $resultMensage.style.display = 'none';
    }
})

$copyButton.addEventListener('click', function(){
    
    navigator.clipboard.writeText(copyText);
    $copyButton.value = "Copiado";
})
