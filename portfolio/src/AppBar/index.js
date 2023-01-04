import "./style.css"
import React from "react";

function AppBar(){
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light px-3 py-2">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"
                />
              </svg><span className="sr-only"></span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#about">Sobre</a>
              </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#toolbox">Habilidades</a>
            </li>

            <li className="nav-item">
                <a className="nav-link " href="#contact">Contato</a>
              </li>
          </ul>
          
        </div>
      </nav>

    );
}


export default AppBar;