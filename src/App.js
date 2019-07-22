import React from 'react'
import TodoList from './TodoList';
import { Link, Route, Switch } from 'react-router-dom';

//App berfungsi sebagai main component
//component render js lain dimasukin ke render App
//ex : <TodoList/>
//create App component using class (bawah)
//using class based, you can add state
//ashiap2

class App extends React.Component {
    //create render function (bawah)

    render() {
        //return what we want to be rendered
        return(
            
            <React.Fragment>
                {/* mengarahkan routing link todos ke komponen todolist */}
                <Navigation />
                <Switch>
                    <Route path='/todos/' component={TodoList}/>
                    <Route path='/profile/' component={Profile}/>
                </Switch>

                {/* <TodoList/> */}
            </React.Fragment>
            
            
        )
    }
}

const Profile = () => {
    return (
        <div>
            Profile
        </div>
    )
}

const Navigation = () => {
    return (
        <div>
            <Link to='/todos'>Todo List</Link>
            <Link to='/profile'>Profile</Link>

        </div>
    )
}

//create App component using const
// note that if we are using const
// you cannot provide state 
// unless you use react feature called hooks
// const App = () => {
//     return (
//         <div>
//             We created another react component.
//             Using const. :)
//         </div>
//     )
// }

export default App