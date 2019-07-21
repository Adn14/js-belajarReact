import React from 'react'
import TodoList from './TodoList';

//App berfungsi sebagai main component
//component render js lain dimasukin ke render App
//ex : <TodoList/>
//create App component using class (bawah)
//using class based, you can add state

class App extends React.Component {
    //create render function (bawah)

    render() {
        //return what we want to be rendered
        return(
            <TodoList/>
            
        )
    }
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