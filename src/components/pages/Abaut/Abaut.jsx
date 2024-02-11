import React from 'react'

import './abaut.css';
import Footer from '../../footer/Footer';



// img
import img1 from '../../../img/photo_2024-02-03_09-47-36.jpg';
import img2 from '../../../img/photo_2024-02-03_09-47-31.jpg';
import img3 from '../../../img/photo_2024-02-03_09-50-56.jpg';
import img4 from '../../../img/photo_2024-02-03_09-50-51.jpg';


// import required modules
import Navbar from '../../nabar/Navbar';
import Control from '../../../controls/Control';

function Abaut() {
  const props = 'Buyurtma berish'
  const link = '/prodact'
  return (
    <>
      <header className="about-container">
        <Navbar props={props} link={link} />
      </header>
      <section className='px-10'>
        <div className="user-card mt-16">
          <div className="user-image">
            <img className='w-96 h-96 user-img bg-cover bg-center rounded-3xl inline' src={img1} alt="" />
          </div>
          <div className="user-info w-1/2 ml-20">
            <h1 className='inline text-5xl '>Alisher</h1>
            <div className="user-bio mt-14">
              <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis optio placeat temporibus possimus animi rem quia quisquam laborum, totam reprehenderit illo minus, aspernatur exercitationem laboriosam iusto error nulla nemo? At repellat vero vel cupiditate neque cumque eum accusamus, eveniet voluptate ullam ea architecto animi qui dolore aliquid dolorem voluptas asperiores est iure fugit quisquam? Veritatis vero eum quidem facere?</p>
            </div>

          </div>
          <div className="user-programming absolute bottom-10 right-20">
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/html-5--v1.png" alt="html-5--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/css3.png" alt="css3" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/javascript--v1.png" alt="javascript--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/ios/50/bootstrap.png" alt="bootstrap" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/tailwindcss.png" alt="tailwindcss" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/react-native.png" alt="react-native" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/redux.png" alt="redux" /></div>
          </div>
        </div>
        <div className="user-card mt-14">
          <div className="user-image">
            <img className='w-96 h-96 user-img rounded-3xl inline' src={img2} alt="" />
          </div>
          <div className="user-info w-1/2 ml-20">
            <h1 className='inline text-5xl '>Shohjahon</h1>
            <div className="user-bio mt-14">
              <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis optio placeat temporibus possimus animi rem quia quisquam laborum, totam reprehenderit illo minus, aspernatur exercitationem laboriosam iusto error nulla nemo? At repellat vero vel cupiditate neque cumque eum accusamus, eveniet voluptate ullam ea architecto animi qui dolore aliquid dolorem voluptas asperiores est iure fugit quisquam? Veritatis vero eum quidem facere?</p>
            </div>
          </div>
          <div className="user-programming absolute bottom-10 right-20">
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/html-5--v1.png" alt="html-5--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/css3.png" alt="css3" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/javascript--v1.png" alt="javascript--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/ios/50/bootstrap.png" alt="bootstrap" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/react-native.png" alt="react-native" /></div>
          </div>
        </div>
        <div className="user-card mt-14">
          <div className="user-image">
            <img className='w-96 h-96 user-img rounded-3xl inline' src={img3} alt="" />
          </div>
          <div className="user-info w-1/2 ml-20">
            <h1 className='inline text-5xl '>Mustafo</h1>
            <div className="user-bio mt-14">
              <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis optio placeat temporibus possimus animi rem quia quisquam laborum, totam reprehenderit illo minus, aspernatur exercitationem laboriosam iusto error nulla nemo? At repellat vero vel cupiditate neque cumque eum accusamus, eveniet voluptate ullam ea architecto animi qui dolore aliquid dolorem voluptas asperiores est iure fugit quisquam? Veritatis vero eum quidem facere?</p>
            </div>
          </div>
          <div className="user-programming absolute bottom-10 right-20">
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/html-5--v1.png" alt="html-5--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/css3.png" alt="css3" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/javascript--v1.png" alt="javascript--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/ios/50/bootstrap.png" alt="bootstrap" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/react-native.png" alt="react-native" /></div>
          </div>
        </div>
        <div className="user-card mt-14">
          <div className="user-image">
            <img className='w-96 h-96 user-img rounded-3xl inline' src={img4} alt="" />
          </div>
          <div className="user-info w-1/2 ml-20">
            <h1 className='inline text-5xl '>Jonibek</h1>
            <div className="user-bio mt-14">
              <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis optio placeat temporibus possimus animi rem quia quisquam laborum, totam reprehenderit illo minus, aspernatur exercitationem laboriosam iusto error nulla nemo? At repellat vero vel cupiditate neque cumque eum accusamus, eveniet voluptate ullam ea architecto animi qui dolore aliquid dolorem voluptas asperiores est iure fugit quisquam? Veritatis vero eum quidem facere?</p>
            </div>
          </div>
          <div className="user-programming absolute bottom-10 right-20">
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/html-5--v1.png" alt="html-5--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/css3.png" alt="css3" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/javascript--v1.png" alt="javascript--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/ios/50/bootstrap.png" alt="bootstrap" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/react-native.png" alt="react-native" /></div>
          </div>
        </div>
        <div className="user-card mt-14">
          <div className="user-image">
            <img className='w-96 h-96 user-img rounded-3xl inline' src={img4} alt="" />
          </div>
          <div className="user-info w-1/2 ml-20">
            <h1 className='inline text-5xl '>Oyqiz</h1>
            <div className="user-bio mt-14">
              <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis optio placeat temporibus possimus animi rem quia quisquam laborum, totam reprehenderit illo minus, aspernatur exercitationem laboriosam iusto error nulla nemo? At repellat vero vel cupiditate neque cumque eum accusamus, eveniet voluptate ullam ea architecto animi qui dolore aliquid dolorem voluptas asperiores est iure fugit quisquam? Veritatis vero eum quidem facere?</p>
            </div>
          </div>
          <div className="user-programming absolute bottom-10 right-20">
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/html-5--v1.png" alt="html-5--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/css3.png" alt="css3" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/color/40/javascript--v1.png" alt="javascript--v1" /></div>
            <div><img width="40" height="40" src="https://img.icons8.com/ios/50/bootstrap.png" alt="bootstrap" /></div>
            <div><img width="40" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" /></div>
          </div>
        </div>
      </section>
      <Control/>
      <Footer />
    </>
  )
}

export default Abaut