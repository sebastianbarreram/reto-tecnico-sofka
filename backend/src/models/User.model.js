const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userSchema = new schema({
    nombre: {
        type: String
    },
    puntaje:{
        type: Number,
    }
},{
    collection: 'Users'
});

module.exports = mongoose.model('User', userSchema);