import "./style.css";
import Projeto from "../Project";
import React from "react";

function Portfolio(){
    return(
        
    <section id="portfolio">
    <h4>Confira meus trabalhos </h4>
    <ol className="projetos">

            {[true, false, false].map((val, i) => {
                return (
                <li key={i}><Projeto render={val}/></li>);
            })}
    </ol>
    </section>
    )
}

export default Portfolio;