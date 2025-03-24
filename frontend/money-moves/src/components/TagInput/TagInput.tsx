import './TagInput.css';
import {
    Input,
    Tag,
    TagLabel,
    HStack,
    VStack,
    Button,
    CloseButton,
    TagCloseTrigger,
    Stack
  } from "@chakra-ui/react";
import { useState } from 'react';  
import { HiPlus, HiX } from 'react-icons/hi';

const TagInput = () => {
    const [tags, setTags] = useState<string[]>([]);
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
        <Button onClick={addTag} background={"#3f6640"} color={"white"}>
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