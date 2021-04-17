import React from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../../../redux/AuthReducer';
import Auth from './Auth';
import PropTypes from 'prop-types'

class AuthContainer extends React.Component{
    
    componentDidMount(){    
        this.props.getAuth()
    }

    render() {
        return  <div>
            <Auth {...this.props}/>
        </div>    
    }
}

AuthContainer.propTypes={
    isAuth: PropTypes.bool,
    getAuth: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        userId: state.Auth.userId,
        userLogin: state.Auth.userLogin,
        userEmail: state.Auth.userEmail,
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps, { getAuth })(AuthContainer) 