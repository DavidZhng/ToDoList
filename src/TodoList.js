import React, { useState }  from 'react'
import TodoItem from "./TodoItem";

export default function TodoList() {
const [tasks, setTasks] = useState([]);
const [count, setCount] = useState(0);
const [input, setInput] = useState('');
const [nextId, setNextId] = useState(0);

const addTask = (input) => {
    setTasks([...tasks, { id: nextId, task: input}]);
    setCount(count + 1);
    setNextId(nextId + 1);
}

const inputChanged = (e) => {
    setInput(e.currentTarget.value)
}

const inputSubmitted = (e) => {
    e.preventDefault();
    if (input !== ""){
        addTask(input);
        setInput("");
    }
}

const removeItem = (id) => {
    let filtered = tasks.filter(task => {
        return task.id !== Number(id);
    });
    setTasks(filtered);
    setCount(count - 1);
}

  return (
    <div className='todoListMain'>
        <h1> To-Do</h1>
        <div className='count'>
        # of To-Do's: {count}
        </div>
        <div className='header'>
            <form onSubmit={inputSubmitted}>
            <input placeholder='Enter new task' value={input} onChange={inputChanged}></input>
            <button type='submit'>Add</button>
            </form>
        <div>
            {tasks.map(todo => {
                return (
                    <TodoItem todo={todo} removeItem={removeItem} />
                )
            })}
        </div>
      </div>
    </div>
  )
}