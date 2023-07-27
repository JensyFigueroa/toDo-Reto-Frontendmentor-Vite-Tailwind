import FormAddTodo from '../../formAddTodo/FormAddTodo'
import ListTodo from '../../listTodo/ListTodo'

const Main = () => {
    return (
        <main className="container mx-auto mt-8 px-4">

            <FormAddTodo />

            <ListTodo />

        </main>
    )
}

export default Main