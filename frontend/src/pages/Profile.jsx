import React, { useContext, useEffect, useState } from 'react'
import userimg from '../assets/user.png'
import { AuthContext } from '../context/authContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = () => {

  const { currentUser } = useContext(AuthContext)

  const [allFavs, setAllFavs] = useState([])

  useEffect(() => {
    if (currentUser) {
      const allFavBooks = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/favs/getAllFav/:${currentUser.id}`)
          setAllFavs(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      allFavBooks()
    }
  }, [currentUser?.id])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`flex flex-col justify-center items-center py-24 gap-8 ${allFavs.length ? "md:items-start" : "md:items-center md:px-44"} ${!currentUser ? "md:flex-col" : "md:flex-row"} md:px-4`}>
      <div className={`one flex flex-grow text-secondary font-alveria text-3xl justify-center items-center p-4 md:py-24 w-60 md:p-6 xl:px-16 2xl:px-28 md:w-[420px]`}>
        <div className={`flex flex-col gap-6 justify-center items-center md:border-2 border-primary rounded-lg md:p-5 ${currentUser ? "md:w-56" : "md:w-72"}`}>
          <img src={userimg} alt="" />
          <h1>{currentUser ? currentUser.username : "Guest"}</h1>
        </div>
      </div>
      <div>
        <div className={`${currentUser && "hidden"}`}>
          <div className='flex flex-col justify-center items-center gap-7'>
            <span>You're not signed up...</span>
            <div className="buttons flex justify-center items-center gap-5">
              <Link to="/login">
                <button className='flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary px-6 transition duration-200 ease-in-out py-2 text-lg rounded-md'>LogIn</button>
              </Link>
              <Link to="/register">
                <button className="flex hover:bg-buttonhover justify-center text-white items-center cursor-pointer bg-primary px-6 transition duration-200 ease-in-out py-2 text-lg rounded-md">Register</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${!currentUser && "hidden"} two flex flex-col justify-center items-center`}>
          <div className={`${allFavs.length && "hidden"} flex flex-col justify-center items-center`}>
            <span className='text-primary text-xl md:text-2xl text-center'>You haven't added any books to your favorites yet!</span>
          </div>
          <div className={`${!allFavs.length && "hidden"} flex flex-col justify-center items-center`}>
            <span className='text-primary text-2xl'>Your favorites: </span>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
              {allFavs.map((favBook) => {
                return (
                  <div key={favBook.bookid} className='p-2 mt-10 md:p-4'>
                    <Link to={`/book/:${favBook.bookid}`}>
                      <div className="card flex flex-col md:w-48 xl:w-64 p-3 hover:border-b-4 hover:border-t-4 hover:border-secondary hover:shadow-2xl border-solid transition duration-500 ease-in-out" onClick={scrollToTop}>
                        <div className="img">
                          <img src={favBook.coverimg} alt="" className='rounded-xl mb-3 h-42' />
                        </div>
                        <div className="desc flex flex-col items-center justify-center gap-1 md:gap-3">
                          <h1 className='overflow-hidden font-bold text-center text-md md:text-xl lg:text-2xl w-28 md:w-52 whitespace-nowrap'>{favBook.title}</h1>
                          <h3 className='text-center font-authortext text-secondary text-md md:text-xl'>{favBook.author}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile