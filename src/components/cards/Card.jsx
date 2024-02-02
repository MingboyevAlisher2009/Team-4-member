import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

function Card() {
    return (
        <div className='container-card'>
            <div className='card glass'>
                <div className="card-img">
                    <img src="https://picsum.photos/200/300?random=1" />
                </div>
                <div>
                    <p className='card-title text-white text-2xl relative bottom-20 font-sans'>Alisher</p>
                </div>
                <div className="card-footer">
                    <Link className='relative bottom-10 text-white text-xl hover:underline'>Batafsil</Link>
                </div>
            </div>
            <div className='card glass'>
                <div className="card-img">
                    <img src="https://picsum.photos/200/300?random=2" />
                </div>
                <div>
                    <p className='card-title text-white text-2xl relative bottom-20 font-sans'>Shohjahon</p>
                </div>
                <div className="card-footer">
                    <Link className='relative bottom-10 text-white text-xl hover:underline'>Batafsil</Link>
                </div>
            </div>
            <div className='card glass'>
                <div className="card-img">
                    <img src="https://picsum.photos/200/300?random=3" />
                </div>
                <div>
                    <p className='card-title text-white text-2xl relative bottom-20 font-sans'>Mustafo</p>
                </div>
                <div className="card-footer">
                    <Link className='relative bottom-10 text-white text-xl hover:underline'>Batafsil</Link>
                </div>
            </div>
            <div className='card glass'>
                <div className="card-img">
                    <img src="https://picsum.photos/200/300?random=4" />
                </div>
                <div>
                    <p className='card-title text-white text-2xl relative bottom-20 font-sans'>Jony</p>
                </div>
                <div className="card-footer">
                    <Link className='relative bottom-10 text-white text-xl hover:underline active:underline'>Batafsil</Link>
                </div>
            </div>
        </div>
    )
}

export default Card