import { useEffect, useState } from "react";
import { getBudgets } from "../services/BudgetService";

import BudgetCard from "../components/BudgetCard/BudgetCard";
import { ButtonGroup, EmptyState, HStack, VStack } from "@chakra-ui/react"
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

    const fetchBudgets = async () => {
        const mBudgets = await getBudgets(Number(localStorage.getItem("userId")));
        setBudgets(mBudgets);
    }

    useEffect(() => {
        fetchBudgets();
    }, []);

     return (
        <VStack height={"100%"} width={"100%"}>
            <HStack justifyContent={"flex-end"} width={"100%"}>
            </HStack>
            <HStack className="dashboard" wrap={"wrap"} gap={5}>
                {budgets.length > 0 ? budgets.map((budget: Budget) => (
                    <BudgetCard 
                    id={budget.id} 
                    name={budget.name} 
                    key={budget.name} 
                    fields={budget.fields} 
                    fetchBudgets={fetchBudgets}></BudgetCard>
                )) :
                     <EmptyState.Root width="320px" height="275px" size="lg" borderRadius={"2%"} padding={"2%"}>
                        <EmptyState.Content>
                            <EmptyState.Indicator >
                                <HiCalculator color="#3f6640"/>
                            </EmptyState.Indicator>
                                <VStack textAlign="center">
                                    <EmptyState.Title color={"#1e2a38"}>Much empty...</EmptyState.Title>
                                    <EmptyState.Description color={"#333"}>
                                        Add a new budget to get started
                                    </EmptyState.Description>
                            </VStack>
                            <ButtonGroup>
                                <CreateBudgetModal fetchBudgets={fetchBudgets}/>
                            </ButtonGroup>
                        </EmptyState.Content>
                    </EmptyState.Root>}
            </HStack>
        </VStack>
     )
}

export default Dashboard;