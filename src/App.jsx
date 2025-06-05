import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              {/* Add more components here */}
            </main>
          } />
          <Route path="/about" element={<div className="p-8">About Page</div>} />
          <Route path="/projects" element={<div className="p-8">Projects Page</div>} />
          <Route path="/contact" element={<div className="p-8">Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;