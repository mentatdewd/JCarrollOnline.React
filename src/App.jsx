import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ForaPage from './pages/forapage';
import LoginPage from './pages/loginpage';
import NotFoundPage from './pages/notfoundpage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fora" element={<ForaPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
