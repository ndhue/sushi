import "./style/main.scss"
import { Header } from './components/Header'
import { Hero } from "./components/Hero"
import { AboutUs } from "./components/AboutUs"
import { Popular } from "./components/Popular"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import { Trending } from "./components/Trending"
import { Subscribe } from "./components/Subscribe"
import { Footer } from "./components/Footer"

function App() {
  useEffect(() => {
    // init AOS animation
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    AOS.refresh();
  },[])
  
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Popular />
      <Trending />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
