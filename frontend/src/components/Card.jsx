import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ book }) => {
  return (
    <Link to={`/book/:${book.bookid}`}>
      <div key={book.bookid} className='mx-10 mb-10'>
        <div className="w-[350px] h-[600px] p-4 flex flex-col justify-center gap-6 text-white items-center cursor-pointer hover:border-b-4 hover:border-t-4 hover:border-secondary hover:shadow-2xl border-solid transition duration-500 ease-in-out">
          <div className="coverimage flex-[2]">
            <img src={book.coverimg} className='h-[350px] w-full object-cover shadow-2xl shadow-black' alt="imagecover" />
          </div>
          <div className="info flex flex-col justify-center items-center flex-1 gap-3">
            <h1 className='text-[35px] text-center drop-shadow-lg'>{book.title}</h1>
            <h3 className='text-[30px] text-grad2 drop-shadow-lg font-authortext'>{book.author}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card