import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer mt-20'>
            <div className="footer-logo inline-block">
                <h1 className='text-white text-3xl font-bold'>TE4M</h1>
            </div>
            <div className="footer-text absolute mt-8">
                <p className='text-white text-xl'>All rights received. <br /> Hamma huquqlar himoyalangan.</p>
            </div>
            <div className="footer-links inline-block absolute right-20">
                <div className="footer-instagram inline-block bg-gray-100 p-3 rounded-full">
                    <Link>
                        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/40/333333/instagram-new.png" alt="instagram-new" />
                    </Link>
                </div>
                <div className="footer-instagram inline-block ml-10 bg-gray-100 p-3 rounded-full">
                    <Link>
                        <img className='footer-telegram-img' width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/50/333333/telegram-app.png" alt="telegram-app" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

// 
