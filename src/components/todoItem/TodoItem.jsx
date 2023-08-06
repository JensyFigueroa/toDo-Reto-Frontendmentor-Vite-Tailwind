import { useDispatch, useSelector } from "react-redux"
import IcoCross from '../icons/IcoCross'
import IcoCheck from '../icons/IcoCheck'
import { deleteTodo, stateToDo, getTodos } from '../../redux/actions/index'
import { useEffect } from "react"

const TodoItem = () => {
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
        <>
            {arrTodos.map((todo, i) => (<article key={i} className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>
                {/* También se puede hacer con fontawesom */}
                {/* <button className={`rounded-full border-2 h-5 w-5 flex justify-center items-center ${todo.complete && 'border-green-500'} `} onClick={() => dispatch(stateToDo(todo.id))}>{todo.complete && <i className="fa-solid fa-check text-green-500"></i>}</button> */}

                <button className={`rounded-full border-2 h-5 w-5 flex justify-center items-center ${todo.complete && 'bg-gradient-to-br from-cyan-400 via-purple-400 to-fuchsia-700'} `} onClick={() => dispatch(stateToDo(todo.id))}>{todo.complete && <IcoCheck />}</button>
                <p className={`text-gray-400 grow ${todo.complete && 'line-through'}`}>{todo.title}</p>
                <button className='flex-none' onClick={() => dispatch(deleteTodo(todo.id))}><IcoCross className='fill-red-500' /></button>

            </article>))}
        </>
    )
}

export default TodoItem