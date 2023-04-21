import React from 'react';
import reactImg from '../assets/React.png'
import node from '../assets/nodejs.png'
import js from '../assets/js.png'
import postgres from '../assets/postgre.png'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import { useNavigate } from 'react-router-dom';

const Skills = () => {
    const navigate = useNavigate();
    const contsct = () => {
        navigate("/project")
    }
    return (
        <div className='skill-container' id='skill'>
            <div className='hey3'>
                <div className='skill2-container'>
                    <div className='skillh1'>
                        <h1 className='myskillh1'> <button onClick={contsct} className='contact-btn'></button> </h1>
                    </div>
                    <article data-aos="flip-left" className='skill'>
                        {/* <img src={back} className='new' alt="" /> */}
                        <div  className='icons'>

                            <div className='img-react'>
                                <img src={reactImg} className='icons2' alt="" />
                                <h1>React</h1>
                            </div>
                            <div className='img-node'>
                                <img src={node} className='icons2' alt="" />
                                <h1>Node</h1>
                            </div>
                            <div className='img-js'>
                                <img src={js} className='icons2' alt="" />
                                <h1>Javascript</h1>
                            </div>
                            <div className='img-post'>
                                <img src={postgres} className='icons2' alt="" />
                                <h1>Postgres</h1>
                            </div>
                            <div className='img-html'>
                                <img src={html} className='icons2' alt="" />
                                <h1>HTML</h1>
                            </div>
                            <div className='img-css'>
                                <img src={css} className='icons2' alt="" />
                                <h1>CSS</h1>

                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Skills;