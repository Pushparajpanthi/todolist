import React from 'react';

function TodoForm(props) {
    return (
        <div className="card ">
            <div className="card-header">Please Enter your Todo Item:</div>
            <div className="card-body my-3">
                <form onSubmit={props.handleSubmit} id="a-form">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" ><i className="fa fa-book" ></i> </span>
                        </div>

                        <input type="text"
                            className="form-control"
                            placeholder="Add a Todo Item"
                            value={props.item}
                            onChange={props.handleChange} />
                    </div>
                </form>
            </div>
            <button 
            type="submit" 
            form="a-form" 
            className={props.editItem ? "btn btn-success":"btn btn-primary"}> 
            {props.editItem===true?"Edit Item":"Add Item"}</button>
        </div >
    );
}

export default TodoForm;