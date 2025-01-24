"use client";

import { Todo } from "@/model/todo.model";
import { useTodoStore } from "@/store/todoStore";

import TodoListLignItem from "@/components/todoListLignItem";

export default function ToDoListItems() {
  const toDoList = useTodoStore((state) => state.items);
  return (
    <div className="flex flex-col items-start w-full sm:max-w-xl px-6 sm:px-0 absolute mt-44">
      {toDoList
        ?.slice()
        .reverse()
        .map((item: Todo) => (
          <TodoListLignItem key={item.id} item={item} />
        ))}
    </div>
  );
}
