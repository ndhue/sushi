import "./style/main.scss"
import { Header } from './components/Header'
import { Hero } from "./components/Hero"
import { AboutUs } from "./components/AboutUs"
import { Popular } from "./components/Popular"
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Popular />
    </>
  )
}

export default App
