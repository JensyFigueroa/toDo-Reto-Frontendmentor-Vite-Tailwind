import { useDispatch } from "react-redux"
import { filterTodos } from "../../redux/actions"

const FilterTodo = () => {

    const dispatch = useDispatch()

    return (
        <section className="container mx-auto mt-8 px-4">
            <div className='bg-white rounded-md flex justify-evenly p-4'>
                <button className='text-blue-600' onClick={() => dispatch(filterTodos('ALL'))}>All</button>
                <button className='hover:text-blue-600' onClick={() => dispatch(filterTodos('ACTIVE'))}>Active</button>
                <button className='hover:text-blue-600' onClick={() => dispatch(filterTodos('COMPLETED'))}>Completed</button>
            </div>
        </section>
    )
}

export default FilterTodo