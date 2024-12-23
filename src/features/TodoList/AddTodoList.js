import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, deleteALLTodo } from './todoListSlice';

const AddTodoList = () => {
    const [task, setTask]=useState('')
    const dispatch=useDispatch();

    const handleAddTask=()=>{
        if(task==='') return;
        dispatch(addTodo(task));
        setTask('');
    }

    const handleDeleteALLTask=()=>{
        dispatch(deleteALLTodo());
    }

    return (
        <div className='add-todo'>
            <input type="text" placeholder='Add a new task' value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <button className='delete-all' onClick={handleDeleteALLTask}>Delete All</button>

        </div>
    )
}

export default AddTodoList