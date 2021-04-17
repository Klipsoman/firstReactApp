import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import Profile from './Profile'
import PropTypes from 'prop-types'
import { getProfile } from '../../../redux/ProfilePageReducer.js'


class ProfileContainer extends React.Component {

    componentDidMount() {    
       let userId = this.props.match.params.userId
       if(!userId){
           userId = this.props.authUserId
       }
       this.props.getProfile(userId)
    }

    
    render(){

        if (!this.props.isAuth) return <Redirect to='/login' />

    return <div>
       <Profile {...this.props}/>
        </div>  
}
}

ProfileContainer.propTypes = {
    profile: PropTypes.array.isRequired,
    fullName: PropTypes.string,
    vk: PropTypes.string,
    isFetching: PropTypes.bool,
    match: PropTypes.object,
    authUserId: PropTypes.number,
    getProfile: PropTypes.func,
    isAuth: PropTypes.bool
}

let mapStateToProps = (state) => {
    return{
        profile: state.ProfilePage.profile,
        fullName: state.ProfilePage.profile.fullName,
        isFetching: state.ProfilePage.isFetching,
        vk: state.ProfilePage.vk,
        photoSmall: state.ProfilePage.photoSmall,
        authUserId: state.Auth.userId,  
        isAuth:   state.Auth.isAuth
    }
}

export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer))


