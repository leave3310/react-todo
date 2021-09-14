import { useState } from "react";
import { Todo } from "../types/todoList";

const useTodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: Todo) => {
        setTodos([
            ...todos,
            todo
        ])
    }

    


    return { todos, addTodo } as const
}

export default useTodoList