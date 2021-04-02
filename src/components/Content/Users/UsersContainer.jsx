import { connect } from "react-redux";
import { toFriendAC, delFriendAC, setUsersAC } from "../../../redux/UsersPageReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(toFriendAC(userId))
        },
        delFriend: (userId) => {
            dispatch(delFriendAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer