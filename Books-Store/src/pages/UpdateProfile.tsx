import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import PageTitle from '../components/PageTitle'

const  UpdateProfile: React.FC = ()=> {
  return (
    <>
    <PageTitle pageTitle='Update Profile'/>
      <RegistrationForm mode="update"/>
    </>
  )
}

export default UpdateProfile
