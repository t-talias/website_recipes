import React from 'react'
//יצירת המאגר
const UserContext=React.createContext({})
//ספק המידע שלנו
export const MyProvider=UserContext.Provider
export default UserContext