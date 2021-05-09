import {useState} from 'react';
import Todo from './Todo'
import './TodoPage.css'


const todos=['Clean Car','Wash Clothes','Study']

function TodoPage() {
    const[newtodovalue , setnewtodovalue]=useState('')
    const[Todos,setTodos]=useState(['Clean Car','Wash Clothes','Study'])
    const [todoState,setTodoState]=useState(new Array(Todos.length).fill(0))
 
    
    const addTodo = (e) =>{
    let v = document.getElementById('newTodo')
    let val = v.value
    Todos.push(val)
    todoState.push(0)
    }


    const deleteTodo = () =>{
       
        var filtered=  Todos.filter(function(value,index,arr){
               if(todoState[index]!=1){
                   return value;
               } 
          })
          setTodos(filtered)
        
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
                   {<Todo todoState={todoState} todos={Todos}/>}
                    
                </div>

            </div>
        </div>
    )
}

export default TodoPage
