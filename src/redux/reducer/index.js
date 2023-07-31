import { ADD_TODO, STATE_TODO, DELETE_TODO, CLEAN_COMPLETE } from "../actions"
const initialState = {
    allToDos: [
        {
            id: 1,
            title: 'Complete course bluueweb',
            complete: true
        },
        {
            id: 2,
            title: 'Go to de Gym',
            complete: false
        },
        {
            id: 3,
            title: 'Buy food',
            complete: false
        },
        {
            id: 4,
            title: 'Find fix',
            complete: false
        }
    ],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                allToDos: [...state.allToDos, action.payload],
            }
        case STATE_TODO:
            const newStateTodo = state.allToDos.map(todo => todo.id === action.payload ? { ...todo, complete: todo.complete = !todo.complete } : todo)
            return {
                ...state,
                allToDos: newStateTodo,
            }

        case DELETE_TODO:
            const newArrayTodo = state.allToDos.filter((todo) => todo.id !== action.payload)
            return {
                ...state,
                allToDos: newArrayTodo
            }

        case CLEAN_COMPLETE:
            const cleanComplete = state.allToDos.filter((todo) => !todo.complete)
            return {
                ...state,
                allToDos: cleanComplete
            }

        default: return state
    }
}
