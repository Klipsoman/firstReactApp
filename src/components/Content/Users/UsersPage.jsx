import React from "react";
import PropTypes from "prop-types";
import style from "./Users.module.css";
import userImg from "../../../assets/user.jpg";
import { NavLink } from "react-router-dom";

const UsersPage = (props) => {
  let navTotalSize = Math.ceil(props.totalPagesCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= navTotalSize; i++) {
    if (pages.length > 10) {
      break;
    }
    pages.push(i);
  }

  return (
    <>
      {/* Pagination */}
      {pages.map((p) => {
        return (
          <a
            href=""
            key={p}
            className={props.currentPage === p ? style.selectedPage : null}
            onClick={(e) => {
              e.preventDefault();
              props.toPage(p);
            }}
          >
            {p}
          </a>
        );
      })}

      <div className={`${style.usersWrapp} ${style.usersItems}`}>
        {props.users.map((u) => (
          <div key={u.id}>
            <div className={style.usersItem}>
              <div className={style.imgBlock}>
                <NavLink to={`/profile/` + u.id}>
                  <img
                    src={u.photos.small == null ? userImg : u.photos.small}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>{u.name}</div>
              <div>
                <button
                  disabled={props.isBtnDisabled.includes(u.id)}
                  className={u.followed ? style.yellow : style.blue}
                  onClick={() => {
                    props.isFollowedUser(u.followed, u.id);
                  }}
                >
                  {u.followed ? "отписаться" : "подписаться"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

UsersPage.propTypes = {
  users: PropTypes.array,
  delFriend: PropTypes.func,
  toFollow: PropTypes.func,
  setUsers: PropTypes.func,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  setTotalPages: PropTypes.func,
  totalPagesCount: PropTypes.number,
  setCurrentPage: PropTypes.func,
  toPage: PropTypes.func,
  toProfile: PropTypes.func,
  isFollowedUser: PropTypes.func,
  isFollowed: PropTypes.bool,
  isBtnDisabled: PropTypes.bool,
};

export default UsersPage;
