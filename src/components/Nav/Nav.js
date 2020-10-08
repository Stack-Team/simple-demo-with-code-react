// import React from "react";

// const Nav = (props) => {
//     return <nav>{props.toggle ? <h1>Nav</h1> : ''}</nav>
// }

// export default Nav;


import React from 'react';
import './Nav.css';


function Nav(props) {
    return (
        <nav>
            <header className='navbar'>
                <div className='navbar__title navbar__item' onClick={props.setToggle}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bars fa-w-14 fa-2x"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" className=""></path></svg>
                </div>
                <div className='navbar__item'>About Us</div>
                <div className='navbar__item'>Contact</div>
                <div className='navbar__item'>Help</div>        
            </header>
        </nav>
    )
}

export default Nav;