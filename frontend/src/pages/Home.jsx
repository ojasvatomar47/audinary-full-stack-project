import React, { useEffect, useState } from 'react'
import BookPng from '../assets/book.png'
import coverimg from '../assets/coverimage.jpg'
import Card from '../components/Card.jsx'

const Home = () => {

  const paragraphs = [
    'Welcome to the world of literature and cinema!',
    'Discover amazing content.',
    'Get direct access to the movie adaptations and paperbacks',
    'Register Now!',
  ];

  const cards = [
    {
      id: 1,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 2,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 3,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 4,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 5,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 6,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 7,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 8,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 9,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 10,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 11,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
    {
      id: 12,
      cover: coverimg,
      title: "this is title",
      author: "author name",
    },
  ]

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
  }, [currentIndex, paragraphs, 3000]);

  return (
    <div className=' pt-3 md:pt-32'>
      <div className="topcontent px-16 flex justify-between items-center">
        <div className="headtext text-primary flex flex-col justify-center items-center text-center">
          <h1 className='text-[100px] whitespace-normal line-clamp-4 w-auto m-auto'>
            Welcome to <span className='audinary'>audinary</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            return <Card key={card.id} book={card} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home