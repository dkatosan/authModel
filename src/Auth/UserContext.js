import React, { useState, createContext } from 'react';

export const UserContext = createContext();


const initialFormState = {
    username: "",
    password: "",
    newPassword: "",
    email: "",
    location: "",
  };


export const UserProvider = (props) => {

    const [ user, setUser ] = useState()
    const [ userDetails, setUserDetails ] = useState({
        userName: "",
        sub: ""
    })
    const [ chosen, setChosen ] = useState('')
    const [ authType, setAuthType ] = useState(0);
    const [formData, setFormData] = useState(initialFormState);
    const [formType, setFormType] = useState();

    
 
    return (
        <UserContext.Provider 
            value={{    
                user, setUser,
                userDetails, setUserDetails,
                chosen, setChosen,
                authType, setAuthType,
                formData, setFormData,
                formType, setFormType
            }}>
            {props.children}
        </UserContext.Provider>
    );   
    
};

