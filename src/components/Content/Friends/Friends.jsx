import React from 'react'
import style from './Friends.module.css'

const Friends = () => {

    const arrFriends = [
        {   
            id: 1,
            firstName: 'Lisa',
            Lastname: 'AlisaLilisaLiAaL',
            img: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg'
        },
        {
            id: 2,    
            firstName: 'Rudy',
            Lastname: 'Bekkins',
            img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg'
        },
        {
            id: 3,
            firstName: 'Jonatatn',
            Lastname: 'Gazilinsky',
            img: 'https://vraki.net/sites/default/files/mood/u.jpg'
        },
        {
            id: 4,
            firstName: 'Pes',
            Lastname: 'Barbos',
            img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg'
        },
        {
            id: 5,
            firstName: 'Pes',
            Lastname: 'Barbos',
            img: 'https://vraki.net/sites/default/files/mood/u.jpg'
        },
        {
            id: 6,
            firstName: 'Pes',
            Lastname: 'Barbos',
            img: 'https://vraki.net/sites/default/files/mood/u.jpg'
        },
    ]

    const myFriends = arrFriends.map((item) => {
        return <div className={style.friend} key={item.id}>
            <div className={style.friendImgBlock}>
                <img src={item.img} alt="" />
            </div>
            <span>{item.firstName}</span>
            <span>{item.Lastname}</span>
        </div>
    })

    return <div className={style.friends}>

            { myFriends }

        {/* <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg" alt=""/>
            </div>
            <span>Pes</span>
            <span>Barbos</span>
        </div>
        <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://vraki.net/sites/default/files/mood/u.jpg" alt=""/>
            </div>
            <span>Judit</span>
            <span>Rassel</span>
        </div>
        <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://vraki.net/sites/default/files/mood/u.jpg" alt=""/>
            </div>
            <span>Eizeicveil</span>
            <span>Petr</span>
        </div>
        <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://vraki.net/sites/default/files/mood/u.jpg" alt=""/>
            </div>
            <span>Marat</span>
            <span>Safin</span>
        </div>
        <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://vraki.net/sites/default/files/mood/u.jpg" alt=""/>
            </div>
            <span>Gogo</span>
            <span>Bavy</span>
        </div>
        <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://vraki.net/sites/default/files/mood/u.jpg" alt=""/>
            </div>
            <span>Miss Reichel</span>
            <span>Davids</span>
        </div>
        <div className={style.friend}>
            <div className={style.friendImgBlock}>
                <img src="https://vraki.net/sites/default/files/mood/u.jpg" alt=""/>
            </div>
            <span>Olololololol</span>
            <span>Olololololevich</span>
        </div> */}
    </div>
}

export default Friends