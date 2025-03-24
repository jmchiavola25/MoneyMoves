import TagInput from '../TagInput/TagInput';
import './CreateBudgetFieldset.css'

import {
    Button,
    Field,
    Fieldset,
    Input,
    Stack,
  } from "@chakra-ui/react"

const CreateBudgetFieldset = () => {

    return (
    <Fieldset.Root size="lg">
        <Stack>
          <Fieldset.Legend color={"black"}>Budget details</Fieldset.Legend>
          <Fieldset.HelperText color={"grey"}>
            Please provide your budget details below.
          </Fieldset.HelperText>
        </Stack>
  
        <Fieldset.Content>
          <Field.Root>
            <Field.Label color={"black"}>Name</Field.Label>
            <Input color="black" name="name" placeholder="Enter the name of your budget, i.e. '2025 Budget'" outlineColor={"blue"}/>
          </Field.Root>
  
          <Field.Root>
            <Field.Label color={"black"}>Budget Fields</Field.Label>
            <TagInput/>
          </Field.Root>
        </Fieldset.Content>
  
        <Button type="submit" alignSelf="flex-end" background={"#3f6640"} color={"white"}>
          Submit
        </Button>
      </Fieldset.Root>
      )
}

export default CreateBudgetFieldset;