import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from './todoListSlice'

const TodoList = () => {
    const todoTask = useSelector(state => state.todo)
    const [editTask, setEditTask] = useState(
        {
            id: null,
            task: ''
        }
    )
    const dispatch = useDispatch();

    const handleEditTask = (task) => {
        setEditTask(task)
    }

    const handleSaveTask = (task) => {
        if(task==='') return;
        dispatch(updateTodo(
          task
        ))
        setEditTask(null)
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <div className="todo-list">
            {todoTask.map((task) => {
                return (
                    <div className="todo-item" key={task.id}>
                        {editTask && editTask.id === task.id ? (
                            <>
                                <input type="text" value={editTask.task} onChange={(e) => setEditTask((prev) => ({ ...prev, task: e.target.value }))} />
                                <button onClick={() => handleSaveTask(editTask)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{task.task}</span>
                                <button onClick={() => handleEditTask(task)}>Edit</button>
                            </>
                        )}

                        <button className="delete-btn" onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList