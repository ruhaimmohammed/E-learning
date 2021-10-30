import logo from './logo.svg';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Study from './components/Study'
import styled from 'styled-components'




function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
      <Study />
    </div>
  );
}

export default App;

