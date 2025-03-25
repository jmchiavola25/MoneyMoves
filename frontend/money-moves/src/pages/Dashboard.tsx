import { useEffect, useState } from "react";
import { getBudgets } from "../services/BudgetService";

import BudgetCard from "../components/BudgetCard/BudgetCard";
import { Button, ButtonGroup, EmptyState, HStack, VStack, Card, Icon } from "@chakra-ui/react"
import { HiCalculator } from "react-icons/hi"
import CreateBudgetModal from "../components/CreateBudgetModal/CreateBudgetModal";

import '../styles/Dashboard.css';

interface Budget {
    id: number;
    name: string;
}

const Dashboard = () => {
    const [budgets, setBudgets] = useState([]);

    const fetchBudgets = async () => {
        const userId = Number(localStorage.getItem("userId"));
        const mBudgets = await getBudgets(userId);
        setBudgets(mBudgets);
    }

    useEffect(() => {
        fetchBudgets();
    }, []);

     return (
        <HStack className="dashboard" wrap={"wrap"} gap={2}>
            {budgets.length > 0 ? budgets.map((budget: Budget) => (
                <BudgetCard id={budget.id} name={budget.name} key={budget.name} fetchBudgets={fetchBudgets}></BudgetCard>
            )) : <div className="emptyDashboard">
                </div>}
                <EmptyState.Root width="320px" height="275px" size="lg" background='orange' borderRadius={"10px"} padding={"2%"}>
                    <EmptyState.Content>
                        <EmptyState.Indicator >
                            <HiCalculator color="#3f6640"/>
                        </EmptyState.Indicator>
                            <VStack textAlign="center">
                        <EmptyState.Title>Start budgeting!</EmptyState.Title>
                        <EmptyState.Description color={"purple"}>
                            Add a new budget to get started
                        </EmptyState.Description>
                        </VStack>
                        <ButtonGroup>
                            <CreateBudgetModal fetchBudgets={fetchBudgets}/>
                            <Button size="md" variant="outline" background={"#0c49ab"}>Import</Button>
                        </ButtonGroup>
                    </EmptyState.Content>
                </EmptyState.Root>
        </HStack>
     )
}

export default Dashboard;