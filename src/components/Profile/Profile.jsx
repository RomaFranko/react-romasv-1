import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img alt='empty' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GThfhwIOmVv1PQBmRa_DvPtSG200woWAjpE_VA_j4wDsFzw2&s' />
            </div> 
            <div>
                ava + description
            </div> 
            <MyPosts />

        </div>
    )
}

export default Profile;