import React from "react";


const navLinkStyle = {cursor: "pointer"};
const listItems = [
    {id: 1, name: "Importante", active: false},
    {id: 2, name: "Film da vedere", active: true},
    {id: 3, name: "Libri da leggere", active: false}
]

function List({name, active}) {
    const classes = `nav-link ${active ? 'active' : ''}`
    return (
        <li className={classes} style={navLinkStyle}>
            {name}
        </li>
    );
}

function getListItems() {
    return listItems.map((l) => (
        <List key={l.id} active={l.active} name={l.name}/>
    ));
}


export default function ListNames() {
    const listItems = getListItems();
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            {listItems}
        </ul>
    );
}