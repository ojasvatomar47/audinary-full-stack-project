import React from 'react'

const Card = ({ book }) => {
  return (
    <div className='mx-10 mb-10'>
      <div className="w-[300px] h-[500px] p-4 flex flex-col justify-center gap-6 text-white items-center cursor-pointer hover:border-b-4 hover:border-t-4 hover:border-[#B8860B] hover:shadow-2xl border-solid transition duration-500 ease-in-out">
        <div className="coverimage flex-[2]">
          <img src={book.cover} className='h-[350px] w-full object-cover shadow-2xl shadow-black' alt="imagecover" />
        </div>
        <div className="info flex flex-col justify-center items-center flex-1 gap-3">
          <h1 className='text-[40px]'>{book.title}</h1>
          <h3 className='text-[25px]'>{book.author}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card