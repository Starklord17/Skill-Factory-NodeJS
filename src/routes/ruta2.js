/*
Pepa tiene una lista de compras para cada día de la semana (En este
caso, la tienen que redactar ustedes). Y quiere mediante esta ruta recibir la
lista de cada día que sea par (Teniendo en cuenta que el domingo es el día
0).
*/
const express = require('express');
const router = express.Router()

const compras = [
    {
        id: 0,
        dia: "Domingo",
        lista: ["milanesas", "pure"]
    },
    {
        id: 1,
        dia: "Lunes",
        lista: ["tomate", "lechuga"]
    },
    {
        id: 2,
        dia: "Martes",
        lista: ["pollo", "pera"]
    },
    {
        id: 3,
        dia: "Miercoles",
        lista: ["manzana", "banana"]
    },
    {
        id: 4,
        dia: "Jueves",
        lista: ["chocolate", "leche"]
    },
    {
        id: 5,
        dia: "Viernes",
        lista: ["café", "azucar"]
    },
    {
        id: 6,
        dia: "Sabado",
        lista: ["bistek", "ensalada"]
    }
];

// const mostrarCompras = () => {
//     compras.forEach(element => {
//         console.log(element);
//     });
// }

// Recorrer el array de objetos buscando los dias pares y guardar en la variable pairList la lista de compras de esos dias pares.
const getPairList = () => {
    let pairList = [];
    for (let i = 0; i < compras.length; i++) {
        let par = compras[i].id; 
    
        if ( (par % 2) === 0) {
            if (i == compras.length - 1) {
                compras[i].lista.forEach((element, index) => {
                    if (index == 0) {
                        pairList += `${element}, `
                    } else {
                        pairList += `${element}.`;    
                    }
                })
            }
            compras[i].lista.forEach(( eachElement ) => {
                if (i != compras.length - 1) {
                    pairList += `${eachElement}, `;
                }
            })
        }
    }
    return pairList;
} 
// Formateo de la respuesta para agregar espacios, coma, y punto a la respuesta que damos al usuario final. (Tarea que enrealidad debería hacer el frontend).


router.get("/ruta2",(req,res)=> { 
    res.send(`<h1>${getPairList()}</h1>`)
})

module.exports = router