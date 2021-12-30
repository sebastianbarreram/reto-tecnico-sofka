import React, { useEffect, useState } from 'react'
import useStyles from './Homepage.style'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Game() {
    const classes = useStyles();
    var [puntaje, setPuntaje] = useState(0)
    const [pregunta, setPregunta] = useState([])
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState()

    const nombre = sessionStorage.getItem('userName')

    useEffect(() => {
        obtenerPregunta()
    }, [])

    const obtenerPregunta = async () => {
        const buscar = sessionStorage.getItem('level')
        const respuesta = await Axios.get('/question/preguntasPorCategoria/' + buscar)
        const azar = Math.floor(Math.random() * respuesta.data.length)
        // console.log('azar',azar)
        // console.log(respuesta.data)
        setPregunta(respuesta.data[azar])
    }

    const aceptar = () => {
        const buscar = sessionStorage.getItem('level')

        if (respuestaSeleccionada == pregunta.correcta && buscar < 5) {
            Swal.fire({
                icon: 'success',
                title: 'Respuesta correcta',
                text: 'Pasas al siguiente nivel',
                showConfirmButton: false,
                timer: 2000
            })
            sessionStorage.setItem('level', pregunta.categoria + 1)

            setPuntaje(puntaje + pregunta.premio)
            sessionStorage.setItem('score', puntaje + pregunta.premio)

            obtenerPregunta()
        }

        else if (buscar === '5' && respuestaSeleccionada == pregunta.correcta) {
            const a = puntaje + pregunta.premio
            sessionStorage.setItem('score', a)
            setPuntaje(a)
            Swal.fire({
                icon: 'success',
                title: 'Ganaste',
                text: '¡Felicitaciones!',
                showConfirmButton: false,
                timer: 3000
            })
            salir()
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Respuesta equivocada',
                text: 'Tu puntuación es 0',
                showConfirmButton: false,
                timer: 2000
            })
            perder()
        }
    }

    const salir = async () => {
        setPuntaje(sessionStorage.getItem('score'))
        puntaje = puntaje + pregunta.premio
        const usuario = {
            nombre,
            puntaje
        }
        const respuesta = await Axios.post('/user/crear', usuario)
        const mensaje = respuesta.data.mensaje
        if (mensaje === "Se almacenaron los datos del jugador con éxito") {
            window.location.href = '/'
        }
    }

    const perder = async () => {
        puntaje = 0
        const usuario = {
            nombre,
            puntaje
        }
        const respuesta = await Axios.post('/user/crear', usuario)
        const mensaje = respuesta.data.mensaje
        if (mensaje === "Se almacenaron los datos del jugador con éxito") {
            window.location.href = '/'
        }

    }

    const retirarse = async () => {
        const usuario = {
            nombre,
            puntaje
        }
        const respuesta = await Axios.post('/user/crear', usuario)
        const mensaje = respuesta.data.mensaje
        if (mensaje === "Se almacenaron los datos del jugador con éxito") {
            window.location.href = '/'
        }
    }


    return (
        <>

            <div className={classes.app}>
                <h2>
                    Nivel {sessionStorage.getItem('level')}
                </h2>
                <div>
                    Puntos acumulados por {sessionStorage.getItem('userName')} : {puntaje}
                </div>
                <div>Premio pregunta actual: {pregunta.premio} puntos</div>

                <table className="table table-responsive-sm table-striped table-borderless">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col">{pregunta.pregunta}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='text-center'>
                                <input className="form-check-input" type="radio" value={1} name="exampleRadios" onChange={(e) => setRespuestaSeleccionada(e.target.value)} />
                                {pregunta.respuesta1}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <input className="form-check-input" type="radio" value={2} name="exampleRadios" onChange={(e) => setRespuestaSeleccionada(e.target.value)} />
                                {pregunta.respuesta2}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <input className="form-check-input" type="radio" value={3} name="exampleRadios" onChange={(e) => setRespuestaSeleccionada(e.target.value)} />
                                {pregunta.respuesta3}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <input className="form-check-input" type="radio" value={4} name="exampleRadios" onChange={(e) => setRespuestaSeleccionada(e.target.value)} />
                                {pregunta.respuesta4}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center fa-5x'>
                                <button type="button" className="btn btn-success btn-block" onClick={() => aceptar()}>ACEPTAR</button>
                                <Link type="button" className="btn btn-danger btn-block" onClick={() => retirarse()} to="/"> SALIR</Link>
                            </td>
                        </tr>

                    </tbody>
                </table>

                {/* table-borderless */}
            </div>
        </>
    )
}
