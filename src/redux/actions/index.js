export const ADD_TODO = 'ADD_TODO'
export const GET_TODOS = 'GET_TODOS'
export const STATE_TODO = 'STATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAN_COMPLETE = 'CLEAN_COMPLETE'
export const ACTIVE_TODOS = 'ACTIVE_TODOS'
export const COMPLETED_TODOS = 'COMPLETED_TODOS'

export const add_Todo = (todo) => {
    return function (dispatch){
        dispatch({type:ADD_TODO, payload:todo})
    }
}

export const stateToDo = (id) => {
    return function (dispatch) {
        dispatch({type:STATE_TODO, payload:id})
    }   
}

export const deleteTodo = (id) => { 
    return function (dispatch) {
        dispatch({type: DELETE_TODO, payload:id})
    }
 }

 export const cleanComplete = () => { 
    return function (dispatch) {
        dispatch({type: CLEAN_COMPLETE})
    }
 }

 export const getTodos = () => { 
    return function (dispatch) {

        dispatch({type: GET_TODOS})
    }
  }

export const filterTodos = (filter) => { 
    console.log(filter,'actions')
    return function (dispatch) { 
        if(filter === 'ALL') {dispatch({type:GET_TODOS, payload:'ALL'})}
        if(filter === 'ACTIVE') {dispatch({type:ACTIVE_TODOS})}
        if(filter === 'COMPLETED') {dispatch({type:COMPLETED_TODOS})}
        
     }
 }
