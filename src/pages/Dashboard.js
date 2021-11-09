import React,{useContext} from 'react';
import {DataContext} from '../context/userContext';

const Dashboard = () =>{

	const [user,setUser] = useContext(DataContext);

	const {user:{email}} = user;

	const handleLogout = () =>{
		localStorage.removeItem('userInfo');
		setUser({
			user:null,
			auth:false
		})
	}

	return(
			<div className="dashboard">
				<div className="card">
					<div className="card__title">
						<h1>Logged In as: {email}</h1> 
					</div>
					<div className="card__body">
						<button onClick={()=>handleLogout()}>Logout</button>
					</div>
				</div>
			</div>
		)
}

export default Dashboard;