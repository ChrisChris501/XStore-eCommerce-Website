import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Contact from './Pages/Contact Page/Contact'
import About from './Pages/About Page/About'

function App() {
  return (
      <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
         <Route path="/SignIn" element={<SignIn />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/About" element={<About />} />
          </Routes>
       <Footer />
    </div>
      </Router>
  );
}

export default App; 
