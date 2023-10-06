import React, {useState} from "react";
import '../css/Todo.css';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState(''); 

    const handleAddTask = () => {
        if(inputValue.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, inputValue]);
            setInputValue('');
        }
    }

    return(
        <>
            <h1 className="header">My To-Do List</h1>
            <div className="inputContainer">
                <input 
                    type="text" 
                    placeholder="Add a new task" 
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className="taskInput"
                />
            </div>
            {inputValue.trim() && (
                <button onClick={handleAddTask} className="addButton">
                    ADD NOW!
                </button>
            )}
            <ul className="taskList">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;