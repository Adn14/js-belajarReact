import React from 'react'

//props dapat dari TodoList (title dan completed)
const TodoListitem = (props) => {
    
    return (
        <div>
            <input type="checkbox" checked={props.completed} ></input>
            <span>
                {
                    props.title
                }
            </span>
            <button onClick={ () => props.deleteToDoByIndex(props.index )}>Delete Todo</button>
        </div>
    )
}

export default TodoListitem