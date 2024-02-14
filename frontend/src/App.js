// App.js
import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Councellor from './components/Councellor';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import StickyFooter from './components/Footer';
import Contact from './components/Contact'; // Import the Contact component

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/signin' element={<Signin />} exact />
          <Route path='/councellor' element={<Councellor />} exact />
          <Route path='/visitor' element={<Visitor />} exact />
          <Route path='/appointment' element={<Appointment />} exact />
          <Route path='/contact' element={<Contact />} exact />
        </Routes>
      </main>
      {/*<footer>
        <StickyFooter />
  </footer>*/}
    </React.Fragment>
  );
}

export default App;
