import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SignUp.module.css'
import PropTypes from 'prop-types'

const SignUp = (props) => {
  
    return  <div className={style.sign}>
        {props.isAuth ? <NavLink to='\'>Выйти</NavLink> : <NavLink to='\'>Вход</NavLink> }
        <span className="fa fa-sign-in"></span>  
        {console.log(props.isAuth)} 
    </div>   
}
SignUp.propTypes = {
    isAuth: PropTypes.bool
}

export default SignUp 