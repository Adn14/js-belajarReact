import React from 'react'
import TodoListitem from './TodoListitem'
import './Styles.css'
import axios from 'axios'

// beause we need state, we use class based components
//instead of exporting class in the bottom
// u can write 'export default' infront of class

export default class TodoList extends React.Component {
    //add state to application
    constructor(){
        super()
        this.state = {
            list_title : "",
            current_value : '',
            todos : []
        }

        //binding function deleteToDoByIndex so it can be used in other js
        this.deleteToDoByIndex = this.deleteToDoByIndex.bind(this)
    }
    

    deleteToDoByIndex(index){
        this.setState( prevState => (
            {
                todos : [
                    // mengisi todos dengan nilai todos sebelumnya dari kecuali indeks yang didelete
                    ...prevState.todos.slice(0, index), 
                    ...prevState.todos.slice(index +1)
                ],
            }
        ))

    }

    componentDidMount(){
        // mengambil data dari jsonplaceholder
        axios.get("https://jsonplaceholder.typicode.com/todos/5")
        .then(data => this.setState({todos : [{ id : data.data.id, title : data.data.title, completed : data.data.completed }]}))
        .catch(error => console.log(error))
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
                <br></br><br></br>
                {/* put to do list item here */}
                {/* <TodoListitem />
                <TodoListitem />
                <TodoListitem />                 */}
                
                {
                    //use map function to access state todos data (loopin throuh all)
                    this.state.todos.map((todo, index) => {
                        return (
                            //div akan diulang render nya sesuai jumlah data todo
                            <div>
                                {/* pass the delete function and index usng props */}

                                <TodoListitem 
                                key={index} 
                                index = {index}
                                deleteToDoByIndex = {this.deleteToDoByIndex}
                                title={todo.title} 
                                completed={todo.completed}/>
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
                <button onClick= {() => {
                    this.setState( prevState => 
                        ({ 
                            todos : prevState.todos.concat(
                            {title : this.state.current_value, completed : false}
                            ),
                            // reset the text input hint
                            current_value : '' 
                        }))
                    }}>Add</button>
            </div>
        )

    }
}