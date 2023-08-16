import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sushi" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
