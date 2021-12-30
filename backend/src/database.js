const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27017/reto";

//el calor de uri puede escribirse en MongoDC Compass para visualizar las collecciones de la base de datos
const uri = "mongodb+srv://retotecnicosofkau:retotecnicosofkau@retotecnicosofkau.vl2ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
    () => {
        console.log("Conectado a DB");
    },
    (err) => {
        console.log(err);
    }
);

module.exports = mongoose;