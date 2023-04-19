import React from 'react';
import sunny from '../assets/IMG_20230402_220854.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutme = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const navigate = useNavigate();
    const skill = () => {
        navigate("/skill")
    }
    return (
        <div className='aboutme-container' id='about' >
            <div className='hey2'>
                <div className='aboutme2-container'>
              

                    <div data-aos="flip-left" className='info'>
                        <div className='aboutp-container'>
                            <p className='aboutMe'>

                                <span  className='aboutmeh1'>
                                   <button onClick={skill} className='btn-skill'></button>
                                   Desarrolladora Full Stack,
                                </span>
                                
                                 {' '} {' '}
                                La programación es uno de los aspectos de mi vida que más me apasiona, me gusta porque es algo que me permite aprender algo nuevo cada día, otra cosa muy importante es que la programación me ha ayudado a aprender lo importante que es el trabajo en equipo y todo el aprendizaje que puede traer consigo, me considero una persona que puede llegar a ser muy perfeccionista y siempre trato de aprender algo nuevo y así poder crecer tanto en lo profesional como en lo personal
                            </p>
                        </div>
                        <div data-aos="flip-left" className='foto-about'>
                            <img src={sunny} className='foto' alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Aboutme;