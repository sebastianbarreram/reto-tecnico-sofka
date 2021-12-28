const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/reto";

// const uri = "mongodb+srv://equipo2p22:equipo2p22@ciclo4-misiontic2022.aqrk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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