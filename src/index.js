const express = require('express');
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");


const app = express()

// Imports de las rutas
const ruta1Router = require("./routes/ruta1.js")
const ruta2Router = require("./routes/ruta2.js")
const ruta3Router = require("./routes/ruta3.js")
const ruta4Router = require("./routes/ruta4.js")
const ruta5Router = require("./routes/ruta5.js")


app.set('port', process.env.PORT || 3000)
app.use(morgan("tiny"))
app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.json())

app.use(ruta1Router)
app.use(ruta2Router)
app.use(ruta3Router)
app.use(ruta4Router)
app.use(ruta5Router)


// app.use((req,res)=>{
//     res.status(404).send("Pagina inexistente");
// })

app.listen(app.get('port'), () =>{
    console.log("Servidor en el puerto 3000")
})