import React from 'react';
import ecommerce from '../assets/ecommerce.png'
import frases from '../assets/frases.png'
import portafolio from '../assets/portafolio.png'
import poke from '../assets/poke.png'
import weather from '../assets/weather.png'
import wiki from '../assets/wiki.png'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const contact = () => {
        navigate("/contact")
    }
    return (
        <div className='project-container' id='project'>
            <div className='hey4'>
                <div className='titleproject' >
                    <h1 className='h1titleproject' onClick={contact}></h1>
                </div> 
               
                <div className='project2-container'>
  <div className='heee'>
                  
                        <div className='container-scroll'>

                            <div className='container-responsive'>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="#">
                                            <figure>
                                                <img src={ecommerce} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Ecommerce</h1>
                                                    <hr />
                                                    <p>Cuenta con una pantalla de carga, un buscador de productos y la funcionalidad de agregar productos al carrito</p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="#">
                                            <figure>
                                                <img src={weather} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Weather App</h1>
                                                    <hr />
                                                    <p>
                                                        Es una app que nos permite saber el estado del clima de cualquier lugar en que te encuentres</p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="#">
                                            <figure>
                                                <img src={frases} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Weather App</h1>
                                                    <hr />
                                                    <p>
                                                        Este proyecto fue uno de los primeros que desarrolle con React, consiste en que puedes ver diferentes frases y dependiendo de la frase puede cambiar el color
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="#">
                                            <figure>
                                                <img src={wiki} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Rick and Morty</h1>
                                                    <hr />
                                                    <p>
                                                        Es una wikipedia que nos ayuda a buscar por medio del ID y ver los diferentes personajes de la serie
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="#">
                                            <figure>
                                                <img src={portafolio} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Portafolio</h1>
                                                    <hr />
                                                    <p>
                                                        Este portafolio fue diseñado unicamente con HTML y CSS, es un modelo o ejemplo de que debe tener un portafolio
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="#">
                                            <figure>
                                                <img src={poke} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>PokéDex</h1>
                                                    <hr />
                                                    <p>
                                                        Nos permite buscar los diferentes pokemones ya sea por ID o por el nombre y esto nos lleva a una sección
                                                        donde encontramos más detalles de cada pokemon
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Projects;