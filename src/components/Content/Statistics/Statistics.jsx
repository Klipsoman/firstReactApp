import React from 'react'
// import style from './Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = (props) => {
	
	let arr = props.statePage.users.map((u,i)=>{
		return <p key={i}>{u.name}
		<button onClick={()=>{props.del(u.id)}}>Delete user</button>
		<button onClick={()=>{props.chang(u.id, props.value); props.clear()}} onBlur={()=>{props.clear()}}>Change user</button>
		<button onClick={()=>{props.getName(u.name)}}>getName</button>
		</p>
	})

	return <div>
		hello:
		{arr}
		<input type="text" value={props.value} onChange={(e)=>{let text = e.target.value; props.changeInp(text)}}/>
		<button onClick={()=>{props.addUser(props.value)}}>Add user</button>
		<p>{props.boxName}</p>
	</div>

}

Statistics.propTypes = {
	statePage: PropTypes.object,
	del: PropTypes.func,
	chang: PropTypes.func,
	changeInp: PropTypes.func,
	value: PropTypes.string,
	getName: PropTypes.func,
	boxName: PropTypes.string,
	clear: PropTypes.func,
	addUser: PropTypes.func
}


export default Statistics