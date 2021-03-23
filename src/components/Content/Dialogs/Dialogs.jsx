import React from 'react'
import style from './Dialogs.module.css'

const Dialogs = () => {
    return <div className={style.dialogs}>

        <div className={style.dialogsItems}>

            <div className={style.dialogsItem}>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>Alex Smith</div>
            </div>

            <div className={style.dialogsItem}>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>Bruce Wain</div>
            </div>

        </div>

        <div className={style.dialog}>
            
        </div>
    </div>
}

export default Dialogs