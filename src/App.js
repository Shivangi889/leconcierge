import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import TestimonialSection from './component/Testimonial/Testimonial';
import Social from './component/Social/Social';
import Footer from './component/Footer';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './component/Aboutus/Aboutus';


function Layout() {
  return (
    <div>
      <Header/>
      <Home/>
      <TestimonialSection/>
      <Social/>
      <Footer/>
    </div>
  );
}

function App(){
  return(
    <div className='App'>
<Router>
  <Routes>
    <Route path="/" exact Component={Layout}/>
    <Route path="/about" element={<AboutUs/>}></Route>
  </Routes>
</Router>
    </div>
  )
}
export default App;
