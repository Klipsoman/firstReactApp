import React, { useState } from 'react'
import style from './Statistics.module.css'

const Statistics = () => {


    let [val, setVal] = useState('')
    let [s,s2] = useState(0)
    
    return <div className={style.statisticsWrap}>

        <textarea name="" id="" cols="30" rows="10" value={val} onChange={(e) => {
            let a = (e.target.value)
            a = a.split(' ')
            s2(a.reduce((total,value)=> Number(total) + Number(value)))
            setVal(e.target.value)
            console.log(a)
        }
        } />
        <p> {s} </p>

    </div>


}

export default Statistics