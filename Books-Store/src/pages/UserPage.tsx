import React from 'react'
import PageTitle from '../components/PageTitle'
import UserCRUD from '../components/UserCRUD'
import { useAuth } from '../context/Auth' 



const UserPage : React.FC = () => {
  const {allUsers} = useAuth();  
  return (
    <>
      <PageTitle pageTitle='User'/>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "right" }}>
          <input
            type="text"
            className="input"
            placeholder="Search..."
            style={{ height: "40px", marginRight: "10px", width: "28%" }}
          />  
        </div>
      <UserCRUD allUsers={allUsers}  />
        </div>
    </>
  )
}

export default UserPage
