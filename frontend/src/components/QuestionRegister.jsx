import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


export default function QuestionRegister() {

    const [pregunta, setPregunta] = useState('')
    const [respuesta1, setRespuesta1] = useState('')
    const [respuesta2, setRespuesta2] = useState('')
    const [respuesta3, setRespuesta3] = useState('')
    const [respuesta4, setRespuesta4] = useState('')
    const [categoria, setCategoria] = useState('')
    const [correcta, setCorrecta] = useState('')
    const [premio, setPremio] = useState('')
    const [preguntasPorCategoria, setPreguntasPorCategoria] = useState([])

    useEffect(() => {
        obtenerCantidadPreguntas()
    }, []);


    const obtenerCantidadPreguntas = async () => {
        var a = []
        for (var i = 1; i <= 5; i++) {
            const respuesta = await Axios.get('/question/preguntasPorCategoria/' + i)
            // console.log(respuesta.data.length)
            a.push((respuesta.data))
        }
        // console.log(a)
        setPreguntasPorCategoria(a)
    }


    const registrar = async (e) => {
        // e.preventDefault();
        const question = {
            pregunta,
            respuesta1,
            respuesta2,
            respuesta3,
            respuesta4,
            categoria,
            correcta,
            premio
        }
        const respuesta = await Axios.post('/question/crear', question);
        // console.log(respuesta);
        const mensaje = respuesta.data.mensaje
        if (mensaje !== 'Pregunta almacenada con éxito') {
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }

        else {
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }
        obtenerCantidadPreguntas()
    }

    const salir = async () => {
        window.location.href = '/'
    }

    return (
        <div className="container mt-4">
            <div className="row">

                <div className="col-md-6  mx-auto">
                    <div className="card">
                        <div className="container text-center fa-5x">
                            <i className="fas fa-question"></i>
                        </div>

                        <div className="card-header text-center ">
                            <h4>Crear pregunta</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registrar} >

                                <div className='form-group'>
                                    <label>Pregunta</label>
                                    <input type="textarea" className='form-control' autoFocus required onChange={(e) => setPregunta(e.target.value)} />

                                </div>

                                <div className='form-group'>
                                    <label>Respuesta 1</label>
                                    <input type="text" className='form-control' required onChange={(e) => setRespuesta1(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label>Respuesta 2</label>
                                    <input type="text" className='form-control' required onChange={(e) => setRespuesta2(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label>Respuesta 3</label>
                                    <input type="text" className='form-control' required onChange={(e) => setRespuesta3(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label>Respuesta 4</label>
                                    <input type="text" className='form-control' required onChange={(e) => setRespuesta4(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label>Categoría</label>
                                    <input type="number" className='form-control' required onChange={(e) => setCategoria(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label>Respuesta correcta</label>
                                    <input type="number" className='form-control' required onChange={(e) => setCorrecta(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label>Premio</label>
                                    <input type="number" className='form-control' required onChange={(e) => setPremio(e.target.value)} />
                                </div>

                                <input type="submit" value="GUARDAR" className='btn btn-primary  btn-block' />

                            </form>
                            <Link type="button" className="btn btn-danger btn-block" onClick={() => salir()} to="/">VOLVER</Link>

                        </div>

                    </div>

                </div>


                <div className="col-md-4 mx-auto">
                    <div className="card">
                        <table className="table table-responsive-sm table-striped">
                            <thead className='thead-dark'>
                                <tr>
                                    <th className='text-center' scope="col">Categoría</th>
                                    <th className='text-center' scope="col">Número de preguntas</th>
                                </tr>
                            </thead>

                            <tbody>
                                {preguntasPorCategoria.map((numeroPreguntas, i) => (
                                    <tr key={i}>
                                        <td className='text-center'>{i + 1}</td>
                                        <td className='text-center'>{numeroPreguntas.length}</td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    )
}
