import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateToken } from "../utils/TokenAuthentication";
import { getBudgets } from "../services/BudgetService";

import BudgetCard from "../components/BudgetCard/BudgetCard";
import { Button, ButtonGroup, EmptyState, VStack } from "@chakra-ui/react"
import { HiCalculator } from "react-icons/hi"
import CreateBudgetModal from "../components/CreateBudgetModal/CreateBudgetModal";

import '../styles/Dashboard.css';

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
        <div className="dashboard">
            {budgets.length > 0 ? budgets.map((budget: Budget) => (
                <BudgetCard name={budget.name}></BudgetCard>
            )) : <div className="emptyDashboard">
                    <EmptyState.Root size="lg" colorPalette='pink'>
                        <EmptyState.Content>
                            <EmptyState.Indicator >
                                <HiCalculator color="green"/>
                            </EmptyState.Indicator>
                                <VStack textAlign="center">
                            <EmptyState.Title>Start budgeting!</EmptyState.Title>
                            <EmptyState.Description color={"purple"}>
                                Add a new budget to get started
                            </EmptyState.Description>
                            </VStack>
                            <ButtonGroup>
                                <CreateBudgetModal/>
                                <Button size="md" variant="outline" background={"blue"}>Import</Button>
                            </ButtonGroup>
                        </EmptyState.Content>
                        </EmptyState.Root>
                </div>}
        </div>
     )
}

export default Dashboard;