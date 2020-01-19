import React from 'react';
import s from './Navbar.module.css'; 
// s - це просто назва класу, звідки будуть підтягуватися 
// інтерпретаторорм згенеровані значення ClassName 

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="#profile">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="#messages">Messages</a>
            </div>
            <div className={s.item}>
                <a href="#news">News</a>
            </div>
            <div className={s.item}>test</div>
            <div className={s.item}>
                <a href="#settings">Settings</a>
            </div>
        </nav>

    )
}

export default Navbar;