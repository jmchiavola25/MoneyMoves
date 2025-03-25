import { useEffect, useState } from "react";
import { getBudgets } from "../services/BudgetService";

import BudgetCard from "../components/BudgetCard/BudgetCard";
import { Button, ButtonGroup, EmptyState, HStack, VStack } from "@chakra-ui/react"
import { HiCalculator } from "react-icons/hi"
import CreateBudgetModal from "../components/CreateBudgetModal/CreateBudgetModal";

import '../styles/Dashboard.css';

interface Budget {
    id: number;
    name: string;
    fields: string[];
}

const Dashboard = () => {
    const [budgets, setBudgets] = useState([]);
    const [maxHeight, setMaxHeight] = useState<number>(275)

    const fetchBudgets = async () => {
        const mBudgets = await getBudgets(Number(localStorage.getItem("userId")));
        setBudgets(mBudgets);
    }

    useEffect(() => {
        fetchBudgets();
    }, []);

     return (
        <HStack className="dashboard" wrap={"wrap"} gap={5}>
            {budgets.length > 0 ? budgets.map((budget: Budget) => (
                <BudgetCard 
                id={budget.id} 
                name={budget.name} 
                key={budget.name} 
                fields={budget.fields} 
                fetchBudgets={fetchBudgets}
                maxHeight={maxHeight}
                setMaxHeight={setMaxHeight}></BudgetCard>
            )) : <div className="emptyDashboard">
                </div>}
                <EmptyState.Root width="320px" height="275px" size="lg" background='#9fafc9' borderRadius={"2%"} padding={"2%"} outline={"1px solid black"}>
                    <EmptyState.Content>
                        <EmptyState.Indicator >
                            <HiCalculator color="#3f6640"/>
                        </EmptyState.Indicator>
                            <VStack textAlign="center">
                                <EmptyState.Title color={"#1e2a38"}>Start budgeting!</EmptyState.Title>
                                <EmptyState.Description color={"#333"}>
                                    Add a new budget to get started
                                </EmptyState.Description>
                        </VStack>
                        <ButtonGroup>
                            <CreateBudgetModal fetchBudgets={fetchBudgets}/>
                            <Button size="lg" variant="outline" background={"#d7263d"}>Import</Button>
                        </ButtonGroup>
                    </EmptyState.Content>
                </EmptyState.Root>
        </HStack>
     )
}

export default Dashboard;