import React from 'react'
import PropTypes from 'prop-types'
import style from './Users.module.css'

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
        {
            id:1, photo: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg',
            fullName: 'Andrew Zharov', country: 'Russia', city: 'Saint-Petersburg',
            isFriend: true
        },
        {
            id:2, photo: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg',
            fullName: 'Billi Wonka', country: 'USA', city: 'Phila',
            isFriend: false
        },
        {
            id:3, photo: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg',
            fullName: 'Dima Zharov', country: 'Russia', city: 'Saint-Petersburg',
            isFriend: true
        }])
    }
    return <div className={`${style.usersWrapp} ${style.usersItems}`}>
        {props.users.map((u) => <div key={u.id}>
            <div className={style.usersItem}>
                <div className={style.imgBlock}>
                    <img src={u.photo} alt=""/>
                </div>
                <div>
                    {u.fullName}
                </div>
                <div>
                    { u.city }
                </div>
                <div>{u.country}</div>
                <div>
                    { u.isFriend ?
                    <button onClick={()=>{props.delFriend(u.id)}}>Отписаться</button> :
                    <button onClick={()=>{props.addFriend(u.id)}}>Подписаться</button>
                    }
                </div>
            </div>
        </div>)
        }
    </div>

}

Users.propTypes = {
    users: PropTypes.array,
    delFriend: PropTypes.func,
    addFriend: PropTypes.func,
    setUsers: PropTypes.func
}

export default Users