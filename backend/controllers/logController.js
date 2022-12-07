const Log = require('../models/logModel')

//create log
const createLog = async (req, res) => {
    const { type, description } = req.body

    try {
        const log = await Log.create({type, description})
        res.status(200).json(log)
    } catch(err) {
        res.status(400).json({error: err.message})
    }

    res.json( {msg: 'hello'} )
}

module.exports = {
    createLog
}
