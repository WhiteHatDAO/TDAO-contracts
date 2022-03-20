const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://jaxcoder:JaxCodes1@development.u48nl.mongodb.net/talentdao?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

// mongoose
//     .connect('mongodb+srv://JunielLiu:donotaccept@cluster0.vgnpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

const connection = mongoose.connection
let collections = []

connection.on('open', function(ref) {
    console.log('Connected to mongo server.');
    connection.db.listCollections().toArray(function(err, names) {
        collections = names;
    })
})

module.exports = {
    connection,
    collections
}
