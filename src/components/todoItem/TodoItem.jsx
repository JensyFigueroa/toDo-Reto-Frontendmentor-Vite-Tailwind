
import { useDispatch, useSelector } from "react-redux"
import CrossIco from '../icons/CrossIco'
import { stateToDo } from '../../redux/actions/index'

const TodoItem = () => {
    const allToDos = useSelector((state) => state.allToDos)

    const dispatch = useDispatch() 

    return (
        <>
            {allToDos.map((todo, i) =>  (<article key={i} className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none" onClick={() => dispatch(stateToDo(todo.id))}>{allToDos.complete && <i className="fa-solid fa-check text-green-500"></i>}</button>
                <p className="text-gray-400 grow">{todo.title}</p>
                <button className='flex-none'><CrossIco /></button>
            </article>))}
            
        </>
    )
}

export default TodoItem