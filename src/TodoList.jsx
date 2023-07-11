import React from "react";
const TodoList = (props) => {

    return (
        <>
            <li className='list-group-item' >
                <button type="button"
                    onClick={
                        () => { props.onDelete(props.id) }
                    }
                    className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {props.value}
            </li>
        </>
    )
}
export default TodoList;