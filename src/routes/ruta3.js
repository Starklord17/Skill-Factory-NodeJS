/*
Pepa quiere que esta ruta haga un fetch hacia una api externa, y que
nuestra ruta devuelva el primer valor de lo que hayamos obtenido
(Mediante fetch).
*/
const express = require('express');
const router = express.Router()
const axios = require("axios")
//import axios from "axios"

// El fetch esta comentado porque intente usar esa libreria xq no me anduvo (tengo win7).

// Variable para guardar el resultado de la request hacia la API de weather.
let temperature = {}
const getWeather = async (city) => {
    //fetch(`https://goweather.herokuapp.com/weather/${city}`, {method: 'GET'})
    // fetch("https://goweather.herokuapp.com/weather/mdq")
    // .then(response => console.log(response))
    // .catch(error => console.log(error))

    // Ciudad MDQ hardcodeada (Es el parametro que recibe la API para buscar el clima de una ciudad en especifico)
    await axios.get("https://goweather.herokuapp.com/weather/mdq")
    // Si la petición fue exitosa va a guardar la respuesta en la variable de temperature. (Si hubo algún error sale por el catch)
    .then(response => {
        temperature = response.data
    })
    .catch(error => console.log(error))
}

getWeather()

router.get("/ruta3", (req, res) => {
    res.json(temperature)
})

module.exports = router;