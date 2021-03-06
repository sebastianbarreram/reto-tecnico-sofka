const UserCtrl = {}
const User = require('../models/User.model')

UserCtrl.crearUsuario = async (req, res) => {
    const { nombre, puntaje } = req.body
    const NuevoUsuario = new User({
        nombre,
        puntaje
    })

    await NuevoUsuario.save()
    res.json({
        mensaje: 'Se almacenaron los datos del jugador con éxito',
        nombre: NuevoUsuario.nombre,
        puntaje: NuevoUsuario.puntaje,
    })
}


UserCtrl.listar = async (req, res) => {
    const respuesta = await User.find().sort({puntaje:1})
    res.json(respuesta.reverse())
}

module.exports = UserCtrl