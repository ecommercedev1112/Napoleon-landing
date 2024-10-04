import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import HomePage from './components/home/HomePage';
import Help from './components/home/policies/Help';
import BrandPolicy from './components/home/policies/BrandPolicy';
import CookiePolicy from './components/home/policies/CookiePolicy';
import PrivacyPolicy from './components/home/policies/PrivacyPolicy';
import UserAgreement from './components/home/policies/UserAgreement';
import AboutUs from './components/home/policies/AboutUs';
import NavbarHomePage from './components/home/NavbarHomePage';
import CookieConsent from './components/home/ConsentForCookie';
import FooterHomePage from './components/home/FooterHomePage';

function App() {

  return (
    <>
      <NavbarHomePage />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/userAgreement' element={<UserAgreement />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/cookie' element={<CookiePolicy />} />
        <Route path='/copyright' element={<CookiePolicy />} />
        <Route path='/brand' element={<BrandPolicy />} />
        <Route path='/help' element={<Help />} />
      </Routes>
      <FooterHomePage/>
      <CookieConsent/>
    </>
  )
}

export default App
