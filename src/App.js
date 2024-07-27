
import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"
import AboutMe from "./Components/AboutMe"
import ContactMe from "./Components/ContactMe"
import MyWork from "./Components/MyWork"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/AboutMe' element={<AboutMe/>} />
          <Route path='/ContactMe' element={<ContactMe/>} />
          <Route path='/MyWork' element={<MyWork/>} />
          

        </Routes>
      </BrowserRouter> */}
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
