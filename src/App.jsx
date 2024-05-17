import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';

import './App.css'
import AuthProvider from "./components/authprovider";
import Routes from "./components/routes";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App
