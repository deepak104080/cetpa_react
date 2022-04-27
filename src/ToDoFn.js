import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';


const ToDoFn = () => {
    const [input_val, setInput] = useState('');
    const [toDoList, setToDoList] = useState([]); // array of objects - id, todotext, status

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleClick = () => {
        let temp = {
            // id: parseInt(Math.random()*10000),
            id: nanoid(),
            todotext: input_val,
            status: false
        }
        setToDoList([...toDoList, temp]);
        setInput('');
    }
    const markDone = (id) => {
        console.log('done marked...', id);
        let temp = toDoList.map((item) => {
            if(item.id === id) {
                item.status = !item.status;
            }
            return item;
        })
        setToDoList(temp);
    }
    const markDelete = (id) => {
        console.log('mark delete...', id);
        let temp = toDoList.filter((item) => {
            return item.id !== id
        });
        setToDoList(temp);
    }
    useEffect(() => {
        console.log('input', input_val);
        console.log('setToDo List', toDoList);
    })
    return(
        <>
            <h2>To Do App</h2>
            <div className='row'>
                <div className='col-12'>
                    <input type="text" value={input_val} onChange={handleChange}/>
                    <button className='btn btn-primary btn-sm' onClick={handleClick}>Add in To Do</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-6 px-3 py-3'>
                    <div className='bg-secondary bg-opacity-25 px-3 py-3'>
                    <h3>Pending List</h3>
                    <hr></hr>
                        {toDoList && toDoList.map((item, index) => (
                            !item.status && <>
                            <div key={item.id} className="row">
                                <span className="col-6" key={`altudo ${index}`}>{item.todotext}</span>
                                <button className='col-2 btn btn-success btn-sm text-center' onClick={() => markDone(item.id)}>Done</button>
                                <button className="col-2 btn btn-danger btn-sm text-center" onClick={() => markDelete(item.id)}>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className='col-6 px-3 py-3'>
                    <div className='bg-secondary bg-opacity-25 px-3 py-3'>
                    <h3>Completed List</h3>
                    <hr></hr>
                        {toDoList && toDoList.map((item, index) => (
                            item.status && <>
                            <div key={item.id} className="row">
                                <span className="col-6" key={`altudo ${index}`}>{item.todotext}</span>
                                <button className='col-4 btn btn-success btn-sm text-center' onClick={() => markDone(item.id)}>Mark Not Done</button>
                                <button className="col-2 btn btn-danger btn-sm text-center" onClick={() => markDelete(item.id)}>Delete</button>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoFn;