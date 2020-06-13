import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    render() {
        const{item,handleDeleteAll, handleDelete,handleEdit} = this.props
        return (
            <div className="card my-5 ">
                <div className="card-header">Your Todo Jobs:</div>
                <div className="card-body">
                    <ul className="list-group">
                       {item.map(item=>{return<TodoItem  
                       key={item.id} 
                       title={item.title} 
                       handleDelete={()=>handleDelete(item.id)}
                       handleEdit = {()=>handleEdit(item.id)}
                       />})}
                    </ul>
                </div>
                <button  onClick={handleDeleteAll} className="btn btn-danger"> Clear All </button>
            </div>  
        );
    }
}

export default TodoList;

