import React from 'react'
import  Image  from '../images/hero-img.png'
import  Image1  from '../images/img1.jpg'
import  Image2  from '../images/img2.jpg'
import  Image3  from '../images/img3.jpg'
import  Image4  from '../images/img4.jpg'
import  Image5  from '../images/img5.jpg'
import  Image6  from '../images/img6.jpg'
import  Image7  from '../images/img7.jpg'
import  Image8  from '../images/img8.jpg'


const Home = () => {
  return (
    <div >
<section class="text-gray-600 body-font pl-28 bg-blue-500">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Welcome To Our Gift Shop
     </h1>
      <p class="mb-8 leading-relaxed text-white font-sans">Explore this week's lateest menwear pieces of the season curated for you Autumn Winter man Collection</p>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class=" rounded" alt="hero" src={Image}/>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font mx-16">
    <h1 className='pt-16 text-center font-sans font-bold text-4xl'>Feature Products</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image1}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image2}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image3}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image4}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image5}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image6}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-38 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image7}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[150px]">
        <a className="block relative h-[79%] rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Image8}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default Home
