import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));
    }

    return (
        <div className="Todo">
            <li className={todo.completed ? 'completed' : ''}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="delete-btn"><i className="fas fa-trash-alt"></i></button>
        </div>
    );
}

export default Todo;