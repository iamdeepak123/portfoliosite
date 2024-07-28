
import './App.css';
import HomePage from "./Components/HomePage"
import AboutMe from "./Components/AboutMe"
import ContactMe from "./Components/ContactMe"
import MyWork from "./Components/MyWork"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import MenuTab from './Components/MenuTab';


function App() {
  return (
    <>
      <Navbar />
      <MenuTab/>
       <HomePage />
      <AboutMe />
      <MyWork /> 
      <ContactMe />
      <Footer />
      
    </>
  );
}

export default App;
