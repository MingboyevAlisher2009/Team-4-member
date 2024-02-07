import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import img1 from '../../img/photo_2024-02-03_09-47-31.jpg';
import img2 from '../../img/photo_2024-02-03_09-47-36.jpg';
import img3 from '../../img/photo_2024-02-03_09-50-51.jpg';
import img4 from '../../img/photo_2024-02-03_09-50-56.jpg';

function Card() {
    return (
        <>
            <div className='container-card'>
                <div className='card glass'>
                    <div className="hover-effect"></div>
                    <div className="card-img">
                        <img src={img2} />
                    </div>
                    <div>
                        <p className='card-title text-white text-2xl relative bottom-16 mt-4'>Alisher</p>
                    </div>
                    <div className="card-footer">
                        <Link className='relative bottom-7 text-white text-xl hover:underline'>Batafsil</Link>
                    </div>
                </div>
                <div className='card glass'>
                    <div className="hover-effect"></div>

                    <div className="card-img">
                        <img src={img1} />
                    </div>
                    <div>
                        <p className='card-title text-white text-2xl relative bottom-16 mt-4'>Shohjahon</p>
                    </div>
                    <div className="card-footer">
                        <Link className='relative bottom-8 text-white text-xl hover:underline'>Batafsil</Link>
                    </div>
                </div>
                <div className='card glass'>
                    <div className="hover-effect"></div>
                    <div className="card-img">
                        <img src={img4} />
                    </div>
                    <div>
                        <p className='card-title text-white text-2xl relative bottom-16 mt-4'>Mustafo</p>
                    </div>
                    <div className="card-footer">
                        <Link className='relative bottom-7 text-white text-xl hover:underline'>Batafsil</Link>
                    </div>
                </div>
                <div className='card glass'>
                    <div className="hover-effect"></div>
                    <div className="card-img">
                        <img src={img3} />
                    </div>
                    <div>
                        <p className='card-title text-white text-2xl relative bottom-16 mt-4'>Jony</p>
                    </div>
                    <div className="card-footer">
                        <Link className='relative bottom-7 text-white text-xl hover:underline active:underline'>Batafsil</Link>
                    </div>
                </div>
                <div className='card glass'>
                    <div className="hover-effect"></div>
                    <div className="card-img">
                        <img src={img3} />
                    </div>
                    <div>
                        <p className='card-title text-white text-2xl relative bottom-16 mt-4'>Oyqiz</p>
                    </div>
                    <div className="card-footer">
                        <Link className='relative bottom-7  text-white text-xl hover:underline active:underline'>Batafsil</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card