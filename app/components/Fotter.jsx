import React from 'react'

const Fotter = () => {
  return (
    <div className='bg-[#1a1a1a] flex flex-col items-center justify-center  relative'>
      <a href='#hero' className='transition-transform animate-bounce duration-500 ease-in-out -translate-x-5  hover:-translate-y-2'>
        <div className='bg-[#ff4d5a] w-[40px] h-[45px] absolute top-[-25px] left-0 right-0 text-center mx-auto cursor-pointer'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><title></title><path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg>
        </div>
      </a>
      <div className='flex gap-3 mt-14'>
        <a href='https://github.com/Harpreet-kaurr' target='_blank'>
          <img src='./github.png' alt='github' className='w-10 h-10 '/>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaurharp1995@gmail.com"
          target="_blank">
          <img src='./email.png' alt='email' className='w-10 h-10 '/>
        </a>
      </div>
      <p className='text-white text-sm my-3'>Harpreet Kaur @2025</p>
    </div>
  )
}

export default Fotter