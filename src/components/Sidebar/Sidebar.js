import React from 'react';
import './Sidebar.css';




function Sidebar(props) {
    return (
        <ul className={props.toggle ? 'fadeInLeft' : 'fadeOutLeft'}>
            <li className="item">Home</li>
            <li className="item">About</li>
            <li className="item" onClick={props.setPosts}>Posts</li>
            <li className="item" onClick={props.setUsers}>Users</li>
            <li className="item" onClick={props.setComments}>Comments</li>
            <li className="item">Contact</li>
        </ul>
    )
}

export default Sidebar;