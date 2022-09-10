/*
Pepa quiere recibir un elemento <h1></h1> que contenga el mensaje “Hola
pepa!”, seguido de un</p> que contenga “Bienvenida a tu servidor bien
piola! :)”
*/

const express = require('express');
const router = express.Router();

router.get("/",(req,res)=> {
    res.send('<div><h1>"Hola pepa! "</h1> <p>"Bienvenida a tu servidor bien piola! :)"</p> </div>')
})

module.exports = router


//https://bobbyhadz.com/blog/react-jsx-expressions-must-have-one-parent-element#:~:text=The%20cause%20of%20the%20%22JSX,same%20level%20of%20a%20function.
//https://codesource.io/fix-jsx-expressions-must-have-one-parent-element/
//https://www.youtube.com/watch?v=EfTRweNnEwE