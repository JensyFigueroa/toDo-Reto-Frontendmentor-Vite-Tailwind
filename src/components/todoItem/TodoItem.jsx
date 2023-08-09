
import IcoCross from '../icons/IcoCross'
import IcoCheck from '../icons/IcoCheck'
import { deleteTodo, stateToDo } from '../../redux/actions/index'

import { useDispatch } from 'react-redux';
import React from 'react';

const TodoItem = React.forwardRef(({ todo, ...props }, ref) => {
    
    const dispatch = useDispatch()
    const {id, title, complete} = todo;


    return (<article {...props} ref={ref} className='flex gap-4 px-4 border-b-2 border-b-gray-400 py-4'>

            <button className={`rounded-full border-2 h-5 w-5 flex justify-center items-center ${complete && 'bg-gradient-to-br from-cyan-400 via-purple-400 to-fuchsia-700'} `} onClick={() => dispatch(stateToDo(id))}>{complete && <IcoCheck />}</button>
            
            <p className={`text-gray-400 grow ${complete && 'line-through'}`}>{title}</p>
            
            <button className='flex-none' onClick={() => dispatch(deleteTodo(id))}><IcoCross className='fill-red-500' /></button>

        </article>

    )
}) 

export default TodoItem