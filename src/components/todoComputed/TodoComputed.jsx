import { useDispatch, useSelector } from "react-redux"
import { cleanComplete } from "../../redux/actions"

const TodoComputed = (/* {cleanComplete} */) => {
    const dispatch = useDispatch()
    const allToDos = useSelector(state => state.allToDos) 

    const cantItemsComplete = allToDos.filter(todo => !todo.complete).length
        
    return (
        <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>{cantItemsComplete} items left</span>
            <button className='text-gray-400' onClick={() => dispatch(cleanComplete())} >Clear completed</button>
        </section>
    )
}

export default TodoComputed