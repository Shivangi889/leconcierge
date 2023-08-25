import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import TestimonialSection from './component/Testimonial/Testimonial';
import Social from './component/Social/Social';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <TestimonialSection/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
