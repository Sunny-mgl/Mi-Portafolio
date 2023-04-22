import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contactme = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8myhvrt', 'template_t121ypv', e.target,'ds6IYLZuDAqL1-MDp')
      .then((result) => {
        alert ('The mail has been sent successfully')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='contact-container'  ref={form} onSubmit={sendEmail} >
            <div className='hey5'>
                <div className='contact2-container'>
                    <form className="form">
                        <h2>Contact Me</h2>
                        {/* <h1 className='form-name'>Contac Me</h1>
                        <input type="text" className='form_input' placeholder='Nombre:'/>
                        <input type="email"  className='form_input' placeholder='Email:'/>
                        <textarea  className='form_input_textarea' placeholder='Mensaje:'></textarea> */}

                        <div className='names'>

                            <div className='name1'>

                                <label htmlFor="nombre"> <i className="fa-solid fa-user fa-lg"></i> First Name:</label>
                                <input type="text"
                                    placeholder='First Name'
                                    name='nombre'
                                />
                            </div>
                            <div className='name'>
                                <label htmlFor="nombres">Last Name:</label>
                                <input type="text"
                                    placeholder='Last Name'
                                    name='nombres'
                                />
                            </div>

                        </div>

                        <div className='emails'>

                            <label htmlFor="email"> <i className="fa-solid fa-envelope fa-lg"></i> Email:</label>
                            <input type="email"
                                placeholder='Email'
                             name='email'
                            />
                        </div>

                        <div className='messages'>

                            <label htmlFor="message">  <i className="fa-solid fa-message fa-lg"></i>Message:</label>
                            <textarea name="message" id="message" cols="30" rows="5" placeholder='Write a message'></textarea>
                        </div>

                        <input type="submit" value="Send" className='form1' id='button' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactme;