import { useDispatch, useSelector } from 'react-redux';
import FormAddTodo from '../../formAddTodo/FormAddTodo'
import ListTodo from '../../listTodo/ListTodo'
import { DragDropContext } from "@hello-pangea/dnd";
import { reorder } from '../../listTodo/reorderList';
import { reorderList } from '../../../redux/actions';

const Main = () => {

    const dispatch = useDispatch()
    const allToDos = useSelector(state => state.allToDos)

    const handleDragEnd = (result) => {
        const { destination, source } = result

        if (!destination) return;

        if (source.index === destination.index && source.droppableId === destination.droppableId) return;

        dispatch(reorderList(reorder( allToDos, source.index, destination.index)) )
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