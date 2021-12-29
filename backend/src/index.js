//Se requieren y usan las dependencias que se instalaron
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

require('./database')

const app = express()
app.use(morgan('dev'))

app.use(express.json()); 
//application/x-www-form-urlencoded para que la db reciba ese tipo de formato
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origen: '*' }))

//Rutas
app.use('/user', require('./routes/User.route'))
/app.use('/question', require('./routes/Question.route'))

//Puerto
app.set('puerto', process.env.PORT || 4000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});