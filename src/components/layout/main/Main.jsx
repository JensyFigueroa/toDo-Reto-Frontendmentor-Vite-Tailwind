import FormAddTodo from '../../formAddTodo/FormAddTodo'
import ListTodo from '../../listTodo/ListTodo'
import { DragDropContext} from "@hello-pangea/dnd";

const Main = () => {

    const handleDragEnd = (result) => { 
        console.log(result)
     }

    return (
        <main className="container mx-auto mt-8 px-4 md:max-w-xl">

            <FormAddTodo />

            <DragDropContext onDragEnd={handleDragEnd}>
                <ListTodo />
            </DragDropContext>

        </main>
    )
}

export default Main