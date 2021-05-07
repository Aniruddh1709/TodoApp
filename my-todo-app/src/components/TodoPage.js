import {useState} from 'react';
import Todo from './Todo'
import './TodoPage.css'


const todos=['Clean Car','Wash Clothes','Study']

function TodoPage() {
    const[newtodovalue , setnewtodovalue]=useState('')
    const[Todos,setTodos]=useState(['Clean Car','Wash Clothes','Study'])
 

    const addTodo = (e) =>{
    let v = document.getElementById('newTodo')
    let val = v.value
    console.log(val)
    todos.push(val)
    
    setTodos(todos)
    }
    const deleteTodo = (e) =>{
        let v = document.getElementById('newTodo')
        let val = v.value
        console.log(val)
        todos.push(val)
        setTodos(todos)
        }
        
    return (
        <div className="BodyContainer">
            <div className="InsideBody">
                <div className="UpperInsideBody">
                    <input placeholder="New Todo,40 Character Limit" id="newTodo" maxlength = "40" value={newtodovalue} onChange={(e)=>setnewtodovalue(e.target.value)} className="NewTodo"/>
                    <div className="ButtonContainer">
                        <button className="but" onClick={addTodo}>Add</button>
                        <button className="but" onClick={deleteTodo}>Delete</button>
                    </div>
                </div>
                <div className="TodoContainer">
                   {<Todo todos={Todos}/>}
                    
                </div>

            </div>
        </div>
    )
}

export default TodoPage
