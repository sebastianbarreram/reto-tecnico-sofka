const mongoose = require('mongoose');
const schema = mongoose.Schema;

var questionSchema = new schema({
    pregunta: {
        type: String
    },
    respuesta1:{
        type: String,
    },
    respuesta2:{
        type: String,
    },
    respuesta3:{
        type: String,
    },
    respuesta4:{
        type: String,
    },
    categoria:{
        type: Number,
    },
    correcta:{
        type: Number,
    },
    premio:{
        type: Number
    }

},{
    collection: 'Questions'
});

module.exports = mongoose.model('Question', questionSchema);