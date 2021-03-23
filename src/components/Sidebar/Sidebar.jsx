import React from 'react'
import Avatar from './Avatar/Avatar'
import Navigation from './Navigation/Navigation'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Sidebar.module.css'

const Sidebar = (props) => {
    let s = 'sidebar'
    return <aside className={`${s} ${style.sidebar}`}>
        <div className={style.sidebarWrapper}>
            <Avatar />
            <ProfileInfo />
            <Navigation />
        </div>
    </aside>;
}

export default Sidebar