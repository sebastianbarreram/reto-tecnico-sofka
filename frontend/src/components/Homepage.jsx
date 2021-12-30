import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import useStyles from './Homepage.style';

export default function Homepage() {
    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    const obtenerUsuarios = async () => {
        sessionStorage.clear();
        const respuesta = await Axios.get('/user/listarUsuarios')
        // console.log(respuesta.data)
        setUsuarios(respuesta.data)
    }


    const iniciar = async (e) => {
        e.preventDefault();
        sessionStorage.setItem('userName', userName)
        sessionStorage.setItem('level',0+1)
        window.location.href = '/game'
    }



    return (
        <>
            <div className={classes.app}>
                <div>
                    <div className="container text-center fa-5x">
                        <i className="fas fa-question"></i>
                    </div>


                    <form onSubmit={iniciar} >
                        <div className='form-group'>
                            <label>Ingrese nombre de usuario</label>
                            <input type="text" className='form-control' autoFocus required onChange={(e) => setUserName(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-success btn-lg btn-block">INICIAR</button>

                        <Link type="button" className="btn btn-warning btn-lg btn-block" to="/config">CONFIGURACIÓN</Link>
                        <Link to="#" className="btn btn-lg btn-primary btn-block" data-toggle="modal" data-target="#ScoreList">
                            HISTORIAL DE USUARIOS
                        </Link>

                    </form>


                </div>

                <div className="modal fade" id='ScoreList'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className='modal-title'>Clasificación</h5>
                                <button className='close' data-dismiss='modal'>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-responsive-lg table-striped">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">NOMBRE</th>
                                            <th scope="col" className='text-center'>PUNTAJE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usuarios.map((usuario, i) => (
                                                <tr key={usuario._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{usuario.nombre}</td>
                                                    <td className='text-center'>{usuario.puntaje}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
