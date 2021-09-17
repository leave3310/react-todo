import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { rootState } from "../../store";
import { Todo as ITodo } from "../../types/todoList";
import { getTodoById } from "../../actions/todo";

const Todo = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoById(Number(id)));
  });

  const todo: ITodo = useSelector((state: rootState) => state.todo);

  return <div>{todo.name}</div>;
};

export default Todo;
