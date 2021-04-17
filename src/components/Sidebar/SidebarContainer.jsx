import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import PropTypes from "prop-types";
// import { Redirect } from 'react-router';

class SidebarContainer extends React.Component {

    render() {
        if (!this.props.isAuth) return <div/>
        return <Sidebar />
    }
}

SidebarContainer.propTypes = {
    isAuth: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps)(SidebarContainer)