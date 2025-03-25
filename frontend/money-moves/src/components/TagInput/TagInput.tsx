import './TagInput.css';
import {
    Input,
    Tag,
    HStack,
    VStack,
    Button
  } from "@chakra-ui/react";
import { useState } from 'react';  
import { HiPlus } from 'react-icons/hi';

interface TagInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagInput : React.FC<TagInputProps> = ({tags, setTags}) => {
  
  const [inputValue, setInputValue] = useState("");

  const addTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue(""); // Clear input field
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <VStack align="start">
      <HStack>
        <Input
          placeholder="Add a field (e.g., Date, Amount, Notes)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTag()}
          color={"black"}
          outlineColor={"blue"}
        />
        <Button onClick={addTag} background={"#0c49ab"} color={"white"}>
          <HiPlus/>
        </Button>
      </HStack>
      <HStack gap="1" wrap={"wrap"}>
        {tags.map((tag) => (
            <Tag.Root color={"white"} background={"#d169ae"} size="lg" key={tag}>
              <Tag.Label>{tag}</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger onClick={() => removeTag(tag)}/>
              </Tag.EndElement>
            </Tag.Root>
        ))}
        </HStack>
    </VStack>
  );
}

export default TagInput;