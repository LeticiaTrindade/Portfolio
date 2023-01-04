import "./style.css";
import React from "react";
import profile from "../img/profile2.jpg";

function About() {
    return (
        <>


            <section id="welcome">
                <h1>Letícia Trindade</h1>
                <p>Desenvolvedora FullStack</p>
            </section>

            <section id="about">
                <div>
                    <h4>Sobre mim 🌸</h4>
                    <p>Sou estudante de Computação na Universidade Federal Rural de Pernambuco(UFRPE), tenho técnico completo em Computação Gráfica(IFPE).<br />
                   <br/><br/>
                        Quando não estou codando, passo maior parte do meu tempo livre jogando, vendo animes ou lendo! Fica a vontade para me recomendar algo para ler, jogar ou assistir! </p>
                </div>
                <div><img src={profile} /></div>
            </section>

        </>

    );
}

export default About;