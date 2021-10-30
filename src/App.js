import logo from './logo.svg';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Study from './components/Study'
import Job from './components/Job'
import Footer from './components/Footer'

import styled from 'styled-components'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Study />
      <Job />
      <Footer />
    </div>
  );
}

export default App;

