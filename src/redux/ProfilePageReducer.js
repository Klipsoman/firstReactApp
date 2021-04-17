import { ProfileAPI, UsersAPI } from "../api/api";

const SETPROFILE = "SET-PROFILE";
const ISFETCHING = "IS-FETCHING";
const SETSTATUS = "GET-STATUS";

let initialState = {
  profile: [],
  isFetching: false,
  photoSmall: null,
  status: "",
};

export const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETPROFILE:
      return {
        ...state,
        profile: action.user,
        photoSmall: action.user.photos.small,
      };
    case ISFETCHING:
      return {
        ...state,
        isFetching: action.val,
      };
    case SETSTATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const setProfile = (user) => ({
  type: SETPROFILE,
  user,
});
export const isFetchingProfile = (val) => ({
  type: ISFETCHING,
  val,
});

export const setStatus = (status) => ({
  type: SETSTATUS,
  status,
});

export const getProfile = (userId) => (dispatch) => {
  dispatch(isFetchingProfile(true));
  UsersAPI.getMyProfile(userId).then((res) => {
    dispatch(setProfile(res.data));
    dispatch(isFetchingProfile(false));
  });
};

export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then((res) => {
    dispatch(setStatus(res.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((res) => {
    if (res.data.resultCode == 0) {
      dispatch(setStatus(status));
    }
  });
};
