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
                            <div className='aboutMe'>

                                <span className='aboutmeh1'>
                                    <button onClick={skill} className='btn-skill'></button>
                                    Desarrolladora Full Stack,
                                </span>
                            
                                La programación es uno de los aspectos de mi vida que más me gusta ya que me permite aprender algo nuevo cada día, siempre trato de aprender algo nuevo y así poder crecer tanto en lo profesional como en lo personal
                                <p className='container-infoabout'> <span className='info-about'> <i className="fa-solid fa-phone fa-lg"></i>  +593 992444232 </span></p>
                                <p className='container-infoabout'><span className='info-about'> <i className="fa-solid fa-location-dot fa-lg"></i>  Ecuador </span></p>
                                <p className='container-infoabout'><span className='info-about'> <i className="fa-solid fa-envelope fa-lg"></i> martinezgilersunny@gmail.com </span></p>
                                <p className='container-infoabout'> <span className='info-about'> <i className="fa-solid fa-language fa-lg"></i> English B1, Español</span></p>
                              
                                {' '}
                                
                            </div>
  <br />
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