import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="TodoList">
            <ul>
                {todos.map(item => <Todo setTodos={setTodos} todos={todos} key={item.id} todo={item} text={item.text} />)}
            </ul>
        </div>
    );
}

export default TodoList;