import React from "react";
import { useHistory } from "react-router-dom";
import { Todo } from "../../types/todoList";

type TodoProps = {
  todo: Todo;
  switchTodoDoneStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = (props: TodoProps) => {
  const history = useHistory();
  return (
    <div className="todoItem">
      <span
        style={{ textDecoration: props.todo.done ? "line-through" : "none" }}
      >
        {props.todo.name}
      </span>
      <div>
        <input
          type="checkbox"
          checked={props.todo.done}
          onChange={() => {
            props.switchTodoDoneStatus(props.todo.id);
          }}
        />
        <button
          type="button"
          onClick={() => {
            history.push(`/todo/${props.todo.id}`);
          }}
        >
          詳細資訊
        </button>
        <button
          type="button"
          onClick={() => {
            props.deleteTodo(props.todo.id);
          }}
        >
          刪除
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
