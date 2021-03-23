import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SignUp.module.css'


const SignUp = () => {
    return  <div className={style.sign}>
        <NavLink to='\'>Вход</NavLink> 
        <span className="fa fa-sign-in"></span>
        
         
    </div>   
}

export default SignUp 