import './home.css'
import Navbar from '../nabar/Navbar'
import Card from '../cards/Card'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

function Home() {
    return (
        <>
            <header className='px-5'>
                <Navbar/>
            </header>
            <section>
                <h1 className='text-3xl font-bold text-white text-center my-5'>Our Team</h1>
                <Card/>
                <Contact/>
                <Footer/>
            </section>
        </>
    )
}

export default Home