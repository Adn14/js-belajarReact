import React from 'react'
import TodoListitem from './TodoListitem'
import './Styles.css'
// beause we need state, we use class based components
//instead of exporting class in the bottom
// u can write 'export default' infront of class

export default class TodoList extends React.Component {
    //add state to application
    state = {
        list_title : "",
        current_value : '',
        todos : []
    }
    
    render () {
        return (

            //classname "todo-list" in div is a CSS class 
            //in Styles,css

            <div className="todo-list">
                <h2>todo list...</h2>
                <label>Title</label>
                <br></br>
                <input 
                placeholder="Enter title..." 
                type="text" value={this.state.list_title}
                onChange={(event) => {this.setState( {list_title : event.target.value})}}/>
                
                {/* put to do list item here */}
                {/* <TodoListitem />
                <TodoListitem />
                <TodoListitem />                 */}
                
                {
                    //use map function to access state todos data (loopin throuh all)
                    this.state.todos.map(todo => {
                        return (
                            //div akan diulang render nya sesuai jumlah data todo
                            <div>
                                <TodoListitem title={todo.title} completed={todo.completed}/>
                                {/* {todo.title} and {todo.completed.toString()} */}
                            </div>    
                        )
                    })
                }
                <br></br>
                <input placeholder="Todo Item Name..." 
                type="text"
                value = {this.state.current_value}
                onChange= {(event) => {this.setState({current_value : event.target.value})}}
                />
                <button onClick= {() => {this.setState({todos : [{title : this.state.current_value, completed : false}]})}}>Add</button>
            </div>
        )

    }
}