import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';
const App = () => {
    const [item, setItem] = useState('');
    const [todolist, setTodoList] = useState([]);
    const btnClick = (event) => {
        setTodoList((oldvalue) => {
            return [...oldvalue, item];
        });
        setItem('');
    }
    const txtChange = (event) => {
        setItem(event.target.value);
    }
    const btnCloseClick = (id) => {
        console.log(id);
        setTodoList((oldvalue) => {
            return oldvalue.filter((array, index) => {
                return index !== id;
            })
        });
    }
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <p className="header">ToDo List</p>
                </div>
                <div className="content">
                    <input type='text' className='form-control' value={item} onChange={txtChange} placeholder='Add Items' />
                    <button className='btn btn-primary' onClick={btnClick}>+</button>
                </div>
                <div className='innercontent'>
                    <ul className='list-group'>
                        {
                            todolist.map((value, index) => {
                                return (
                                    <TodoList onDelete={btnCloseClick} key={index} value={value} id={index} />)
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
export default App;