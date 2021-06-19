import React from 'react'
import TodoList from './TodoList'
import {useState} from 'react';

function AddTodo({addTodoTasks, tasks, deleteTodoTask}) {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [tagN, setTagN] = useState(1);

    const todoStyle = {
        width: '60%',
        margin: '2rem auto'
    }

    const handleChange = (e) => {
        setTodoTitle(e.target.value);
    }

    const handleDescChange = (e) => {
        setTodoDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoTitle === '' || todoDescription === ''){
            return ;
        }

        const newTodo = {
            title: todoTitle,
            description: todoDescription,
            id: tagN
        }

        addTodoTasks(newTodo);
        setTagN(tagN + 1);
        setTodoTitle('');
        setTodoDescription('');
    }

    return (
        <section>
            <form style={todoStyle} onSubmit={handleSubmit}>
                 <h2>Todo Title:</h2>
                <input type="text"
                    id="todoTitleInput" 
                    className="shadow-sm w-full mt-2 mb-4 p-2 rounded"
                    onChange={handleChange}
                    value={todoTitle}/>
                <h2>Todo Description:</h2>
                <input type="text"
                    id="todoDescriptionInput"
                    className="shadow-sm mt-2 mb-4 w-full p-2 rounded"
                    value={todoDescription}
                    onChange={handleDescChange}/>
                <button
                    className="rounded-sm bg-green-500 py-2 px-3 mt-2 text-white hover:bg-green-600 ">
                Add</button>        
            </form>
            <TodoList tasks={tasks} deleteTodoTask={deleteTodoTask} todoStyle={todoStyle}/>
        </section>
       
    )
}

export default AddTodo
