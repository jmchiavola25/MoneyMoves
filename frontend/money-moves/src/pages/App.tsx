import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from "../pages/Dashboard";
import Budget from '../pages/Budget';
import "../styles/App.css"
import { Provider } from '../components/ui/provider';

import { AuthProvider } from '../utils/AuthContext';
import { ChakraProvider, defaultSystem} from '@chakra-ui/react';
import Navbar from '../components/NavBar/NavBar';

function App() {


  return (
    <Provider>
      <Router>
      <Navbar className="navbar"/>
      <div className="authProvider">
        <AuthProvider >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<ChakraProvider value={defaultSystem}><Dashboard /></ChakraProvider>}/>
            <Route path="/budget" element={<ChakraProvider value={defaultSystem}><Budget /></ChakraProvider>}/>
          </Routes>
        </AuthProvider>
        </div>
      </Router>
      </Provider>
  );
}

export default App;
