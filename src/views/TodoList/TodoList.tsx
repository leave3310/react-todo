import React from "react";
import "./index.css";
import Filter from "./Filter";
import useTodoList from "../../hooks/useTodoList";
const TodoList = () => {
  const todoList = useTodoList();

  return (
    <div className="layout">
      <div className="todoListWrapper">
        <div className="header">
          <span className="title">TodoList</span>
          <span className="subTitle">Hi~</span>
        </div>
        <Filter
          filterDoneTodo={todoList.filterDoneTodo}
          switchFilterDoneTodo={todoList.switchFilterDoneTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
