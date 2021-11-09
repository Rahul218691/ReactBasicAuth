import React,{useContext} from 'react';
import {  Navigate } from 'react-router-dom';
import {DataContext} from '../context/userContext';

const AuthRoute = ({children}) => {

	const [user] = useContext(DataContext);

    return !user.auth ?
        children :
        <Navigate to='/dashboard'/>
};

export default AuthRoute;

