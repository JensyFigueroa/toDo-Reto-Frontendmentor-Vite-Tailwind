import { useState } from "react"
import { useDispatch } from "react-redux"
import {add_Todo} from '../../redux/actions/index.js'
import Swal from 'sweetalert2'

const FormAddTodo = () => {
    const dispatch = useDispatch()
    const [newTodo, setnewTodo] = useState({
        title:'',
        complete: false
    })

    const [errors, setErrors] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        setnewTodo({...newTodo, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

            dispatch(add_Todo({id: Date.now(), ...newTodo, }))
            setnewTodo({
                title:'',
                complete: false
            })

            Swal.fire({
                position:'center',
                icon:'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
    }

    return (
        <form onSubmit={handleSubmit} className=" bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
            {newTodo.title.length > 0 && <button type="submit" /* className="flex rounded-full border-2 h-5 w-5" */><i className="fa-solid fa-circle-plus text-green-500"></i></button>}
            <input className="w-full text-gray-500 outline-none" type="text" placeholder="Create a new todo..." name ='title'onChange={handleChange} value={newTodo.title}/>

        </form>

    )
}

export default FormAddTodo