import React from 'react'
import Avatar from './Avatar/Avatar'
import Navigation from './Navigtion/Navigation'
import style from './Sidebar.module.css'

const Sidebar = () => {
    let s = 'sidebar'
    return <aside className={`${s} ${style.sidebar}`}> 
        <Avatar />
        <Navigation />
    </aside>;
}

export default Sidebar