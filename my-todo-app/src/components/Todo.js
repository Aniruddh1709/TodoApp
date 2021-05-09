import './Todo.css'
import {useEffect} from 'react';
import Checkbox from "react-custom-checkbox";

function Todo({todos,todoState}) {

    useEffect(() => {
      },[todos]);

    return (
            todos.map((todo,key) => (
                <div key={key} className="container">
                    <Checkbox
                    name="my-input"
                    checked={false}
                    onChange={(checked)=>{
                        if(checked){
                            todoState[key]=1;
                        }else{
                            todoState[key]=0;
                        }
                    }}
                    borderColor="black"
                    style={{ cursor: "pointer",color:"black" }}
                    labelStyle={{ marginLeft: 5, userSelect: "none",fontSize:"25px" }}
                    label={todo}
                    />
                </div>
             ) )
    )
}

export default Todo;
