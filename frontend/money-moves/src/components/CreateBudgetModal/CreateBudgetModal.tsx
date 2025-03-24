import './CreateBudgetModal.css';

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import CreateBudgetFieldset from "../CreateBudgetFieldset/CreateBudgetFieldset"


const CreateBudgetModal = () => {

    return <Dialog.Root >
    <Dialog.Trigger asChild>
      <Button variant="outline" size="md" background={"green"}>
        Create New Budget
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
            <CreateBudgetFieldset />
          </Dialog.Body>
          <Dialog.CloseTrigger asChild >
            <CloseButton size="sm" background={"red"}/>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
}

export default CreateBudgetModal;