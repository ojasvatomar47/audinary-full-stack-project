import React from 'react'
import coverimg from '../assets/coverimage.jpg'

const Book = () => {

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

  return (
    <div className='flex flex-col justify-center h-full w-full p-9 gap-24 md:p-16'>
      <div className='book flex flex-col justify-center items-center md:items-start gap-12 md:flex md:flex-row md:gap-28 md:min-h-[800px] relative'>
        <div className='cover-img h-auto w-auto max-w-[300px] mt-12 md:flex-1 md:mt-24 md:flex md:flex-col gap-12'>
          <div>
            <img src={coverimg} alt="" className='object-cover w-full' />
          </div>
          <div className="buttons hidden md:flex flex-col justify-center items-center gap-9 text-xl">
            <div className="paperback p-4 rounded-full px-12 bg-transparent border-2 border-[#ff9900] hover:bg-[#ff9900] transition duration-300 cursor-pointer ease-in-out hover:text-white">
              <button>
                <span>Buy it on Amazon</span>
              </button>
            </div>
            <div className="streaming p-4 rounded-md px-10 bg-[#00a8e1] cursor-pointer text-white hover:bg-[#0e93c0] transition duration-300 ease-in-out">
              <button>
                <span className='tracking-wider'>Watch on Prime</span>
              </button>
            </div>
          </div>
        </div>
        <div className='full-info flex flex-col justify-center items-center gap-16 md:flex-1 md:justify-end'>
          <div className='flex flex-col justify-center items-center gap-6 text-center md:pt-[80px]'>
            <h1 className='text-4xl font-extrabold font-lora'>Harry Potter and the philosopher's stone</h1>
            <h2 className='text-2xl font-authortext'>J.K. Rowling</h2>
            <h3 className='text-lg font-alveria'>Date Published: 09-07-1998</h3>
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
            <div className="paperback p-4 rounded-full px-12 bg-transparent border-2 border-[#ff9900] hover:bg-[#ff9900] transition duration-300 cursor-pointer ease-in-out hover:text-white">
              <button>
                <span>Buy it on Amazon</span>
              </button>
            </div>
            <div className="streaming p-4 rounded-md px-10 bg-[#00a8e1] cursor-pointer text-white hover:bg-[#0e93c0] transition duration-300 ease-in-out">
              <button>
                <span>Watch on Prime</span>
              </button>
            </div>
          </div>
          <div className="desc text-2xl flex flex-col justify-center items-center text-center tracking-widest px-6 leading-10 md:text-right md:tracking-widest md:leading-10 font-metal md:text-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repellat cupiditate inventore numquam saepe error aut rerum, laboriosam nam neque! Quam, quibusdam quidem reiciendis consectetur esse beatae nobis quaerat maxime aperiam id, eveniet sapiente quis, corporis perferendis quod. Corrupti voluptatem assumenda, impedit quos ad quas veritatis dolores provident alias excepturi qui voluptatibus vel necessitatibus aspernatur fugit a reprehenderit eius cumque aut quae quidem quam aperiam! Ducimus recusandae totam perferendis quo laboriosam, nulla temporibus culpa? Laudantium sit inventore facere velit aspernatur, sequi autem deleniti provident expedita, quibusdam, cum reprehenderit ut beatae. Perspiciatis ipsum voluptas, aliquam excepturi eius commodi quisquam sit rem?
            </p>
          </div>
        </div>
      </div>
      <div className='other-books flex flex-col gap-6'>
        <h1 className='text-2xl underline font-alveria'>More Realted Books: </h1>
        <div className="flex flex-nowrap gap-7 overflow-x-auto w-full">
          {cards.map((card) => {
            return (
              <div className="card flex flex-col w-auto p-3 hover:shadow-inner hover:shadow-primary transition duration-200 ease-out">
                <div className="img">
                  <img src={card.cover} alt="" className='rounded-xl mb-3' />
                </div>
                <div className="desc flex flex-col items-center justify-center gap-3">
                  <h1 className='overflow-hidden font-bold text-center text-xl w-52'>Harry Potter and the chamber of secrets</h1>
                  <h3 className='text-center font-authortext text-xl'>J.K. Rowling</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Book