import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const about = () => {
        navigate("/about")
    }
    return (
        <div className='home-container'>
            <div className='hey'>
                <div className='home-container2'>
                    <div className='btn-container'>
                        <button className='btn' onClick={about} ></button>
                    </div>
                    <h1 className='bienvenidos-name'>
                        {/* <span className='bienvenidos-span'> HOLA! </span> */}
                        I'm Sunny Martinez Giler
                    </h1>
                    <div className='text'>
                        <h1 className='bienvenidos'> Welcome</h1>
                    </div>

                    <div className='social'>
                        <a href="https://www.linkedin.com/in/sunny-martinez-59597125a/" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin fa-beat fa-xl"></i></a>
                         <a href="file:///C:/Users/USUARIO/Downloads/CV%20Sunny.pdf"  target='_blank' className='cv'><i className="fa-regular fa-file-lines fa-beat fa-xl"></i></a>
                        <a href="https://github.com/Sunny-mgl" target='_blank' className='git'><i className="fa-brands fa-github fa-beat fa-xl"></i></a>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;