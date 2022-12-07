require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const logRoutes = require('./routes/logs')
const PORT = process.env.PORT || 8000;

//express app
const app = express()

//middleware
app.use(express.json());
/*app.use((req, res, next) => {
    next()
});*/

//routes
app.use('/logs', logRoutes)

//mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for request if db connection is success
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})
.catch((err) => { console.log(err) })

