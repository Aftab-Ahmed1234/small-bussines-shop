import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
    <header className="text-gray-600 body-font bg-sky-100 shadow-2xl border-x-2">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center pl-[10%]">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 463 463" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M455.5,348H447V99.5c0-17.369-14.131-31.5-31.5-31.5h-368C30.131,68,16,82.131,16,99.5V348H7.5 c-4.142,0-7.5,3.358-7.5,7.5v16C0,384.458,10.542,395,23.5,395h416c12.958,0,23.5-10.542,23.5-23.5v-16 C463,351.358,459.642,348,455.5,348z M31,99.5C31,90.402,38.402,83,47.5,83h368c9.098,0,16.5,7.402,16.5,16.5V348H31V99.5z M448,371.5c0,4.687-3.813,8.5-8.5,8.5h-416c-4.687,0-8.5-3.813-8.5-8.5V363h169.025c-0.011,0.166-0.025,0.331-0.025,0.5 c0,4.142,3.358,7.5,7.5,7.5h80c4.142,0,7.5-3.358,7.5-7.5c0-0.169-0.014-0.334-0.025-0.5H448V371.5z"></path> <path d="M407.5,100h-352c-4.142,0-7.5,3.358-7.5,7.5v216c0,4.142,3.358,7.5,7.5,7.5h352c4.142,0,7.5-3.358,7.5-7.5v-216 C415,103.358,411.642,100,407.5,100z M400,316H63V115h337V316z"></path> </g> </g> </g> </g></svg>        
        <span className="ml-3 text-xl ">My Website</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center pr-[30%]">
        <Link className="mr-5 hover:text-red-900 text-gray-900 font-sans font-bold " to={'/'}>
            Home
        </Link>
        <Link className="mr-5 hover:text-red-900 text-gray-900 font-sans font-bold" to={'/products'}>
            Products
        </Link>
        <Link className="mr-5 hover:text-red-900 text-gray-900 font-sans font-bold" to={'/contact'}>
            Contact Us
        </Link>
      </nav>
    </div>
</header>
    </div>
  )
}

export default Navbar
