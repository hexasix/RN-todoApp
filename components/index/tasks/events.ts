import { Todo } from "@/mock/todos";
import { Dispatch, SetStateAction } from "react";
export const handleCheckboxChange = (
  id: number,
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
};

export const deleteTask = (id: number, todos: Todo[], setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};