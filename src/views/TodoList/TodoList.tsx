import React from "react";
import "./index.css";
import Filter from "./Filter";
import useTodoList from "../../hooks/useTodoList";
import TodoItem from "./TodoItem";
import Form from "./Form";

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
        <div className="todoList">
          {todoList.todos.map((todo) => (
            <TodoItem
              todo={todo}
              switchTodoDoneStatus={todoList.switchTodoDoneStatus}
              deleteTodo={todoList.deleteTodo}
            />
          ))}
        </div>
        <Form addTodo={todoList.addTodo} />
      </div>
    </div>
  );
};

export default TodoList;
