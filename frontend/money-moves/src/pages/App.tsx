import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from "../pages/Dashboard";
import Budget from '../pages/Budget';
import Navbar from '../components/NavBar/NavBar';
import "../styles/App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from '../components/ui/provider';
import { AuthProvider } from '../utils/AuthContext';
import { ChakraProvider, defaultSystem} from '@chakra-ui/react';
import { Budget as BudgetObject } from '../services/BudgetService';
import { useState } from 'react';
import { getBudgets } from '../services/BudgetService';

function App() {

  const [selectedBudget, setSelectedBudget] = useState<BudgetObject | null>(null)
  const [budgets, setBudgets] = useState([]);

  const selectBudget = (budget : BudgetObject) => {
    setSelectedBudget(budget);
    localStorage.setItem("selectedBudget", JSON.stringify(budget))
  }

  const fetchBudgets = async () => {
        const mBudgets = await getBudgets(Number(localStorage.getItem("userId")));
        setBudgets(mBudgets);
        if (selectedBudget !== null)
        {
          const selected = mBudgets.find((budget: BudgetObject) => budget.id === selectedBudget!!.id);
          setSelectedBudget(selected || null); // Set to null if no match is found
          localStorage.setItem("selectedBudget", JSON.stringify(selected))
        }
        else
        {
          setSelectedBudget(JSON.parse(localStorage.getItem("selectedBudget")!!))
        }
        
    }

  return (
    <Provider>
      <Router>
      <Navbar className="navbar" fetchBudgets={fetchBudgets}/>
      <div className="authProvider">
        <AuthProvider >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" 
              element={
                <ChakraProvider value={defaultSystem}>
                  <Dashboard 
                    budget={selectedBudget} 
                    setSelectedBudget={selectBudget}
                    fetchBudgets={fetchBudgets}
                    budgets={budgets}/>
                </ChakraProvider>}/>
            <Route path="/budget" 
              element={
                <ChakraProvider value={defaultSystem}>
                  <Budget 
                    budget={selectedBudget!!}
                    fetchBudgets={fetchBudgets}
                    setSelectedBudget={setSelectedBudget}/>
                </ChakraProvider>}/>
          </Routes>
        </AuthProvider>
        </div>
      </Router>
      </Provider>
  );
}

export default App;
