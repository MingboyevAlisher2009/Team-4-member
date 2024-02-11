import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error.message);
        }
    };


    return (
        <main>
            <div className="contact-container">
            <div className="contact-hover-effect"></div>
                <div className="contact-form">
                    <h1 className='text-3xl ml-24 '>Contact</h1>
                    <form className='mt-20 pl-3'>
                        <label className='inline-block text-2xl'>Email</label>
                        <input className='contact-input block' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor='messege' className='inline-block text-2xl mt-10'>Message</label>
                        <input id='messege' className='contact-input block' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />

                        <button onClick={(e) => handleSubmit(e)} className='btn text-xl mt-14 rounded-3xl py-3 text-white'>Send</button>
                    </form>
                </div>
                <div className="or">
                    <span style={{ width: '.07em' }} className='or-line block h-32 ml-3 bg-black'></span>
                    <p className='or-text my-5 text-black'>OR</p>
                    <span style={{ width: '.07em' }} className='or-line block h-32 ml-3 bg-black'></span>
                </div>
                <div className="contact-info">
                    <div style={{ background: '#D9D9D9' }} className="contact-instagram p-6 rounded-full">
                        <Link>
                            <img width="48" height="48" src="https://img.icons8.com/ios-glyphs/48/instagram-new.png" alt="instagram-new" />
                        </Link>
                    </div>
                    <div style={{ background: '#D9D9D9' }} className="contact-telegram mt-10 p-6 rounded-full">
                        <Link>
                            <img width="48" height="48" src="https://img.icons8.com/material-rounded/48/telegram-app.png" alt="telegram-app" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Contact;