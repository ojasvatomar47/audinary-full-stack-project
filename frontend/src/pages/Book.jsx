import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Book = () => {

  const [book, setBook] = useState({})

  const location = useLocation()

  // This returns the third element in the url's array ie bookId
  const bookId = location.pathname.split("/")[2]

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/books/${bookId}`)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook()
  }, [bookId])

  const datetimeString = book.launch;
  const datetime = new Date(datetimeString);
  const date = datetime.toString().split('00:00:00')[0];

  // For scrolling books
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/books?genre=${book.genre}`)
        console.log(book.genre)
        setBooks(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBooks()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='flex flex-col justify-center h-full w-full p-9 gap-24 md:p-16'>
      <div className='book flex flex-col justify-center items-center md:items-start gap-12 md:flex md:flex-row md:gap-28 md:min-h-[800px] relative'>
        <div className='cover-img h-auto w-auto max-w-[300px] mt-12 md:flex-1 md:mt-24 md:flex md:flex-col gap-12'>
          <div>
            <img src={book.coverimg} alt="" className='object-cover w-full' />
          </div>
          <div className="buttons hidden md:flex flex-col justify-center items-center gap-9 text-xl">
            <a href={book.paperback} target='__blank'>
              <div className="paperback p-4 rounded-full px-12 bg-transparent border-2 border-[#ff9900] hover:bg-[#ff9900] transition duration-300 cursor-pointer ease-in-out hover:text-white">
                <button>
                  <span>Buy it on Amazon</span>
                </button>
              </div>
            </a>
            <a href={book.adaptation} target='__blank'>
              <div className="streaming p-4 rounded-md px-10 bg-[#00a8e1] cursor-pointer text-white hover:bg-[#0e93c0] transition duration-300 ease-in-out">
                <button>
                  <span className='tracking-wider'>Watch on Prime</span>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className='full-info flex flex-col justify-center items-center gap-16 md:flex-1 md:justify-end'>
          <div className='flex flex-col justify-center items-center gap-6 text-center md:pt-[80px]'>
            <h1 className='text-4xl font-extrabold font-lora'>{book.title}</h1>
            <h2 className='text-2xl font-authortext'>{book.author}</h2>
            <h3 className='text-lg font-alveria'>Date Published: {date}</h3>
          </div>
          <div className="buttons flex flex-col justify-center items-center gap-6 text-xl">
            <div className="pdf-read p-5 bg-secondary hover:bg-green-300 cursor-pointer transition duration-300 ease-in-out hover:text-white">
              <button>Read Online</button>
            </div>
            <div className="pdf-download p-5 bg-secondary hover:bg-green-300 cursor-pointer transition duration-300 ease-in-out hover:text-white">
              <button>Download the PDF</button>
            </div>
          </div>
          <div className="buttons flex flex-col justify-center items-center gap-6 text-xl md:hidden">
            <a href={book.paperback} target='__blank'>
              <div className="paperback p-4 rounded-full px-8 md:px-12 bg-transparent border-2 border-[#ff9900] hover:bg-[#ff9900] transition duration-300 cursor-pointer ease-in-out hover:text-white ">
                <button>
                  <span>Buy it on Amazon</span>
                </button>
              </div>
            </a>
            <a href={book.adaptation} target='__blank'>
              <div className="streaming p-4 rounded-md px-10 bg-[#00a8e1] cursor-pointer text-white hover:bg-[#0e93c0] transition duration-300 ease-in-out">
                <button>
                  <span>Watch on Prime</span>
                </button>
              </div>
            </a>
          </div>
          <div className="desc text-2xl flex flex-col justify-center items-center text-center tracking-widest px-6 leading-10 md:text-right md:tracking-widest md:leading-10 font-metal md:text-2xl">
            <p>{book.description}</p>
          </div>
        </div>
      </div>
      <div className='other-books flex flex-col gap-6'>
        <h1 className='text-2xl underline font-alveria'>More Realted Books: </h1>
        <div className="flex flex-nowrap gap-7 overflow-x-auto w-full">
          {books.map((bk) => {
            return (
              <div key={bk.bookid}>
                <Link to={`/book/:${bk.bookid}`}>
                  <div className="card flex flex-col w-auto p-3 hover:shadow-inner hover:shadow-primary transition duration-200 ease-out" onClick={scrollToTop}>
                    <div className="img">
                      <img src={bk.coverimg} alt="" className='rounded-xl mb-3' />
                    </div>
                    <div className="desc flex flex-col items-center justify-center gap-1 md:gap-3">
                      <h1 className='overflow-hidden font-bold text-center text-md md:text-xl w-28 md:w-52'>{bk.title}</h1>
                      <h3 className='text-center font-authortext text-xl'>{bk.author}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Book