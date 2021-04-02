import React, { useState } from 'react'
// import style from './Statistics.module.css'

const Statistics = () => {
    const [val,setVal] = useState('')

    return <div>
        <input type="radio" name="a" value='1' checked={ val === '1' ? true : false} onChange={(e)=>setVal(e.target.value)} id='a1'/>
        <label htmlFor="a1">HTML</label>
        <input type="radio" name="a" value='2' checked={ val === '2' ? true : false} onChange={(e)=>setVal(e.target.value)} id='a2'/>
        <label htmlFor="a2">CSS</label>
        <input type="radio" name="a" value='3' checked={ val === '3' ? true : false} onChange={(e)=>setVal(e.target.value)} id='a3'/>
        <label htmlFor="a3">JS</label>
        <p> {val === '3' ? 'yes' : 'nooo'} </p>
    </div>
}

export default Statistics