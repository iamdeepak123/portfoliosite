
import './App.css';
import HomePage from "./Components/HomePage"
import AboutMe from "./Components/AboutMe"
import ContactMe from "./Components/ContactMe"
import MyWork from "./Components/MyWork"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <Navbar />
       <HomePage />
      <AboutMe />
      <MyWork /> 
      <ContactMe />
      <Footer />
      
    </>
  );
}

export default App;
