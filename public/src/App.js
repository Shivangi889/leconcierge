import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import TestimonialSection from './component/Testimonial/Testimonial';
import Social from './component/Social/Social';
import Footer from './component/Footer';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './component/Aboutus/Aboutus';
import Bsetup from './component/Services/BusinessSetup'
import VisaServices from './component/Services/VisaServices';
import BankingServices from './component/Services/BankingServices';
import PropertyManagement from './component/Services/PropertyManagement';
import Accounting from './component/Services/Accounting';
import Luxury from './component/Services/LuxuryCar';
import LuxuryYacht from './component/Services/LuxuryYacht';
import PrivateJet from './component/Services/PrivateJet';
import PersonalAssistance from './component/Services/PersonalAssistance';
import Contact from './component/Contact/Contact';


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
    <Route path ="/home" Component={Layout}/>
    <Route path="/business" element={<Bsetup/>}></Route>
    <Route path="/visaServices" element={<VisaServices/>}></Route>
    <Route path='/banking' element={<BankingServices/>}></Route>
    <Route path='/property' element={<PropertyManagement/>}></Route>
    <Route path='/accounting' element={<Accounting/>}></Route>
    <Route path='/luxury' element={<Luxury/>}></Route>
    <Route path='/yacht' element={<LuxuryYacht/>}></Route>
    <Route path='/privatejet' element={<PrivateJet/>}></Route>
    <Route path='/personal' element={<PersonalAssistance/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
</Router>
    </div>
  )
}
export default App;
