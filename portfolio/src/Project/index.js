import "./style.css";
import PokedexPng from "../img/pokedex.png";
import React from "react";


function Projeto(props) {
    return (
        <div className="projeto">
            {props.render ? (
                <>
                <h4 className="name">Pokedex</h4>

                <div className="habilidades">
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>bootstrap</p>
                </div>
                <img src={PokedexPng} />
                <div>
                    <a href="https://leticiatrindade.github.io/Pokedex--DIO/" target="_blank"><button className="buttonGithub">Visualizar</button></a>
                    <a href="https://github.com/LeticiaTrindade/Pokedex--DIO" target="_blank"><button className="buttonGithub">Github</button></a>
                </div>
                </>
            ) : (<>
            Em Breve</>)}
            
        </div>
    );
}

export default Projeto;