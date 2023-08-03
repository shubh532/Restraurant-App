const express = require("express")
const cors =require('cors')

const app = express()

const BodyParser = require("body-parser")

const OdrSequelize = require("./Util/Database")
const Routes = require('./Routes/OderRoute')

app.use(cors())
app.use(BodyParser.json())

app.use(Routes)


OdrSequelize.sync({ force: true })
    .then(() => {
        app.listen(4000, () => {
            console.log("click on http://localhost:4000")
        })
    })
    .catch(err => console.log(err, "this err from App.js file"))
