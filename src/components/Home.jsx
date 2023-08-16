import "../style/main.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from './Header'
import { Hero } from "./Hero"
import { AboutUs } from "./AboutUs"
import { Popular } from "./Popular"
import { useEffect } from "react"
import { Trending } from "./Trending"
import { Subscribe } from "./Subscribe"
import { Footer } from "./Footer"

export default function Home() {
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
