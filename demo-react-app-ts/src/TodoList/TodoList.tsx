import React, { useState, useEffect } from "react";
import "./TodoList.css";

enum Priority {
    "LOW", "MEDIUM", "HIGH"
}

interface Todo {
    id: number,
    name: string,
    status: boolean, // 1 = complete, 0 = incomplete
    priority: Priority
}

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState([] as Todo[]);
    const [newTodo, setNewTodo] = useState({id: 0, name: "", status: false, priority: Priority.LOW} as Todo);

    useEffect(() => {
        console.log(newTodo);
    }, [newTodo]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, id, value } = event.target;
        if (name === "name") {
            // setNewTodo({
            //     id: newTodo.id,
            //     name: value,
            //     status: newTodo.status,
            //     priority: newTodo.priority,
            // });
            setNewTodo({...newTodo, name: value});
        }

        if (name === 'status') {
            // setNewTodo({
            //     id: newTodo.id,
            //     name: newTodo.name,
            //     status: Boolean(parseInt(id)),
            //     priority: newTodo.priority,
            // });
            console.log(id);
            setNewTodo({...newTodo, status: Boolean(parseInt(id))});
        }

        if (name === 'priority') {
            // setNewTodo({
            //     id: newTodo.id,
            //     name: newTodo.name,
            //     status: newTodo.status,
            //     priority: parseInt(id),
            // });
            setNewTodo({...newTodo, priority: parseInt(id)});
        }
    }

    const addNewTodo = () => {
        setTodos([...todos, newTodo]);
    }

    return (
        <div className="container">
            <h1>TodoList</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum harum perspiciatis quisquam debitis similique, atque fugiat doloribus neque at dolores placeat itaque voluptates facere ducimus! Ea cumque minus aspernatur?</p>

            <div className="add">
                <p className="text">Add Todo: </p>
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" value={newTodo.name} onChange={handleInputChange}/>
                </div>

                <div className="inputs">
                    <label htmlFor="1">Complete</label>
                    <input type="radio" name="status" id="1" onChange={handleInputChange}/>
                    <label htmlFor="0">InComplete</label>
                    <input type="radio" name="status" id="0" onChange={handleInputChange}/>
                </div>

                <div className="inputs">
                    <label htmlFor="2">Priority High</label>
                    <input type="radio" name="priority" id="2" onChange={handleInputChange}/>
                    <label htmlFor="1">Priority Medium</label>
                    <input type="radio" name="priority" id="1" onChange={handleInputChange}/>
                    <label htmlFor="0">Priority Low</label>
                    <input type="radio" name="priority" id="0" onChange={handleInputChange}/>
                </div>

                <button onClick={addNewTodo}>Add</button>
            </div>

            <div className="list">
                {todos.length > 0 ? 
                    (   
                        todos.map((todo, index) => {
                            return (
                                <div key={index} className="todo">
                                    <h3>{index} {todo.name}</h3>
                                    <p className="text">{todo.status ? "Complete" : "Incomplete"}</p>
                                    <p className="text">{todo.priority}</p>
                                </div>
                            )
                        })
                    ) 
                    : (<p>No Todos Found!</p>)
                }
            </div>
        </div>
    );
}