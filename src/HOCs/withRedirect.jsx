import React from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";

const withRedirect = (Component) => {
  class withRedirectContainer extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  withRedirectContainer.propTypes = {
    isAuth: PropTypes.bool,
  };
  return withRedirectContainer;
};

export default withRedirect;
