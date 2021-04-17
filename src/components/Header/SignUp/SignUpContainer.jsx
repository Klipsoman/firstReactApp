import React from 'react';
import SignUp from './SignUp';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class SignUpContainer extends React.Component {

    render() {
    return  <SignUp {...this.props}/>
    }
}
SignUpContainer.propTypes = {
    isAuth: PropTypes.bool
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}


export default connect(mapStateToProps, {})(SignUpContainer)