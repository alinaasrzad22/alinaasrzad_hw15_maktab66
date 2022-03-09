import React from "react";
import './Todolist.css'
function Todolist (props){
   const items = props.items;
   const Todolist= items.map(item=>
    {
        return <div className="list" key={item.key}>
            <p>
                <input type="text"
                 id ={item.key}
                value={item.text}
                onChange={
                    (e)=>{
                        props.setUpdate(e.target.value,item.key)
                    }  
                }   
                />
           
            <span>
                <i onClick={()=> props.deleteItem(item.key)} className="faicons"></i>
            </span>
       
        </p>
        </div>
    )
}

    return(
        <div>{Todolist}</div>
        )

    }
export default Todolist