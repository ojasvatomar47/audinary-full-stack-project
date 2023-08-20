import React, { useContext, useEffect, useState } from 'react'
import BookPng from '../assets/book.png'
import coverimg from '../assets/coverimage.jpg'
import Card from '../components/Card.jsx'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import axios from 'axios'

const Home = () => {

  const { currentUser } = useContext(AuthContext)

  const [cards, setCards] = useState([])

  const genre = useLocation().search

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/books${genre}`)
        setCards(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBooks()
  }, [genre])

  const paragraphs = [
    `Hi  ${currentUser ? currentUser.username : 'there'}!`,
    'Welcome to the world of literature and cinema!',
    'Discover amazing content.',
    'Get direct access to the movie adaptations and paperbacks',
    'Register Now!',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(paragraphs[currentIndex]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % paragraphs.length;
        setCurrentIndex(nextIndex);
        setCurrentText(paragraphs[nextIndex]);
        setIsVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, paragraphs]);

  return (
    <div className=' pt-3 md:pt-32'>
      <div className="topcontent px-16 flex justify-between items-center">
        <div className="headtext text-primary flex flex-col justify-center items-center text-center">
          <h1 className='text-[100px] whitespace-normal line-clamp-4 w-auto m-auto'>
            Welcome to <span className='audinary'><Link>audinary</Link></span>
          </h1>
          <div className={`slideshow-container mt-10 h-14 transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="slideshow-text text-3xl w">
              {currentText}
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img className='h-[300px] w-[300px]' src={BookPng} alt="" />
        </div>
      </div>
      <div className="search mt-32 mx-5 flex items-center md:mx-24">
        <input type="text" placeholder='Search for books' className='p-3 w-full rounded-l-md md:text-xl md:px-8 capitalize' />
        <button className='bg-primary rounded-r-md px-5 p-3 md:text-xl md:px-8 capitalize hover:bg-buttonhover'>Search</button>
      </div>
      <div className="p-12 mt-28 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-24">
          {cards.map((card) => {
            return (
              <div key={card.bookid}>
                <Card book={card} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home