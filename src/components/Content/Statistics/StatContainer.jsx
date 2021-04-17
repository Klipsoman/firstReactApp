import { connect } from "react-redux";
import { addUserAC, changeInputAC, changeUserAC, clearAC, delUserAC, getNameAC } from "../../../redux/StatReducer";
import Statistics from "./Statistics";

let mapStateToProps = (state) => {
    return {
        statePage: state.statPage,
        value: state.statPage.value,
        boxName: state.statPage.boxName
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        del: (userId) => {
            dispatch(delUserAC(userId))
        },
        chang: (userId, name) => {
            dispatch(changeUserAC(userId, name))
        },
        changeInp: (text) => {
            dispatch(changeInputAC(text))
        },
        getName: (userName) => {
            dispatch(getNameAC(userName))
        },
        clear: () => {
            dispatch(clearAC())
        },
        addUser: (name) => {
            dispatch(addUserAC(name))
        }
    }
}

let StatContainer = connect(mapStateToProps, mapDispatchToProps)(Statistics)

export default StatContainer