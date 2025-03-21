import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateToken } from "../utils/TokenAuthentication";
import { getBudgets } from "../services/BudgetService";

import BudgetCard from "../components/BudgetCard/BudgetCard";

interface Budget {
    name: string;
}

function Dashboard () {

    const [budgets, setBudgets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenAndRedirect = async () => {
            const isAuthenticated = await authenticateToken();
            if (!isAuthenticated) {
                // If token is invalid or not present, redirect to /login
                navigate('/login');
            }
        };

        const loadBudgets = async () => {
            if (localStorage.getItem("userId") === null) {
                navigate('/login');
            } else {
                const mBudgets = await getBudgets(localStorage.getItem("userId")!! as unknown as BigInt);
                setBudgets(mBudgets);
            }
        }

        checkTokenAndRedirect();
        loadBudgets();
    }, [navigate]);

    
     return (
        <div>
            <h1>Dashboard</h1>
            {budgets.length > 0 ? budgets.map((budget: Budget) => (
                <BudgetCard name={budget.name}></BudgetCard>
            )) : <p>No budgets found</p>}
        </div>
     )
}

export default Dashboard;