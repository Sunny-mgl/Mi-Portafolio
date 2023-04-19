import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false)

     const navigate = useNavigate()

     const about = () => {
        navigate('/about')
     }

     

    return (
        <div className='navbar'>
            <div className='h1-navbar'>
                <a className='home' href="/">Home</a>
                <div className={`link-navbar ${open && "open"}`} >
                    <div className='back-navbar'>
                        <a href="#/about" className='a-navbar'>About me</a>
                        <a href="#/skills" className='a-navbar'>Skills</a>
                        <a href="#/Proyectos" className='a-navbar'>Proyectos</a>
                        <a href="/" className='a-navbar'>Cv</a>
                        <a href="/" className='a-navbar'>Contact me</a>
                    </div>
                </div>
                <div className={`burger ${open && "open"}`} onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;