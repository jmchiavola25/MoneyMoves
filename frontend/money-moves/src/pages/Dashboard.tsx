
import BudgetCard from "../components/BudgetCard/BudgetCard";
import CreateBudgetModal from "../components/CreateBudgetModal/CreateBudgetModal";
import '../styles/Dashboard.css';

import { useEffect } from "react";
import { ButtonGroup, EmptyState, HStack, VStack } from "@chakra-ui/react"
import { HiCalculator } from "react-icons/hi"
import { Budget } from "../services/BudgetService";

interface DashboardProps {
    budget: Budget | null
    setSelectedBudget: (budget: Budget) => void
    fetchBudgets : () => void
    budgets : Budget[]
}

const Dashboard : React.FC<DashboardProps> = ({setSelectedBudget, fetchBudgets, budgets}) => {

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
                    key={budget.id}
                    budget={budget}
                    fetchBudgets={fetchBudgets}
                    onSelectBudget={setSelectedBudget}></BudgetCard>
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