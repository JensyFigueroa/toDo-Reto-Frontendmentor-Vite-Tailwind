import { useDispatch } from "react-redux"
import { filterTodos } from "../../redux/actions"
import { useState } from "react"

const FilterTodo = () => {

    const dispatch = useDispatch()

    const [filter, setFilter] = useState('ALL')

    console.log(filter,'filter')

    return (
        <section className="container mx-auto mt-8 px-4">
            <div className='bg-white rounded-md flex justify-evenly p-4 dark:bg-gray-800 '>
                <button className={`${filter === 'ALL' && 'text-blue-600'} hover:text-blue-600`} onClick={() => {dispatch(filterTodos('ALL')), setFilter('ALL')}}>All</button>
                <button className={`${filter === 'ACTIVE' && 'text-blue-600'} hover:text-blue-600`} onClick={() => {dispatch(filterTodos('ACTIVE')), setFilter('ACTIVE')}}>Active</button>
                <button className={`${filter === 'COMPLETED' && 'text-blue-600'} hover:text-blue-600`} onClick={() => {dispatch(filterTodos('COMPLETED')), setFilter('COMPLETED')}}>Completed</button>
            </div>
        </section>
    )
}

export default FilterTodo