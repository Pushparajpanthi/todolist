import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import {v1 as uuid} from "uuid";

class App extends Component {
  constructor(){
    super()
    this.state = {
      todo:[],
      item:'',
      id:uuid(),
      editItem:false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    })
  }


  handleSubmit = (e)=>{
   
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
   
    const updatedItems = [...this.state.todo, newItem]
  
    this.setState({
      todo:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
    e.preventDefault();
    
  }

  handleDeleteAll = ()=>{
    this.setState({
      todo:[]
    })
    
  }

  handleDelete=(id)=>{
    const updatedItems = this.state.todo.filter(item=>item.id !== id)
    this.setState({
        todo:updatedItems
      })

  }


  handleEdit = (id)=>{
    const updatedItems = this.state.todo.filter(obj=>obj.id !== id)
    const selectedItem = this.state.todo.find(item=>item.id===id);
    this.setState({
      todo:updatedItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
  }

  render() {
    return (
      <div className="container">
        <TodoForm 
        item={this.state.item} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
        editItem = {this.state.editItem}
        />

        <TodoList 
        item={this.state.todo} 
        handleDeleteAll={this.handleDeleteAll} 
        handleDelete={this.handleDelete}
        handleEdit = {this.handleEdit}
        />
      </div>
    );
  }
}

export default App;

