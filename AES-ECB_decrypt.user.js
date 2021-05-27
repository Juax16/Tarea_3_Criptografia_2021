// ==UserScript==
// @name         AES-ECB decrypt from .html
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script para la tercera tarea de Criptografía y seguridad en redes.
// @author       Joaquín Lagos M.
// @updateURL    https://github.com/Juax16/Tarea_3_Criptografia_2021/blob/main/AES-ECB_decrypt.user.js
// @downloadURL  https://github.com/Juax16/Tarea_3_Criptografia_2021/blob/main/AES-ECB_decrypt.user.js
// @match        https://juax16.github.io/Tarea_3_Criptografia_2021/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js


// ==/UserScript==

(function() {
    'use strict';
    // Se recupera el mensaje cifrado del .html
    var cipher = document.getElementsByClassName('AES')[0].id;
    console.log(cipher);

    // Se recupera la llave de cifrado del .html
    var key = document.getElementsByClassName('key')[0].id;
    console.log(key);

    // Crea un WordArray de la llave decodificando desde utf-8
    var wArrayKey = CryptoJS.enc.Utf8.parse(key);

    // Crea un WordArray del mensaje cifrado decodificando desde base64
    var wArrayCipher = CryptoJS.enc.Base64.parse(cipher)

    var textoPlano = CryptoJS.AES.decrypt({ciphertext: wArrayCipher}, wArrayKey,{
        mode: CryptoJS.mode.ECB
    })
    console.log(textoPlano.toString(CryptoJS.enc.Utf8));

})();
