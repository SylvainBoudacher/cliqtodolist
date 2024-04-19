"use client";

import { useTodoStore } from "@/store/todoStore";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "@phosphor-icons/react";

export default function ToDoInput() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const addItem = useTodoStore((state) => state.addItem);

  const handleSubmit = () => {
    addItem({
      id: crypto.randomUUID(),
      text: inputValue,
      status: false,
    });
    setInputValue("");
  };

  useEffect(() => {
    inputValue.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [inputValue, setIsDisabled]);

  return (
    <div className="flex items-center w-full sm:max-w-xl ">
      <Input
        type="text"
        placeholder="Enter a new Todo..."
        className="bg-neutral-900 text-white placeholder:text-zinc-400 border-neutral-900 shadow-lg duration-300 ease-in-out rounded-l-lg rounded-r-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />

      <Button
        variant="outline"
        className="bg-neutral-900 rounded-l-none border-neutral-900 disabled:opacity-100 hover:bg-neutral-700  "
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        <ArrowUp
          size={20}
          weight="bold"
          className={`duration-300 ease-in-out ${
            isDisabled ? "text-zinc-500" : "text-zinc-200"
          }`}
        />
      </Button>
    </div>
  );
}
