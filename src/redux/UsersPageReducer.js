import { UsersAPI } from "../api/api";

const ADDFRIEND = "ADD-FRIEND";
const DELFRIEND = "DELETE-FRIEND";
const SETUSERS = "SET-USERS";
const TOTALPAGESCOUNT = "TOTAL-USERS-COUNT";
const SETCURRENTPAGE = "SET-CURRENT-PAGE";
const ISFETCHING = "IS-FETCHING";
const ISBTNDISABLED = "IS-BTN-DISABLED";

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 12,
  totalPagesCount: 0,
  isFetching: false,
  isBtnDisabled: [],
};

export const UsersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDFRIEND:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    case DELFRIEND:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case SETUSERS:
      return {
        ...state,
        users: [...action.users],
      };
    case TOTALPAGESCOUNT:
      return {
        ...state,
        totalPagesCount: action.pagesCount,
      };
    case SETCURRENTPAGE:
      return {
        ...state,
        currentPage: action.numOfPage,
      };
    case ISFETCHING:
      return {
        ...state,
        isFetching: action.val,
      };
    case ISBTNDISABLED:
      return {
        ...state,
        isBtnDisabled: action.val
          ? [...state.isBtnDisabled, action.userId]
          : [state.isBtnDisabled.filter((u) => u.id !== action.userId)],
      };
    default:
      return state;
  }
};

export const toFollow = (userId) => ({
  type: ADDFRIEND,
  userId,
});
export const delFriend = (userId) => ({
  type: DELFRIEND,
  userId,
});

export const setUsers = (users) => ({
  type: SETUSERS,
  users,
});

export const setTotalPages = (pagesCount) => ({
  type: TOTALPAGESCOUNT,
  pagesCount,
});

export const setCurrentPage = (numOfPage) => ({
  type: SETCURRENTPAGE,
  numOfPage,
});

export const isFetchingFunc = (val) => ({
  type: ISFETCHING,
  val,
});

export const setBtnDisabled = (val, userId) => ({
  type: ISBTNDISABLED,
  val,
  userId,
});

export const getUsersTC = (currentPage, pageSize = 12) => {
  return (dispatch) => {
    dispatch(isFetchingFunc(true));
    UsersAPI.getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalPages(data.totalCount));
        dispatch(isFetchingFunc(false));
      })
      .catch((err) => console.log(err));
  };
};

export const setFollowOrUnfollowUserTC = (followed, userId) => (dispatch) => {
  if (followed) {
    dispatch(setBtnDisabled(true, userId));
    UsersAPI.toUnfollowUser(userId).then((res) => {
      if (res.data.resultCode == 0) {
        dispatch(delFriend(userId));
        dispatch(setBtnDisabled(false, userId));
      }
    });
  } else {
    dispatch(setBtnDisabled(true, userId));
    UsersAPI.toFollowUser(userId).then((res) => {
      if (res.data.resultCode == 0) {
        dispatch(toFollow(userId));
        dispatch(setBtnDisabled(false, userId));
      }
    });
  }
};
