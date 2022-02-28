const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://jaxcoder:JaxCodes1@development.u48nl.mongodb.net/talentdao?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db