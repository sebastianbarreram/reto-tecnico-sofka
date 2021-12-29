const QuestionCtrl = {}
const Question = require('../models/Question.model')

QuestionCtrl.crearPregunta = async (req, res) => {
    const { pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, correcta, premio } = req.body
    const NuevaPregunta = new Question({
        pregunta,
        respuesta1,
        respuesta2,
        respuesta3,
        respuesta4,
        categoria,
        correcta,
        premio
    })

    await NuevaPregunta.save()
    res.json({
        mensaje: 'Pregunta almacenada con éxito',
        id: NuevaPregunta._id,
        pregunta: NuevaPregunta.pregunta,
        respuesta1: NuevaPregunta.respuesta1,
        respuesta2: NuevaPregunta.respuesta2,
        respuesta3: NuevaPregunta.respuesta3,
        respuesta4: NuevaPregunta.respuesta4,
        categoria: NuevaPregunta.categoria,
        correcta: NuevaPregunta.correcta,
        premio: NuevaPregunta.premio,
    })
}


QuestionCtrl.listar = async (req, res) => {
    const respuesta = await Question.find()
    res.json(respuesta)
}

QuestionCtrl.listarId = async (req, res) => {
    const id = req.params.id
    const respuesta = await Question.findById({ _id: id })
    res.json(respuesta)
}

QuestionCtrl.preguntaPorCategoria = async (req,res)=>{
    const categoriaBuscada = req.params.categoria
    const respuesta= await Question.find({categoria:categoriaBuscada})
    res.json(respuesta)
}


QuestionCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Question.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Pregunta eliminada'
    })
}


QuestionCtrl.actualizar = async (req, res) => {
    const id = req.params.id
    await Question.findByIdAndUpdate({ _id: id }, req.body)

    res.json({
        mensaje: 'Pregunta actualizada'
    })
}


module.exports = QuestionCtrl