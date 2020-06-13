import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const{title, handleDelete, handleEdit}=this.props
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between align-items-center">
                    <h3>{title}</h3>
                    <div>
                        <span  onClick={handleEdit} className="mx-2 text-success">
                            <i className="fa fa-pencil"></i>
                        </span>
                        <span onClick={handleDelete} className="mx-2 text-danger">
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                </li>       
            </div>
        );
    }
}

export default TodoItem;