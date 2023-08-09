import { useDispatch, useSelector } from "react-redux"
import TodoComputed from "../todoComputed/TodoComputed"
import TodoItem from "../todoItem/TodoItem"
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect } from "react"
import { getTodos } from '../../redux/actions/index'

const ListTodo = () => {
    const dispatch = useDispatch()
    const allToDos = useSelector((state) => state.allToDos)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    //Guardando en el localStorage
    let setArrTodos = JSON.stringify(allToDos)
    localStorage.allTodos = `${setArrTodos}`

    //Obteniendo de localStorage
    let getArrTodos = localStorage.getItem('allTodos')
    const arrTodos = JSON.parse(getArrTodos)

    return (
        <div className="mt-8 bg-white rounded-md dark:bg-gray-800 transition-all duration-1000">

            <Droppable droppableId="todos">
                {(droppableProvided) => (
                    <div ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}>

                        {arrTodos.map((todo, i) => (
                            <Draggable key={todo.id} index={i} draggableId={`${todo.id}`}>
                                {
                                    (draggableProvided) => (
                                    <TodoItem 
                                        todo={todo} 
                                        ref={draggableProvided.innerRef} 
                                        {...draggableProvided.dragHandleProps}
                                        {...draggableProvided.draggableProps}
                                    />
                                    )
                                }

                            </Draggable>)

                        )}

                        {droppableProvided.placeholder}
                    </div>
                )}
            </Droppable>

            <TodoComputed />

        </div>
    )
}

export default ListTodo