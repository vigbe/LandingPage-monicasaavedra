import React from 'react'
import {Link} from "react-router-dom"

function ContactUsPage({mailto}) {
  return (
    <div className='contactUsPage'>
        <div className='area1'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis </p>
        <form>
            <input type="text" placeholder='Your full name'></input>
            <input type="text" placeholder='Your email address'></input>
            <textarea type="textArea" placeholder="Write a note about your request"></textarea>
            <button type='submit'>Send</button>
        </form>
        </div>

        <div className='area2'>
            <div>
                <h2>Escribenos</h2>
                <div>
                    <img src="/icon/mail.png" alt="mail"></img>
                    <a href="mailto:contacto@monicasaavedra">contacto@monicasaavedra</a>
                </div>
                <div>
                <img src="/icon/phone.png" alt="phone"></img>
                <p>+56 9 8448 6911</p>
                </div>
            </div>
            <div>
                <h2>Ciudades</h2>
                <div>
                    <img src="/icon/location.png" alt="location"></img>
                    <p>Trabajamos en Santiago</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactUsPage