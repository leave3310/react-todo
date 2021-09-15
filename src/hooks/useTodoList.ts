import { useState } from "react";
import { Todo } from "../types/todoList";

const useTodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    // 新增
    const addTodo = (todo: Todo) => {
        setTodos([
            ...todos,
            todo
        ])
    }

    // 修改完成狀態
    const switchTodoDoneStatus = (id: number) => {
        const targetTodoIndex = todos.findIndex(
            (todo: Todo) => todo.id === id
        )
        const newTodos = [...todos]

        newTodos[targetTodoIndex] = {
            ...newTodos[targetTodoIndex],
            done: !(newTodos[targetTodoIndex].done)
        }
        setTodos(newTodos)
    }

    const deleteTodo = (id: number) => {
        const newTodo = todos.filter((todo: Todo) => (
            todo.id !== id
        ))

        setTodos(newTodo)
    }
    // 過濾完成條件
    const [filterDoneTodo, setFilterDoneTodo] = useState<boolean>(false)

    const switchFilterDoneTodo = () => {
        setFilterDoneTodo(!(filterDoneTodo))
    }

    let workTodos = todos
    if (filterDoneTodo) {
        workTodos = todos.filter(todo => !todo.done)
    }

    return { todos: workTodos, addTodo, switchTodoDoneStatus, deleteTodo, filterDoneTodo, switchFilterDoneTodo } as const
}

export default useTodoList