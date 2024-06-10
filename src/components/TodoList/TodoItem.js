import {Component} from "react";
import {ReactComponent as TrashIcon} from "bootstrap-icons/icons/trash.svg";

const todoClasses = "d-flex align-items-center list-group-item border rounded-1 my-1";
const btnClasses = "btn btn-sm btn-outline-secondary mx-1 py-0 opacity-25 border-0"


export default function TodoItem({id, done, text}) {
    const textClasses = `mx-1 my-0 ps-3 flex-grow-1 ${done ? "text-decoration-line-through text-black-50" :""}`;

    return (
        <li className={todoClasses}>
            <input className="form-check-input mx-1 my-0" type="checkbox" checked={done}/>
            <p className={textClasses}>{text}</p>
            <button className={btnClasses}>
                <TrashIcon/>
            </button>
        </li>
    );
}