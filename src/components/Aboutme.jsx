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
                                    Full Stack Developer,
                                </span>

                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad voluptate quos corporis, dolorem aliquam alias, reiciendis quo ipsam adipisci nam odit sint sit quod velit culpa praesentium numquam officiis omnis.
                                <p className='container-infoabout'> <span className='info-about'> <i className="fa-solid fa-phone fa-sm"></i>  +593 992444232 </span></p>
                                <p className='container-infoabout'><span className='info-about'> <i className="fa-solid fa-location-dot fa-lg"></i> Ecuador</span></p>
                                <p className='container-infoabout'><span className='info-about'> <i className="fa-solid fa-envelope fa-sm"></i> martinezgilersunny@gmail.com </span></p>
                                <p className='container-infoabout'> <span className='info-about'> <i className="fa-solid fa-language fa-sm"></i> English B1, Spanish</span></p>

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