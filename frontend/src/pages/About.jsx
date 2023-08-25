import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'; // Import icons
import { IoMdSend } from 'react-icons/io'; // Import another icon

const AboutUsPage = () => {
  return (
    <div className="container mx-auto py-20 p-10">
      <div className="md:flex mt-10">
        <div className="md:w-1/2 md:pt-36 md:pr-4">
          <div className="p-4 rounded hidden md:flex flex-col gap-5 md:gap-36">
            <div className='flex flex-col justify-center items-center gap-4 md:gap-12'>
              <div className='bg-primary hover:text-white cursor-pointer transition duration-200 ease-linear text-secondary w-fit px-5 py-10 rounded-xl hover:bg-buttonhover text-3xl flex justify-center items-center'>
                <p><span className='underline'>Number of Books</span>: 15</p>
              </div>
              <div className='bg-primary hover:text-white cursor-pointer transition duration-200 ease-linear text-secondary w-fit px-5 py-10 rounded-xl hover:bg-buttonhover text-3xl flex justify-center items-center'>
                <p><span className='underline'>Number of Users</span>: 5</p>
              </div>
            </div>
            <div className="hidden md:flex gap-8 mt-4 justify-center items-center">
              <a href="https://github.com/ojasvatomar47" target='__blank'>
                <button className='bg-[#333] flex justify-center items-center p-2 rounded-lg gap-2'>
                  Github
                  <AiFillGithub className='text-3xl md:text-5xl text-#333 hover:text-secondary transition duration-200 ease-in-out' />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/ojasva-tomar-baba1826a" target='__blank'>
                <button className='bg-[#333] flex justify-center items-center p-2 rounded-lg gap-2'>
                  LinkedIn
                  <AiFillLinkedin className='text-3xl md:text-5xl hover:text-blue-500 transition duration-200 ease-in-out' />
                </button>
              </a>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center gap-5 md:gap-10">
              <span className='text-2xl underline text-secondary font-alveria'>Write us an Email: </span>
              <input type="email" placeholder='Your Email address' name='email' className='p-2 rounded-full text-black px-4 border-primary border-2' />
              <input type="text" placeholder="Write to us..." name='mailtext' className="h-32 p-2 w-full text-black border-2 border-primary rounded-lg" />
              <button className="flex justify-center items-center gap-2 w-fit mt-2 bg-buttonhover hover:primary text-white px-4 py-2 rounded">
                <IoMdSend size={20} /> Send Email
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <div className="font-extralight tracking-widest leading-7 p-4 rounded text-center">
            <h2 className="text-3xl font-semibold mb-2 text-secondary">About Us:</h2>
            <div>
              Welcome to <span className='audinary text-xl'>audinary</span>! I'm Ojasva Tomar, a passionate second-year Computer Science Engineering student at IIITDM Jabalpur. I'm thrilled to introduce you to my carefully crafted book website, where the world of literature and technology seamlessly converge.
              <br /> <br />
              At heart, I'm an ardent bibliophile, and this website is a manifestation of my love for both books and the digital realm. With meticulous care and the integration of cutting-edge technologies, I've brought to life a platform that celebrates the joy of reading, fostering a connection between book enthusiasts and the captivating stories that await.
              <br /> <br />
              <div className='bg-primary md:hidden hover:text-white cursor-pointer transition duration-200 ease-linear text-secondary w-fit px-5 py-10 rounded-xl hover:bg-buttonhover text-3xl flex justify-center items-center'>
                <div><span className='underline'>Number of Books</span>: 15</div>
              </div>
              <div className='md:hidden'><br /> <br /></div>
              As you explore the nooks and crannies of this website, you'll discover that it's not just about accessing a vast collection of books – it's an immersive experience. Crafted using the power of React JS, I've ensured a smooth and intuitive user interface that invites you to delve into literary wonders effortlessly. The vibrant and aesthetic design, thanks to Tailwind CSS, adds an extra layer of enchantment to your browsing journey.
              <br /> <br />
              Behind the scenes, Node.js and Express work tirelessly to provide a robust backend foundation. They enable seamless interactions between your inputs and the extensive MySQL database, ensuring that your experience is nothing short of fluid and efficient. Whether you're searching for a classic, a thriller, a heartwarming romance, or exploring diverse genres, my website's backend magic makes it all happen with a click.
              <br /> <br />
              <div className='bg-primary md:hidden hover:text-white cursor-pointer transition duration-200 ease-linear text-secondary w-fit px-5 py-10 rounded-xl hover:bg-buttonhover text-3xl flex justify-center items-center'>
                <p><span className='underline'>Number of Users</span>: 5</p>
              </div>
              <div className='md:hidden'><br /> <br /></div>
              Every detail on this website has been meticulously crafted, driven by my unwavering commitment to enhancing your reading escapades. Whether you're a seasoned bookworm or just dipping your toes into the ocean of literature, I believe that this platform has something special for everyone.
              <br /> <br />
              <div className="flex md:hidden gap-8 mt-4 justify-center items-center">
                <a href="https://github.com/ojasvatomar47" target='__blank'>
                  <button className='bg-[#333] flex justify-center items-center p-2 rounded-lg gap-2'>
                    Github
                    <AiFillGithub className='text-3xl md:text-7xl text-#333 hover:text-secondary transition duration-200 ease-in-out' />
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/ojasva-tomar-baba1826a" target='__blank'>
                  <button className='bg-[#333] flex justify-center items-center p-2 rounded-lg gap-2'>
                    LinkedIn
                    <AiFillLinkedin className='text-3xl md:text-7xl transition duration-200 ease-in-out' />
                  </button>
                </a>
              </div>
              <div className='md:hidden'><br /> <br /></div>
              So, welcome to my literary haven! I invite you to explore, discover, and lose yourself in the world of words that my website has lovingly curated. As I continue my journey at IIITDM Jabalpur, I'm excited to embark on this digital journey with you, connecting hearts and minds through the magic of books and technology. Happy reading!
            </div>
            <div className="md:hidden mt-4 flex flex-col justify-center items-center gap-5 md:gap-10">
              <span className='text-2xl underline text-secondary font-alveria'>Write us an Email: </span>
              <input type="email" placeholder='Your Email address' name='email' className='p-2 rounded-full text-black px-4 border-primary border-2' />
              <input type="text" placeholder="Write to us..." name='mailtext' className="h-32 p-2 w-full text-black border-2 border-primary rounded-lg" />
              <button className="flex justify-center items-center gap-2 w-fit mt-2 bg-buttonhover hover:primary text-white px-4 py-2 rounded">
                <IoMdSend size={20} /> Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
