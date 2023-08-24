import React, { useContext } from 'react'
import userimg from '../assets/user.png'
import { AuthContext } from '../context/authContext'
import { useActionData } from 'react-router-dom'

const Profile = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='flex flex-col justify-center items-center py-24'>
      <div className="one flex flex-col gap-10 text-secondary font-alveria text-3xl justify-center items-center p-4 w-80">
        <img src={userimg} alt="" />
        <h1>{currentUser ? currentUser.username : "Guest"}</h1>
      </div>
      <div className="two">
        No books in favourites as of now...
      </div>
    </div>
  )
}

export default Profile