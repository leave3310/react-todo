import { useState } from "react";
import { Todo } from "../types/todoList";

const useTodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    
    return { todos } as const
}

export default useTodoList