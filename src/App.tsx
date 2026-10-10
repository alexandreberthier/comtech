import "./App.css"
import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Dashboard } from "./pages/Dashboard"
import { Navbar } from "./components/Navbar/Navbar"
import { ScrollToTop } from "./components/ScrollToTop"

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App