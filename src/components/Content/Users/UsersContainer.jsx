import React from "react";
import { connect } from "react-redux";
import {
  toFollow,
  delFriend,
  setUsers,
  setTotalPages,
  setCurrentPage,
  isFetchingFunc,
  setBtnDisabled,
  getUsersTC,
  setFollowOrUnfollowUserTC,
} from "../../../redux/UsersPageReducer";
import UsersPage from "./UsersPage";
import PropTypes from "prop-types";
import Preloader from "../../Preloader/Preloader";
// import { Redirect } from "react-router";
import { compose } from "redux";
import withRedirect from "../../../HOCs/withRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }
  toPage = (numOfPage) => {
    this.props.getUsersTC(numOfPage);
    this.props.setCurrentPage(numOfPage);
  };
  isFollowedUser = (followed, userId) => {
    this.props.setFollowOrUnfollowUserTC(followed, userId);

    // if (followed) {
    //   this.props.setBtnDisabled(true, userId);
    //   UsersAPI.toUnfollowUser(userId).then((res) => {
    //     if (res.data.resultCode == 0) {
    //       this.props.delFriend(userId);
    //       this.props.setBtnDisabled(false, userId);
    //     }
    //   });
    // } else {
    //   this.props.setBtnDisabled(true, userId);
    //   UsersAPI.toFollowUser(userId).then((res) => {
    //     if (res.data.resultCode == 0) {
    //       this.props.toFollow(userId);
    //       this.props.setBtnDisabled(false, userId);
    //     }
    //   });
    // }
  };

  render() {
    // if (!this.props.isAuth) return <Redirect to='/login' />

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersPage
          users={this.props.users}
          toFollow={this.props.toFollow}
          delFriend={this.props.delFriend}
          setUsers={this.props.setUsers}
          totalPagesCount={this.props.totalPagesCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          setCurrentPage={this.props.setCurrentPage}
          toPage={this.toPage}
          toProfile={this.toProfile}
          isFollowedUser={this.isFollowedUser}
          isFollowed={this.props.isFollowed}
          isBtnDisabled={this.props.isBtnDisabled}
        />
      </>
    );
  }
}

UsersContainer.propTypes = {
  users: PropTypes.array,
  delFriend: PropTypes.func,
  toFollow: PropTypes.func,
  setUsers: PropTypes.func,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  setTotalPages: PropTypes.func,
  totalPagesCount: PropTypes.number,
  setCurrentPage: PropTypes.func,
  isFetching: PropTypes.bool,
  isFetchingFunc: PropTypes.func,
  profile: PropTypes.object,
  setProfile: PropTypes.func,
  isFollowedUser: PropTypes.func,
  isFollowed: PropTypes.bool,
  isFollow: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
  setBtnDisabled: PropTypes.func,
  getUsersTC: PropTypes.func,
  setFollowOrUnfollowUserTC: PropTypes.func,
  isAuth: PropTypes.bool,
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalPagesCount: state.usersPage.totalPagesCount,
    isFetching: state.usersPage.isFetching,
    isFollowed: state.usersPage.isFollowed,
    isBtnDisabled: state.usersPage.isBtnDisabled,
    isAuth: state.Auth.isAuth,
  };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addFriend: (userId) => {
//             dispatch(toFriendAC(userId))
//         },
//         delFriend: (userId) => {
//             dispatch(delFriendAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalPages: (pagesCount) => {
//             dispatch(setTotalPagesCountAC(pagesCount))
//         },
//         setCurrentPage: (numOfPage) => {
//             dispatch(setCurrentPageAC(numOfPage))
//         },
//         isFetchingFunc: (val) => {
//             dispatch(changeIsFetchingAC(val))
//         }
//     }
// }

export default compose(
  connect(mapStateToProps, {
    toFollow,
    delFriend,
    setUsers,
    setTotalPages,
    setCurrentPage,
    isFetchingFunc,
    setBtnDisabled,
    getUsersTC,
    setFollowOrUnfollowUserTC,
  }),
  withRedirect
)(UsersContainer)

// export default connect(mapStateToProps, {
//   toFollow,
//   delFriend,
//   setUsers,
//   setTotalPages,
//   setCurrentPage,
//   isFetchingFunc,
//   setBtnDisabled,
//   getUsersTC,
//   setFollowOrUnfollowUserTC,
// })(UsersContainer);
