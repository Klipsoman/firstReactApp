import React, { useEffect, useState } from "react";
import style from "./ProfileStatus.module.css";
import PropTypes from "prop-types";
import { setStatus } from "../../../redux/ProfilePageReducer";

const ProfileStatus = (props) => {
  let [isRedacting, changeIsRedacting] = useState(false);
  let [statusValue, changeStatusValue] = useState('');
  const startRedacting = () => {
    changeIsRedacting(true);
    changeStatusValue(props.status)
  };
  const endRedacting = () => {
    changeIsRedacting(false);
    props.updateStatus(statusValue);
    setStatus(statusValue);
  };  
  useEffect(() => {
    props.getStatus(props.myId);
    return [];
  });

  return (
    <>
      <div className={style.statusWrapp} onClick={startRedacting}>
        {!statusValue && !isRedacting && !props.status ? (
          <p> Нажмите, чтобы установить статус </p>
        ) : (
          <></>
        )}

        {isRedacting && (
          <input
            type="text"
            value={statusValue}
            onChange={(e) => changeStatusValue(e.target.value)}
            onBlur={endRedacting}
            autoFocus
            maxLength="50"
          />
        )}

        {!isRedacting && (
          <span onClick={startRedacting} className={style.ProfileStatusText}>
            {props.status}
          </span>
        )}
      </div>
    </>
  );
};
// Чтобы сделать автовыделение содержимого инпута, в инпут вставляете onFocus={this.handleFocus}
// В методы классовой компоненты вставляете     handleFocus = (event) => {
//         event.target.select();
//     }

// Та же реализация с помощью классового компонента:

// import React from 'react'
// import style from './ProfileStatus.module.css'

// class ProfileStatus extends React.Component {

//     constructor(props){
//     super(props)
//     this.state = {
//         isRedacting: false,
//         statusValue: ''
//     }
// }
//     render() {
//     return <div className={style.statusWrapp}>

// {!this.state.statusValue && this.state.isRedacting == false ?
//            <button onClick={()=>{this.setState({
//                 isRedacting: true
//             })}}>Установить статус</button>
//             :
//             <></>
//         }

//         {this.state.isRedacting ?
//         <input
//          type="text"
//          autoFocus='true'
//          value={this.state.statusValue}
//          onChange={(e)=>{
//                 this.setState({
//                     statusValue: e.target.value
//                 });
//                 console.log(this.statusValue)
//          }}
//          onBlur={()=>{this.setState({
//             isRedacting: false
//         })}}/>
//         :
//         <p onClick={()=>{this.setState({
//         isRedacting: true
//     })}}>{this.state.statusValue}</p>
//         }

//     </div>
//     }

// }

ProfileStatus.propTypes = {
  status: PropTypes.string,
  getStatus: PropTypes.func,
  myId: PropTypes.number,
  updateStatus: PropTypes.func,
};

export default ProfileStatus;
