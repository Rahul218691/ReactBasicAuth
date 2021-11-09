import React,{useContext} from 'react';
import {useFormik} from 'formik';
import zxcvbn from 'zxcvbn';
import {DataContext} from '../context/userContext';

const AuthForm = () =>{

	const [user,setUser] = useContext(DataContext);

	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const {handleSubmit,handleChange,values,errors} = useFormik({
		initialValues:{
			email:'',
			password:''
		},
		onSubmit:(values) =>{
			let data = {
				user:values,
				auth:true
			}
			setUser(data);
		},
		validate:values =>{
			const evaluation = zxcvbn(values.password);	
			let errors = {};
			if(!values.email){
				errors.email = 'Email is Required!'
			}else if (!regex.test(values.email)) {
				errors.email = 'Invalid Email!'
			}
			
			if(evaluation?.feedback?.suggestions.length){
				errors.password = evaluation?.feedback?.suggestions.map(data =>data);
			}

			return errors;
		}
	});


	return(
	      <div className="app__form__main">
	      	<div className="app__form__box">
	      		<h2>SignUp</h2>
	      		<form onSubmit={handleSubmit}>
	      			<div className="app__form__input">
	      				<span>Email</span>
	      				<input type="email" 
	      				onChange={handleChange}
	      				value={values.email}
	      				id='email'/>
	      			{
	      				errors.email && <div className="error__messages">
	      					{errors.email}
	      				</div>
	      			}	      				
	      			</div>	      			
	      			<div className="app__form__input">
	      				<span>Password</span>
	      				<input type="password" 
	      				onChange={handleChange}
	      				value={values.password}
	      				id='password'/>
		      			{
		      				errors.password && <div className="error__messages">
		      					{errors.password}
		      				</div>
		      			}	      				
	      			</div>	 	      			
	      			<div className="app__form__input">
	      				<button type="submit" disabled={user.auth}>Sign Up</button>
	      			</div>	 	      			     			
	      		</form>
	      	</div>
	      </div>		
		)
}

export default AuthForm;