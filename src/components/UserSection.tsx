import React from 'react'
import NavBar from './NavBar'
import PersonalInformation from './PersonalInformation'

const UserSection = () => {
  return (
    <section className="min-h-screen">
        <NavBar />
        <PersonalInformation />
      </section>
  )
}

export default UserSection
