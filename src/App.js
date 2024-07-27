
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"
import AboutMe from "./Components/AboutMe"
import ContactMe from "./Components/ContactMe"
import MyWork from "./Components/MyWork"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import SingleProjectPage from "./Components/SingleProjectPage.jsx"
import ProjectCard from "./Components/ProjectCard.jsx"

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
