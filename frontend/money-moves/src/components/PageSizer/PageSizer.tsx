import { NumberInput, HStack, IconButton, VStack } from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";

interface PageSizerProps {
    pageSize: number, 
    setPageSize: (pageSize: number) => void
}

const PageSizer : React.FC<PageSizerProps> = ({pageSize, setPageSize}) => {

    return (
        <VStack>
            <label>Items per Page</label>
            <NumberInput.Root value={`${pageSize}`} unstyled spinOnPress={false}>
                <HStack gap="2">
                    <NumberInput.DecrementTrigger asChild>
                    <IconButton variant="outline" size="sm">
                        <LuMinus onClick={() => setPageSize(pageSize - 1)}/>
                    </IconButton>
                    </NumberInput.DecrementTrigger>
                    <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch"/>
                    <NumberInput.IncrementTrigger asChild>
                        <IconButton variant="outline" size="sm" onClick={() => setPageSize(pageSize + 1)}>
                            <LuPlus />
                        </IconButton>
                    </NumberInput.IncrementTrigger>
                </HStack>
            </NumberInput.Root>
        </VStack>
    )
}

export default PageSizer;