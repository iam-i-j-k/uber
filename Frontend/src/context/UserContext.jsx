import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
        firstname: '', 
        lastname: '',
    },
    password: '',
  })
  return (


    <div>
        <UserDataContext.Provider value={{}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext