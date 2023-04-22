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

                            <div data-aos="flip-left" className='container-responsive'>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="https://resilient-sawine-5bd33c.netlify.app/" target='_blank'>
                                            <figure>
                                                <img src={ecommerce} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Ecommerce</h1>
                                                    <hr />
                                                    <p>
                                                        Features a loading screen, a product finder, and add-to-cart functionality
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="https://shimmering-salmiakki-66b7cb.netlify.app/" target='_blank'>
                                            <figure>
                                                <img src={weather} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Weather App</h1>
                                                    <hr />
                                                    <p>
                                                        This is an application that allows us to know the weather wherever you are
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="https://fascinating-froyo-266424.netlify.app/" target='_blank'>
                                            <figure>
                                                <img src={frases} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Phrases</h1>
                                                    <hr />
                                                    <p>
                                                        This project was one of the first to develop with React, you can see different sentences and depending on the sentence the color can change
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="https://cool-melomakarona-fc2140.netlify.app/" target='_blank'>
                                            <figure>
                                                <img src={wiki} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Rick and Morty</h1>
                                                    <hr />
                                                    <p>
                                                        It is a wikipedia that helps us search through the ID and see the different characters in the series
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="https://bespoke-florentine-31ac07.netlify.app/" target='_blank'>
                                            <figure>
                                                <img src={portafolio} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>Portafolio</h1>
                                                    <hr />
                                                    <p>
                                                        This portfolio was designed only with HTML and CSS, it is a model or example of what a portfolio should have
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-project'>
                                    <div className='container-card'>
                                        <a href="https://lovely-kulfi-22499d.netlify.app/" target='_blank'>
                                            <figure>
                                                <img src={poke} className='card-imges' alt="" />
                                                <figcaption className='back'>
                                                    <h1>PokéDex</h1>
                                                    <hr />
                                                    <p>
                                                        It allows us to search for the different pokemons either by ID or by name and this leads us to a section where
                                                        we find more details about each pokemon
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