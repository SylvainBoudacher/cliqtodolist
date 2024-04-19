"use client";

import { useTodoStore } from "@/store/todoStore";

import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/model/todo.model";
import { Trash } from "@phosphor-icons/react";

export default function TodoListLignItem(props: { item: Todo }) {
  const { item } = props;

  const toggleItem = useTodoStore((state) => state.toggleItem);
  const removeItem = useTodoStore((state) => state.removeItem);

  const handleRemoveItem = () => {
    removeItem(item);
  };

  const handleToggleItem = () => {
    toggleItem(item);
  };

  return (
    <div className="flex flex-row items-center py-1 w-full justify-between">
      <div className="flex flex-row items-center">
        <Checkbox
          className={`mr-4 rounded-xl hover:bg-neutral-900   transition-all duration-300 ease-in-out ${
            item.status === true ? "bg-neutral-300" : ""
          }`}
          onClick={handleToggleItem}
        />
        <p
          className={
            item.status === true
              ? "text-stone-400 line-through duration-300"
              : ""
          }
        >
          {item.text}
        </p>
      </div>

      <div>
        <Trash
          size={26}
          className="items-center cursor-pointer text-stone-400 hover:text-red-500 hover:bg-red-100 rounded-full p-1 transition-all duration-300 ease-in-out hover:shadow-md"
          onClick={handleRemoveItem}
        />
      </div>
    </div>
  );
}
