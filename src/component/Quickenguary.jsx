import React from 'react'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { FiFacebook } from 'react-icons/fi'

function Quickenguary() {
    return (
        <>

            <Navbar />

            <div className='xl:p-20 lg:p-10 md:p-10 sm:p-10 p-2'>
                <h1 className='font-bold text-center text-3xl'>Enquiry Page</h1>


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
                            Enquiry Page
                        </li>
                    </ol>
                </div>



                <div class="max-w-5xl max-lg:max-w-3xl mx-auto bg-white p-4">


                    <div
                        class="grid lg:grid-cols-5 items-center p-2 [box-shadow:0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg mt-12"
                    >

                        <div
                            class="lg:col-span-2 bg-indigo-800 rounded-lg p-6 h-full max-lg:order-1 relative overflow-hidden max-lg:mt-12"
                        >
                            <h3 class="text-[24px] text-white font-medium">
                                Contact Information
                            </h3>
                            <p class="text-[15px] text-slate-300 leading-relaxed mt-4">
                                Have some big idea or brand to develop and need help?
                            </p>

                            <div class="mt-16 relative z-50">
                                <ul class="space-y-8">
                                    <li class="flex items-center text-slate-200 hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 479.058 479.058"
                                        >
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            />
                                        </svg>
                                        <a href="javascript:void(0)" class="text-[15px] ml-4">
                                            info@example.com
                                        </a>
                                    </li>

                                    <li class="flex items-center text-slate-200 hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 482.6 482.6"
                                        >
                                            <path
                                                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4..."
                                            ></path>
                                        </svg>
                                        <a class="ml-4 text-[15px]">+158 996 888</a>
                                    </li>

                                    <li class="flex items-center text-slate-200 hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 368.16 368.16"
                                        >
                                            <path
                                                d="M184.08 0c-74.992 0-136 61.008-136 136..."
                                            ></path>
                                        </svg>
                                        <a href="#" class="text-[15px] ml-4">
                                            123 Street 256 House
                                        </a>
                                    </li>
                                </ul>

                                <ul class="flex flex-wrap gap-y-4 gap-x-5 mt-16">
                                    <li
                                        class="bg-slate-200 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"
                                    >
                                        <FaWhatsapp/>
                                    </li>

                                    <li
                                        class="bg-slate-200 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"
                                    >
                                        <FaInstagram/>
                                    </li>

                                    <li
                                        class="bg-slate-200 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"
                                    >
                                        <FiFacebook/>
                                    </li>
                                </ul>
                            </div>

                            <div
                                class="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-teal-500"
                            ></div>
                        </div>

                        <div class="px-4 sm:px-8 py-4 lg:col-span-3">
                            <form>
                                <div class="grid md:grid-cols-2 gap-8">

                                    <div class="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            class="px-2 py-3 bg-white w-full text-sm border-b border-gray-300 focus:border-slate-900 outline-none"
                                        />
                                        <svg
                                            class="w-4 h-4 absolute right-2"
                                            fill="#bbb"
                                            stroke="#bbb"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="10" cy="7" r="6"></circle>
                                        </svg>
                                    </div>


                                    <div class="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            class="px-2 py-3 bg-white w-full text-sm border-b border-gray-300 focus:border-slate-900 outline-none"
                                        />
                                        <svg
                                            class="w-4 h-4 absolute right-2"
                                            fill="#bbb"
                                            stroke="#bbb"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="10" cy="7" r="6"></circle>
                                        </svg>
                                    </div>
                                </div>


                                <div class="relative flex items-center mt-8">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        class="px-2 py-3 bg-white w-full text-sm border-b border-gray-300 focus:border-slate-900 outline-none"
                                    />
                                </div>


                                <div class="relative flex items-center mt-8">
                                    <input
                                        type="number"
                                        placeholder="Phone Number"
                                        class="px-2 py-3 bg-white w-full text-sm border-b border-gray-300 focus:border-slate-900 outline-none"
                                    />
                                </div>


                                <textarea
                                    placeholder="Message"
                                    class="mt-8 w-full bg-white px-2 py-3 text-sm border-b border-gray-300 focus:border-slate-900 outline-none"
                                    rows="5"
                                ></textarea>


                                <button
                                    type="submit"
                                    class="mt-10 bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                

          




            </div>






<Footer/>


        </>
    )
}

export default Quickenguary