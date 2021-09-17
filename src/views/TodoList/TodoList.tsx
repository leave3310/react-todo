import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import Filter from "./Filter";
import TodoItem from "./TodoItem";
import Form from "./Form";
import {
  addTodo,
  deleteTodo,
  switchTodoDoneStatus,
  switchFilterDoneTodo,
} from "../../actions/todo";
import { rootState } from "../../store";

const TodoList = () => {
  const dispatch = useDispatch();
  return (
    <div className="layout">
      <div className="todoListWrapper">
        <div className="header">
          <span className="title">TodoList</span>
          <span className="subTitle">Hi~</span>
        </div>
        <Filter
          filterDoneTodo={useSelector(
            (state: rootState) => state.filterDoneTodo
          )}
          switchFilterDoneTodo={() => dispatch(switchFilterDoneTodo())}
        />
        <div className="todoList">
          {useSelector((state: rootState) => state.displayTodos).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              switchTodoDoneStatus={(id) => dispatch(switchTodoDoneStatus(id))}
              deleteTodo={(id) => dispatch(deleteTodo(id))}
            />
          ))}
        </div>
        <Form addTodo={(todo) => dispatch(addTodo(todo))} />
      </div>
    </div>
  );
};

export default TodoList;
