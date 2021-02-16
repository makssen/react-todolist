import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText) {
            setTodos([
                ...todos,
                {
                    id: Math.random() * 1000,
                    text: inputText,
                    completed: false
                }
            ]);
            setInputText('');
        }
    }

    return (
        <form className="todo-form">
            <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Add task" />
            <button onClick={submitTodoHandler}>+</button>
        </form>
    );
}

export default Form;