import React,{useContext} from 'react';
import {  Navigate } from 'react-router-dom';
import {DataContext} from '../context/userContext';

const PrivateRoute = ({children}) => {

	const [user] = useContext(DataContext);

    return !user.auth ?
        <Navigate to='/'/> :
        children
        
};

export default PrivateRoute;

