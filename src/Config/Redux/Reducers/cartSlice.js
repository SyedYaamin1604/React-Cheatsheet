import { createSlice, nanoid } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: [{
            id: 1,
            title: 'hello world'
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload.title
            })
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload.index , 1)
        },
    }
})


export const { addTodo, removeTodo } = todoSlice.actions 

export default todoSlice.reducer