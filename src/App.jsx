import './App.css';
import CallToAction from './folds/CallToAction';
import Feature1 from './folds/Feature1';
import Feature2 from './folds/Feature2';
import Footer from './folds/Footer';
import Header from './folds/Header';
import Hero from './folds/Hero';
import LogoCloud from './folds/LogoCloud';
import Testimonials from './folds/Testimonials';

function App() {
    return (
        <main className='font-[Inter]'>
            <Header />
            <div className='px-20'>
                <Hero />
                <LogoCloud />
                <Feature1 />
                <Feature2 />
                <Testimonials />
                <CallToAction />
            </div>
            <Footer />
        </main>
    );
}

export default App;
