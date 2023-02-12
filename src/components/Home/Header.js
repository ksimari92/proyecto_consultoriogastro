import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icons8-veterinarian-96.png'


const Header = ({ handleClickEventLog, handleClickEventHome }) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary header">
            <div className="container-fluid">
                <div>
                <img src={logo} alt="" className='logo' />
                <h4>Consultorio de Gastroenterología Animal</h4>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link className="nav-link " onClick={handleClickEventHome} to='/'>Home</Link>
                            {/* <Link className="nav-link" to='/pacientes'>Pacientes</Link>
                            <Link className="nav-link" to='/turnos'>Turnos</Link>
                            <Link className="nav-link" to='indice'>Indice</Link> */}
                            <Link to='/' onClick={handleClickEventLog} className='btn btn-primary'>Iniciar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header