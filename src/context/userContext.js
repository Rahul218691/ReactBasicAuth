import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
	const initialState = {
		user:null,
		auth:false
	}
    const [user, setUser] = useState(initialState)
    
    useEffect(() =>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if(userInfo) setUser(userInfo)
    },[])

    useEffect(() =>{
        localStorage.setItem('userInfo', JSON.stringify(user))
    },[user])

    


    return (
        <DataContext.Provider value={[user, setUser]}>
            {props.children}
        </DataContext.Provider>
    )
}