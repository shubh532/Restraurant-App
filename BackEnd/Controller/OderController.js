const OderData = require('../Model/OderModel')

exports.getOderData = async (req, res, next) => {
    const Data = await OderData.findAll()
    res.status(201).json({ OderData: Data })
    res.end()
}

exports.getfrontapage = (req, res, next) => {
    res.send("working fine from / route")
}

exports.postOderData = async (req, res, next) => {
    const price = req.body.Price
    const dish = req.body.Dish
    const table = req.body.Table
    try {
        console.log(price, dish," price, dish")
        const Data = await OderData.create({
            price: price,
            dish: dish,
            table:table
        })
        res.status(201).json({ OderData: Data })
        res.end()
    } catch (err) {
        console.log(err)
    }

}

exports.deleteOderdata = async (req, res, next) => {
    try {
        const oderID = req.params.oderID
        const oderData = await OderData.findOne({ where: { id: oderID } })
        oderData.destroy()
        res.status(200).json({ message: "Oder delete" })
    } catch (err) {
        console.log(err)
    }
}