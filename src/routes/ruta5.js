/*
Pepa quiere que mediante este RegEx:
/[contraseñadepepabiensegura]+[1-9]\w+/g
Se comprueben 3 strings distintos, y envíe solamente el que coincide, es
decir: Que se vea por pantalla la contraseña que concuerda con esa
expresión regular.
*/

// Fallaba usando \w+/g

const express = require('express');
const router = express.Router();

let regex = new RegExp('[contraseñadepepabiensegura]+[1-9]');

let contraseñas = ["contraseña", "contraseñadepepabiensegura1", "contraseñadepepabiensegura"]

//Función que recibe como parametro el array de contraseñas para validarlas conla expresión regular dada.
const validatePass = (contraseñas) => {
    let validPass = ""
    contraseñas.forEach(pass => {
        if (regex.test(pass)) {
            validPass = pass
        }
    });
    return validPass
}
// Se recorre el array de contraseñas y por cada una la validamos contra la expresión regular. En caso de ser valida la guardamos en la variable validPass.

router.get("/ruta5", (req, res) => {
    res.send(validatePass(contraseñas))
})

module.exports = router