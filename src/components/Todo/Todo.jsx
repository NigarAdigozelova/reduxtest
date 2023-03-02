import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import TodoList from '../TodoLIst/TodoList';
import { addTodo } from '../../reducers/TodoSlice';

import "./todo.scss"

const Todo = () => {
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState("")

    const addInputVal = (e) => {
         setInputVal(e.target.value)

    }
    const addTodoList = () => {
        setInputVal("")
        dispatch((addTodo(inputVal)))
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        setInputVal("")
        dispatch((addTodo(inputVal)))
    }



    return (
        <div className='todo'>
            <h1 className='title'>Todo list</h1>
            <form className='todo-form' onSubmit={onSubmitForm}>
                <input type="text" placeholder='Enter todo...' onChange={addInputVal} value={inputVal} />
                <button type='button' onClick={addTodoList}>Add</button>

                <TodoList />
            </form>

        </div>
    )
}

export default Todo
