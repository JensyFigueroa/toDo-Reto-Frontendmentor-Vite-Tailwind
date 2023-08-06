import { useDispatch, useSelector } from "react-redux"
import { cleanComplete } from "../../redux/actions"

const TodoComputed = () => {
    const dispatch = useDispatch()
    const allToDos = useSelector(state => state.allToDos) 

    const cantItemsComplete = allToDos.filter(todo => todo).length
        
    return (
        <section className='py-4 px-4 flex justify-between'>
            <span className={`${cantItemsComplete === 0 && 'text-red-500'} text-gray-400`} >{cantItemsComplete} items left</span>
            <button className='text-gray-400' onClick={() => dispatch(cleanComplete())} >Clear completed</button>
        </section>
    )
}

export default TodoComputed