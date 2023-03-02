import React from 'react'
import { useSelector } from 'react-redux';

const TodoList = () => {
  const { list } = useSelector((state) => state.todo)
  return (
    <div>
      <ul>

        {list.map((items, key) => {
          return <li key={key}>{items}</li>;
        })}
      </ul>

    </div>
  )
}

export default TodoList
