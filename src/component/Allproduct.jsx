
import React from 'react'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
import { BiSearch } from 'react-icons/bi'
import c from '../assets/chilli.png'
import s from '../assets/sambar.png'
import g from '../assets/garam.png'

function Allproduct() {

    const masala = [
        { image: g, text: "Fresh Organic", name: "Garam Powder", offer: 35.9, price: 34.9, avail: ' 10/10' },

        { image: c, text: "Fresh Organic", name: "Chilli Powder", offer: 48.6, price: 47.6, avail: ' 12/15' },

        { image: s, text: "Fresh Organic", name: "Sambar Powder", offer: 55.8, price: 54.8, avail: ' 13/16' },



    ]


    return (
        <>
            <Navbar />

            <div className='xl:p-20 lg:p-10 md:p-10 sm:p-10 p-2' >

                <h1 className='font-bold text-center text-3xl'>All Products</h1>

                <div className="text-lg pt-2">
                    <ol class="list-reset flex  items-center justify-center">
                        <li>
                            <a href="/" className='hover:text-pink-600' >Home</a>
                        </li>
                        <li><span className="mx-2">››</span></li>
                        <li>
                            <a href="#">pages</a>
                        </li>
                        <li><span className="mx-2">››</span></li>
                        <li>
                            products
                        </li>
                    </ol>
                </div>


                <div className="xl:flex pt-44 w-full gap-5">

                    {/* left */}
                    <div className="shrink-0">

                        <div className="bg-white shadow-2xl p-3 border-b border-b-gray-100">
                            <h1 className="text-lg font-bold">Search Now</h1>

                            <div className="pt-5 flex">
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="px-2 border-gray-200 outline-none border w-full h-12 rounded-tl-lg rounded-bl-lg"
                                />
                                <button className="bg-indigo-500 rounded-tr-lg rounded-br-lg h-12 w-12 flex justify-center items-center">
                                    <BiSearch color="white" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl p-3 border-b border-b-gray-200">
                            <h1 className="font-bold text-lg">Countries</h1>
                            <ol className="pt-3 text-gray-600">
                                <li>Ireland</li>
                                <li className="pt-3">Ireland</li>
                                <li className="pt-3">India</li>
                                <li className="pt-3">United Kingdom</li>
                                <li className="pt-3">China</li>
                                <li className="pt-3">Pakistan</li>
                            </ol>
                        </div>

                        <div className="bg-white shadow-2xl p-3 border-b border-b-gray-200">
                            <h1 className="font-bold text-lg">Categories</h1>
                            <ol className="pt-3 text-gray-600">
                                <li>Ireland</li>
                                <li className="pt-3">Curry Powder</li>
                                <li className="pt-3">Fruit</li>
                                <li className="pt-3">Fruit & Vegetable</li>
                                <li className="pt-3">Fish & Meat</li>
                                <li className="pt-3">Dairy Products</li>
                                <li className="pt-3">Oil & Ghee</li>
                                <li className="pt-3">Frozen Food</li>
                                <li className="pt-3">Ready to Eat</li>
                                <li className="pt-3">Beverages</li>
                                <li className="pt-3">Snacks & Namkeens</li>
                                <li className="pt-3">Health & Beauty</li>
                            </ol>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="flex-1">

                        {/* right side first */}

                        <div className="w-full bg-white shadow-2xl text-gray-700 flex justify-between items-center py-6 px-3">


                            <h1 className="font-bold">Showing 1-6 of 44 results</h1>


                            <div className="w-48">
                                <select
                                    id="countries"
                                    className="block w-full px-3 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option selected>--- select any option ---</option>
                                    <option value="low"> Low to High</option>
                                    <option value="high"> High to Low</option>
                                </select>
                            </div>

                        </div>

                        {/* right side second */}


                        <div className='w-full pt-10'>

                            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6'>


                                {masala.map((item) => (

                                    <div className='border border-gray-200 rounded-tl-lg bg-white shadow-2 '>



                                        <div className='flex justify-center items-center'>
                                            <img src={item.image} alt="" className='w-48 h-52' />
                                        </div>

                                        <div className='px-8 pt-5'>
                                            <h1 className='text-xs text-orange-500 font-bold'>{item.text}</h1>
                                            <h2 className='font-bold text-lg pt-2'>{item.name}</h2>
                                            <h3 className='font-medium text-lg line-through text-gray-500'>
                                                ${item.offer}
                                            </h3>
                                            <h4 className='font-bold text-lg text-red-600'>
                                                ${item.price}
                                            </h4>

                                            <h5 className='text-lg font-bold text-gray-600'>
                                                Available:
                                                <span className='text-orange-500'> {item.avail}</span>
                                            </h5>

                                            <div className='py-2'>
                                                <button className='w-full h-10 font-bold text-white bg-[#880DDF] shadow-2xl rounded-lg'>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                ))}






                            </div>


                            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 pt-10'>


                                {masala.map((item) => (

                                    <div className='border border-gray-200 rounded-tl-lg bg-white shadow-2 '>



                                        <div className='flex justify-center items-center'>
                                            <img src={item.image} alt="" className='w-48 h-52' />
                                        </div>

                                        <div className='px-8 pt-5'>
                                            <h1 className='text-xs text-orange-500 font-bold'>{item.text}</h1>
                                            <h2 className='font-bold text-lg pt-2'>{item.name}</h2>
                                            <h3 className='font-medium text-lg line-through text-gray-500'>
                                                ${item.offer}
                                            </h3>
                                            <h4 className='font-bold text-lg text-red-600'>
                                                ${item.price}
                                            </h4>

                                            <h5 className='text-lg font-bold text-gray-600'>
                                                Available:
                                                <span className='text-orange-500'> {item.avail}</span>
                                            </h5>

                                            <div className='py-2'>
                                                <button className='w-full h-10 font-bold text-white bg-[#880DDF] shadow-2xl rounded-lg'>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                ))}

                            </div>



                              {/* change akan illath */}
                            <nav aria-label="Page navigation example" className="flex items-center space-x-4">
                                <ul class="flex -space-x-px text-sm gap-3 pt-5">

                                    <li>
                                        <a href="#" className="flex items-center justify-center text-sm w-9 h-9 focus:outline-none  shadow-2xl text-pink-600 bg-white border border-gray-200 hover:bg-pink-500 hover:text-white">1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center text-body bg-neutral-secondary-medium  border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium leading-5 text-sm w-9 h-9 focus:outline-none  shadow-2xl text-pink-600 bg-white border border-gray-200 hover:bg-pink-500 hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border  border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none  shadow-2xl text-pink-600 bg-white border border-gray-200 hover:bg-pink-500 hover:text-white">3</a>
                                    </li>

                                </ul>

                            </nav>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Allproduct