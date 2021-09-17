import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { rootState } from "../../store";
import { Todo as ITodo } from "../../types/todoList";

const Todo = () => {
  const { id }: { id: string } = useParams();
  const todos: ITodo[] = useSelector((state: rootState) => state.todos);
  const todo: ITodo = todos.find(
    (todo: ITodo) => todo.id === Number(id)
  ) as ITodo;

  return <div>{todo.name}</div>;
};

export default Todo;
