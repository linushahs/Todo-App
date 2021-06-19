import React from 'react'
import {FaCheckSquare} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';

function TodoList({tasks, deleteTodoTask, todoStyle}) {
    return (
        <div style={todoStyle}>
            {tasks.map((task,id) => (
                 <div className="flex justify-between items-center shadow rounded mb-3 py-3 px-4"
                 style={{backgroundColor: 'white', color: 'black'}}
                 key={id}>
                         <div>
                             <h2 className="text-xl uppercase">{task.title}</h2>
                             <p className="opacity-50 text-base">{task.description}</p>
                         </div>
                         <div className="flex items-center">
                             <button className="focus:outline-none">
                                 <FaCheckSquare className="w-7 h-7 text-green-500 mr-4 hover:opacity-80 "/>
                             </button>
                             <button onClick={() => deleteTodoTask(task.id)} className="focus:outline-none">
                                 <MdDelete className="w-8 h-8 text-red-500 hover:opacity-80 "/>
                             </button>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList
