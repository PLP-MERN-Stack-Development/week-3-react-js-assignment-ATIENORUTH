import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import CatFacts from './pages/CatFacts'

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100 shadow">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/catfacts" className="text-blue-500">Cat Facts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10 text-3xl">Welcome Home!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/catfacts" element={<CatFacts />} />
      </Routes>
    </Router>
  )
}

export default App
