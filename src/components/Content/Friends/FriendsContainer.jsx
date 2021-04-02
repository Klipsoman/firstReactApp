import { connect } from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return {
        arrFriends: state.friendsPage.arrFriends
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer