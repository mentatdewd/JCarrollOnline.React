import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ForaPage from './pages/forapage';
import UsersPage from './pages/usersPage';
import ContactPage from './pages/contactpage';
import ProfilePage from './pages/profilePage';
import SandboxPage from './pages/sandboxPage';
import YellowstonePage from './pages/yellowstonepage';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import ForgotPasswordPage from './pages/forgotpassword';
import NotFoundPage from './pages/notfoundpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';

import './App.css'
import ForumPage from './pages/forumpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/fora" element={<ForaPage />} />
            <Route path="/fora/:forumId" element={<ForumPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sandbox" element={<SandboxPage />} />
            <Route path="/yellowstone" element={<YellowstonePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
