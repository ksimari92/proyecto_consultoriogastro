import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1>Consultorio Gastroenterológico</h1>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link " href="#">Home</a>
                            <a className="nav-link" href="#">Pacientes</a>
                            <a className="nav-link" href="#">Turnos</a>
                            <a className="nav-link" href='#'>Indice</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header