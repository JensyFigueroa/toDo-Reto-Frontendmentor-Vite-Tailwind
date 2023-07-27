import { useSelector } from "react-redux"

const TodoComputed = () => {
    const allToDos = useSelector(state => state.allToDos) 
        
    return (
        <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>{allToDos.length} items left</span>
            <button className='text-gray-400'>Clear completed</button>
        </section>
    )
}

export default TodoComputed