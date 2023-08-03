const express = require("express")

const OderRoutes = express.Router()

const OderController = require('../Controller/OderController')


OderRoutes.get("/", OderController.getfrontapage)
OderRoutes.get("/getOder-data", OderController.getOderData)
OderRoutes.post("/postOder-data", OderController.postOderData)
OderRoutes.delete("/delete/:oderID", OderController.deleteOderdata)

module.exports=OderRoutes