import TagInput from '../TagInput/TagInput';
import './CreateBudgetFieldset.css'

import {
    Button,
    Field,
    Fieldset,
    Input,
    Stack,
  } from "@chakra-ui/react"

import {useState} from 'react';
import {createBudget} from "../../services/BudgetService";

const CreateBudgetFieldset = () => {

    const [tags, setTags] = useState<string[]>([]);
    const [name, setName] = useState<string>("");

    const createNewBudget = (event: React.MouseEvent<HTMLButtonElement>, name: string, fields: string[]) => {
        event.preventDefault();
        const userId = localStorage.getItem("userId")!! as unknown as number;
        createBudget(userId, name, fields);
    }

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
            <Input 
                color="black" 
                name="name" 
                placeholder="Enter the name of your budget, i.e. '2025 Budget'" 
                outlineColor={"blue"} 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
          </Field.Root>
  
          <Field.Root>
            <Field.Label color={"black"}>Budget Fields</Field.Label>
            <TagInput tags={tags} setTags={setTags}/>
          </Field.Root>
        </Fieldset.Content>
  
        <Button type="submit" alignSelf="flex-end" background={"#3f6640"} color={"white"} onClick={(e) => createNewBudget(e, name, tags)}>
          Submit
        </Button>
      </Fieldset.Root>
      )
}

export default CreateBudgetFieldset;