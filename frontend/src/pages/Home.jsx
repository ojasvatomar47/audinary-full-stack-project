import React, { useContext, useEffect, useState } from 'react'
import BookPng from '../assets/book.png'
import coverimg from '../assets/coverimage.jpg'
import Card from '../components/Card.jsx'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import axios from 'axios'
import top from '../assets/top2.jpg'

const Home = () => {

  const { currentUser } = useContext(AuthContext)

  const [cards, setCards] = useState([])

  const genre = useLocation().search
  // ex: genre: ?genre=Drama

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='flex flex-col'>
      <div style={{ backgroundImage: `url(${top})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex flex-col items-center'>
        <div className="topcontent flex justify-center md:justify-between lg:justify-around items-center h-[100vh]">
          <div className="headtext px-6 text-primary flex flex-col justify-center items-center text-center">
            <h1 className='md:text-[100px] text-[60px] whitespace-normal m-auto'>
              Welcome to <span className='audinary underline'><Link>audinary</Link></span>
            </h1>
            <div className={`slideshow-container mt-10 h-14 transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="slideshow-text text-xl bg-primary rounded-md text-white p-1 md:p-2">
                {currentText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="search flex items-center md:mx-24 p-3 pt-0 mt-2 md:mt-0">
        <input type="text" placeholder='Search for books' className='p-3 w-full rounded-l-md md:text-xl md:px-8 capitalize text-black' />
        <button className='bg-primary rounded-r-md p-3 md:text-xl md:px-8 capitalize hover:bg-buttonhover'>Search</button>
      </div>

      <div className="md:p-12 mt-20 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:gap-y-24">
          {cards.map((card) => {
            return (
              <div key={card.bookid} onClick={scrollToTop}>
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