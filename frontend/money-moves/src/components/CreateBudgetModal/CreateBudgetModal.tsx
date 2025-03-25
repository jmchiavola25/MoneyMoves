import './CreateBudgetModal.css';

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import CreateBudgetFieldset from "../CreateBudgetFieldset/CreateBudgetFieldset"
import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { tertiaryColor } from '../../utils/colors';

interface CreateBudgetModalProps {
    fetchBudgets: () => void;
}

const CreateBudgetModal : React.FC<CreateBudgetModalProps> = ({fetchBudgets}) => {

    const [open, setOpen] = useState(false)

    return(
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog.Trigger asChild>
        <Button variant="outline" size="lg" background={tertiaryColor} color={"white"}>
            <LuPlus/>
            Add
        </Button>
        </Dialog.Trigger>
        <Portal>
        <Dialog.Backdrop backdropFilter={"blur(2px)"} />
        <Dialog.Positioner>
            <Dialog.Content background="white">
            <Dialog.Header>
                <Dialog.Title color={"black"}>Create New Budget</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
                <CreateBudgetFieldset setIsOpen={setOpen} fetchBudgets={fetchBudgets}/>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild >
                <CloseButton size="sm" background={"#d7263d"}/>
            </Dialog.CloseTrigger>
            </Dialog.Content>
        </Dialog.Positioner>
        </Portal>
  </Dialog.Root>
  )
}

export default CreateBudgetModal;