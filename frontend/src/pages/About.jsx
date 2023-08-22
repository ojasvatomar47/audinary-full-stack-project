import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'; // Import icons
import { IoMdSend } from 'react-icons/io'; // Import another icon
import AboutUsImage from '../assets/aboutus1.jpg'; // Replace with your image

const AboutUsPage = () => {
  return (
    <div className="container mx-auto py-20 p-10">
      <div className="md:flex mt-10">
        <div className="md:w-1/2 md:pr-4">
          <div className="p-4 rounded flex flex-col gap-5">
            <div className='flex flex-col justify-center items-center gap-4'>
              <div className='bg-primary text-secondary w-fit px-5 py-10 rounded-xl hover:bg-buttonhover text-3xl flex justify-center items-center'>
                <p><span className='underline'>Number of Books</span>: 15</p>
              </div>
              <div className='bg-primary text-secondary w-fit px-5 py-10 rounded-xl hover:bg-buttonhover text-3xl flex justify-center items-center'>
                <p><span className='underline'>Number of Users Signed In</span>: 5</p>
              </div>
            </div>
            <div className="flex mt-4 justify-center items-center">
              <a href="https://github.com/yourusername" className="mr-4">
                <AiFillGithub size={70} className='text-#333' />
              </a>
              <a href="https://linkedin.com/in/yourusername">
                <AiFillLinkedin size={70} className='hover:text-blue-500 transition duration-200 ease-in-out' />
              </a>
            </div>
            <div className="mt-4 flex">
              <input type="email" placeholder="Your Email" className="border p-2 w-full" />
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                <IoMdSend size={20} /> Send Email
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">About Our Site</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quis voluptatibus nam libero laudantium eum. Harum optio dolorum dolorem obcaecati unde, natus tempora vero! Doloribus quibusdam libero vel doloremque animi praesentium sequi, quae, fugit aspernatur, facere aliquam sed incidunt! Doloribus esse reiciendis natus, mollitia voluptatem suscipit eum officiis at ad cumque accusantium atque, vitae exercitationem in quaerat sequi obcaecati repellendus tempora quod sint libero quidem temporibus dolor? Ratione eum tempora rerum, perferendis magni veniam non nobis cupiditate voluptatem cumque nulla facere similique tempore rem in corporis asperiores voluptatum dignissimos dolores accusamus culpa quis beatae expedita. Eligendi obcaecati sequi, voluptatibus expedita error natus hic, quod exercitationem vitae ipsum libero ad nemo. Nam architecto sunt hic ipsum illum consequatur natus perspiciatis! Recusandae ratione reiciendis quibusdam eaque? Ratione dolore officiis reprehenderit voluptatem doloribus explicabo quo optio sed nobis dolorum non ducimus eaque, eum dicta voluptates similique delectus id minus earum cum, fuga consequuntur sapiente quaerat impedit? Nobis, nostrum sint. Numquam voluptates a necessitatibus natus quia suscipit hic eveniet. Quidem neque exercitationem, dolorum fugit quaerat error earum molestias quasi assumenda modi repellat blanditiis, ut perspiciatis nulla labore corrupti laborum aperiam saepe, nostrum provident? Molestias, consectetur rem! Vero ad, voluptatibus vel aliquam est quaerat perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
