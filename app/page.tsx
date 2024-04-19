"use client";
import BackgroundCliq from "@/components/backgroundLogoCliq";
import TitlePart from "@/components/titlePart";
import ToDoInput from "@/components/todoInput";
import { Todo } from "@/model/todo.model";
import { useTodoStore } from "@/store/todoStore";

export default function Home() {
  const toDoList = useTodoStore((state) => state.items);
  return (
    <main className="min-h-screen w-full h-full">
      <div className="relative mb-4 flex items-center justify-center py-[26vh] pt-[18vh] sm:pt-[26vh] h-full">
        <BackgroundCliq />

        <div className="relative flex flex-col w-full h-full items-center gap-6 px-6 text-center">
          <TitlePart />
          <ToDoInput />
          {/* Create -> List items */}

          <div>
            {toDoList
              ?.slice()
              .reverse()
              .map((item: Todo) => (
                <p key={item.id}>
                  {item.text} - {item.status.toString()}
                </p>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
