import React from "react";
import { connect } from "react-redux";
import { getStatus, updateStatus } from "../../../redux/ProfilePageReducer";
import ProfileStatus from "./ProfileStatus";

class ProfileStatusContainer extends React.Component {
  render() {
    return <ProfileStatus {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.ProfilePage.status,
    myId: state.Auth.userId,
  };
};

export default connect(mapStateToProps, { getStatus, updateStatus })(
  ProfileStatusContainer
);
