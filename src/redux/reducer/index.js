import { ADD_TODO, STATE_TODO } from "../actions"
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
    ]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                allToDos: [...state.allToDos, action.payload],
            }
        case STATE_TODO:
            const newStateTodo = state.allToDos.map(todo => {
                if (todo.id === action.payload) {
                    todo.complete = !todo.complete
                }

                return todo
               
            })

            return {
        
                allToDos: [...state.allToDos, newStateTodo],
            }

        default: return state
    }
}
