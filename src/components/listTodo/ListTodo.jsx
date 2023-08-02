import TodoComputed from "../todoComputed/TodoComputed"
import TodoItem from "../todoItem/TodoItem"

const ListTodo = () => {
    return (
        <div className="mt-8 bg-white rounded-md dark:bg-gray-800">

            <TodoItem />

            <TodoComputed />
            
        </div>
    )
}

export default ListTodo