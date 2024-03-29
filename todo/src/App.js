import React, { Component } from 'react'
 import Todolist from './Todolist'
 import './Todolist'
class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     items:[],
     currentItem:{
       text :'',
       key:'',
     }
   }
  
   this.handleInput=this.handleInput.bind(this);
   this.addItem=this.addItem.bind(this);
   this.deleteItem=this.deleteItem.bind(this);
   this.setUpdate.this.setUpdate.bind(this);
 }
}
 handleInput(e){
   this.setState({
       currentItem:{
       text:e.target.value,
       key:Date.now()
     }
   })
 }

 addItem(e){
   e.preventDefault();
   const newItem = this.state.currentItem;
if (newItem.text !== " " ){
  const newItems=[...this,state.items,newItem];
  this.setState({
    items:newItems,
    currentItem:{
      text:'',
      key:'',
    }
  })
}

}
deleteItem(key){
  const filteredItems = this.state.items.filter(item=>
    item !==key);
    this.setState({
        items:filteredItems
    })
 
}
setUpdate(text,key){
  const items = this.state.items;
  items.map(item=>{
    if(item.key===key){
      item.text=text;

    }
  })
  this.setState({
    items:items
  })

}

 render(){
    return (
    <div className="App"> 
      <header>
        <form id="to-do-form" onSubmit={this.addItem} >
         <input type="text" placeholder="enter text"
         value={this.state.currentItem.text}
         onChange={this.handleInput}/>
         <button type="submit" >ADD</button>
        </form>
      </header>
      <Todolist items={this.state.items}
      deleteItem = {this.state.items}
      setUpdate = {this.setUpdate}
    />
    </div> 
    );
  }

export default App

