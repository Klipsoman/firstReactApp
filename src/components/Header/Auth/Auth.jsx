import React from 'react';
import PropTypes from 'prop-types'

const Auth = (props) => {

    return  <div>
        { props.isAuth ? <p> Привет {props.userLogin} </p> : <p> Войдите или зарегистрируйтесь </p> }         
        </div>    

}
Auth.propTypes = {
    user: PropTypes.string,
    userId: PropTypes.number,
    userLogin: PropTypes.string,
    userEmail: PropTypes.string,
    isAuth: PropTypes.bool
}

export default Auth 