import React from 'react'
import Navbar from '../pages/Navbar'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
// home
import v from '../assets/veg.jpg'
import f from '../assets/fish.jpg'
import fr from '../assets/fruit.jpg'
import b from '../assets/f.jpg'
import bb from '../assets/milk.jpg'
import bbb from '../assets/oil.jpg'
// card
import a from '../assets/d.jpg'
import aa from '../assets/dd.png'
import aaa from '../assets/ddd.png'
import aaaa from '../assets/dddd.png'
import aaaaa from '../assets/ddddd.jpg'
// masala
import c from '../assets/chilli.png'
import s from '../assets/sambar.png'
import ch from '../assets/chicken.png'
import m from '../assets/mutton.png'
import g from '../assets/garam.png'
// vegitable
import p from '../assets/payer.png'
import ma from '../assets/mathan.png'
import k from '../assets/kaypakka.png'
import ba from '../assets/banana.png'
import br from '../assets/brinjal.png'
// fish
import fi from '../assets/fis.png'
import fii from '../assets/fishh.png'
import muu from '../assets/mutto.png'
import po from '../assets/pork.png'
import chh from '../assets/chick.png'
import Footer from '../pages/Footer'









function Home() {

  const card = [
    { image: b, text: "fruit" },
    { image: bb, text: "fruit" },
    { image: bbb, text: "fruit" },
    { image: f, text: "fruit" },
    { image: fr, text: "fruit" }
  ]

  const logo = [
    { image: a },
    { image: aa },
    { image: aaa },
    { image: aaaa },
    { image: aaaaa }
  ]

  const masala = [
    { image: g, text: "Fresh Organic", name: "Garam Powder", offer: 35.9, price: 34.9, avail: ' 10/10' },

    { image: c, text: "Fresh Organic", name: "Chilli Powder", offer: 48.6, price: 47.6, avail: ' 12/15' },

    { image: s, text: "Fresh Organic", name: "Sambar Powder", offer: 55.8, price: 54.8, avail: ' 13/16' },

    { image: m, text: "Fresh Organic", name: "Mutton Powder", offer: 30.3, price: 29.3, avail: ' 10/15' },

    { image: ch, text: "Fresh Organic", name: "Chicken Powder", offer: 40.9, price: 39.9, avail: ' 9/10', }

  ]



  const vegitables = [
    { image: p, text: "Fresh Organic", name: "Long Bean", offer: 12.9, price: 11.9, avail: ' 9/10' },

    { image: ma, text: "Fresh Organic", name: "Pumkin", offer: 14.6, price: 13.6, avail: ' 10/15' },

    { image: k, text: "Fresh Organic", name: "Bitter Gourd", offer: 13.8, price: 12.8, avail: ' 12/16' },

    { image: ba, text: "Fresh Organic", name: "Banana", offer: 10.3, price: 9.3, avail: ' 12/15' },

    { image: br, text: "Fresh Organic", name: "Brinjal", offer: 14.9, price: 13.9, avail: ' 5/10', }

  ]


  const meat = [
    { image: fi, text: "Fresh Organic", name: "Fish Meat", offer: 80.9, price: 70.9, avail: ' 9/10' },

    { image: chh, text: "Fresh Organic", name: "Chicken", offer: 130.6, price: 120.6, avail: ' 10/15' },

    { image: fii, text: "Fresh Organic", name: "Fish", offer: 110.8, price: 100.8, avail: ' 12/16' },

    { image: po, text: "Fresh Organic", name: "Pork", offer: 203.3, price: 190.3, avail: ' 12/15' },

    { image: muu, text: "Fresh Organic", name: "Mutton", offer: 350.9, price: 320.9, avail: ' 5/10', }

  ]






  return (
    <>
      <Navbar />

      <div className='w-full'>

        <div className='xl:p-20 lg:p-10 md:p-10 sm:p-10 p-2'>

          {/* first */}

          <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">


            <div className="mt-32">
              <h1 className="xl:text-7xl text-6xl font-bold font-serif text-[#e624e6]">Prebuiltui</h1>
              <h2 className="xl:text-5xl text-4xl font-bold font-serif mt-2">online fresh</h2>


              <div className="relative pt-4 ">
                <h1 className="absolute opacity-0 animate-[fadeSlide_8s_infinite] xl:text-5xl text-4xl font-bold font-serif">Vegitable</h1>

                <h1 className="absolute opacity-0 animate-[fadeSlide_8s_infinite_2s] xl:text-5xl text-4xl font-bold font-serif">Fish</h1>

                <h1 className="absolute opacity-0 animate-[fadeSlide_8s_infinite_4s] xl:text-5xl text-4xl font-bold font-serif">Fruits</h1>
              </div>

              <p className="md:text-xl sm:text-xs text-sm text-gray-700 pt-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <xl:br /> Blanditiis totam vel
              </p>

              <div className="py-6 md:gap-5 sm:gap-4 gap-3 md:flex hidden">
                <button
                  className="click-btn btn-style702 flex items-center gap-2"
                  data-hover="Click"
                >
                  Shop Now <BsArrowRight className="stroke-1" />
                </button>

                <button
                  className="click-btn btn-style703 flex items-center gap-2"
                  data-hover="Click"
                >
                  Contact US <BsArrowRight className="stroke-1" />
                </button>
              </div>
            </div>

            {/* image */}

            <div>
              <div className="relative w-full max-w-[600px] h-[400px] sm:h-[350px] md:h-[450px] lg:h-[600px] md:pt-0 sm:pt-0 pt-10">

                <img
                  src={v}
                  className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite]"
                />

                <img
                  src={f}
                  className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite_2s]"
                />

                <img
                  src={fr}
                  className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite_4s]"
                />

              </div>
            </div>

          </div>



          {/* second */}

          <div className="pt-44">
            <h1 className='xl:text-3xl text-2xl font-bold'>Our Top Category</h1>
            <div className="w-full mt-16 bg-white shadow-2xl border border-gray-200 rounded-2xl py-8 overflow-x-auto">
              <div className="flex gap-5 items-center justify-center min-w-max  sm:px-6 px-2">

                {card.map((item) => (

                  <div className="w-56 h-56 mr-4 rounded-2xl grid justify-center py-6 bg-white shadow-2xl border border-gray-200">
                    <div className="bg-green-600 h-36 w-36 rounded-full flex justify-center items-center">
                      <div className="bg-white h-[140px] w-[140px] rounded-full flex justify-center items-center">
                        <img src={item.image} alt="Fruits" className="rounded-full w-[120px] h-[120px] object-cover" />
                      </div>
                    </div>
                    <h1 className="text-lg font-bold font-serif text-center mt-2">{item.text}</h1>
                  </div>

                ))}


              </div>
            </div>
          </div>



          {/* third */}

          <div className="pt-44">
            <h1 className='xl:text-3xl text-2xl font-bold'>The Most Popular Brands</h1>
            <div className="w-full mt-16 bg-white shadow-2xl border border-gray-200 rounded-2xl py-8 overflow-x-auto">
              <div className="flex gap-5 items-center justify-start min-w-max sm:px-6 px-3 md:px-8">

                {logo.map((item) => (
                  <div className=" w-56 h-56 mr-4 grid justify-center py-6 bg-white shadow-2xl border border-gray-200 rounded-2xl">
                    <div className="flex items-center justify-center">
                      <img src={item.image} alt="" className="w-[120px] h-[120px]" />
                    </div>

                  </div>
                ))}




              </div>
            </div>
          </div>



          {/* forth */}

          <div className='pt-44 '>

            <h1 className='xl:text-3xl text-2xl font-bold'>Top Trending Product</h1>

            <div className='flex gap-8 pt-16 overflow-x-auto w-full '>

              {masala.map((item) => (

                <div
                  className='border border-gray-200 rounded-tl-lg bg-white shadow-2xl
                   
                   w-[90%] sm:w-[70%] md:w-[45%] lg:w-[22%] xl:w-[18%] flex-shrink-0
                   '
                >

                  <div className='w-20 h-7 bg-red-600 font-medium text-white rounded-l-lg flex items-center justify-center'>
                    -12 off
                  </div>

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

          </div>



          {/* fifth */}

          <div className='pt-44'>

            <h1 className='text-3xl font-bold'>Fresh Vegitables</h1>

            <div className='pt-16 overflow-x-auto w-full'>


              <div className="flex gap-6 min-w-max">

                {vegitables.map((item) => (

                  <div className='border border-gray-200 rounded-tl-lg bg-white shadow-2xl 
                        flex-shrink-0 w-[250px]'>

                    <div className='w-20 h-7 bg-red-600 font-medium text-white rounded-l-lg flex items-center justify-center'>
                      -12 off
                    </div>

                    <div className='flex justify-center items-center'>
                      <img src={item.image} alt="" className='w-56 h-52' />
                    </div>

                    <div className='px-8 pt-5'>
                      <h1 className='text-xs text-orange-500 font-bold'>{item.text}</h1>
                      <h2 className='font-bold text-lg pt-2'>{item.name}</h2>
                      <h3 className='font-medium text-lg line-through text-gray-500'>${item.offer}</h3>
                      <h4 className='font-bold text-lg text-red-600'>${item.price}</h4>

                      <h5 className='text-lg font-bold text-gray-600'>
                        Available: <span className='text-orange-500'>{item.avail}</span>
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
            </div>

          </div>


          {/* sixth */}

          <div className='pt-44'>

            <h1 className='xl:text-3xl text-2xl font-bold'>Fresh Meats</h1>

            <div className='pt-16 overflow-x-auto w-full'>


              <div className="flex gap-6 min-w-max">

                {meat.map((item) => (

                  <div className='border border-gray-200 rounded-tl-lg bg-white shadow-2xl 
                        flex-shrink-0 w-[250px]'>

                    <div className='w-20 h-7 bg-red-600 font-medium text-white rounded-l-lg flex items-center justify-center'>
                      -12 off
                    </div>

                    <div className='flex justify-center items-center'>
                      <img src={item.image} alt="" className='w-56 h-52' />
                    </div>

                    <div className='px-8 pt-5'>
                      <h1 className='text-xs text-orange-500 font-bold'>{item.text}</h1>
                      <h2 className='font-bold text-lg pt-2'>{item.name}</h2>
                      <h3 className='font-medium text-lg line-through text-gray-500'>${item.offer}</h3>
                      <h4 className='font-bold text-lg text-red-600'>${item.price}</h4>

                      <h5 className='text-lg font-bold text-gray-600'>
                        Available: <span className='text-orange-500'>{item.avail}</span>
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
            </div>

          </div>



          {/* seventh */}

          <div className='grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 pt-44 gap-5'>


            <div>

              <div className="max-w-full h-56 bg-cover bg-center shadow-2xl rounded-lg"
                style={{
                  backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/071/918/262/small/healthy-detox-juice-with-fresh-fruits-vegan-smoothie-on-yellow-background-sunshine-photo.jpg")`
                }}>


                <div className='pt-12 px-7'>

                  <div className='bg-orange-500  w-20 h-5  rounded-lg flex justify-center items-center'> <h1 className='text-sm text-white font-serif'>Top offer</h1></div>
                  <h1 className='font-bold pt-2'>Fresh Fruits</h1>
                  <h1 className='font-bold  text-xl '>Healthy Juice</h1>

                  <div className='flex gap-2 pt-3'>
                    <h1 className='font-bold'>Shop Now </h1>
                    <BsArrowRight className='mt-1.5' />

                  </div>


                </div>







              </div>


            </div>


            <div>

              <div className="max-w-full h-56 bg-cover bg-center shadow-2xl rounded-lg"
                style={{
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EpkAc4J1wlARmP8N6SXw1v03S8adWfTBfg&s")`
                }}>


                <div className='pt-12 px-7'>

                  <div className='bg-orange-500  w-20 h-5  rounded-lg flex justify-center items-center'> <h1 className='text-sm text-white font-serif'>Top offer</h1></div>
                  <h1 className='font-bold pt-2'>Fresh Fruits</h1>
                  <h1 className='font-bold  text-xl '>Healthy Juice</h1>

                  <div className='flex gap-2 pt-3'>
                    <h1 className='font-bold'>Shop Now </h1>
                    <BsArrowRight className='mt-1.5' />

                  </div>


                </div>







              </div>


            </div>


            <div>

              <div className="max-w-full h-56 bg-cover bg-center shadow-2xl rounded-lg"
                style={{
                  backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/043/288/952/non_2x/ice-cream-balls-in-a-cone-on-an-empty-blue-background-with-flowers-summer-background-with-ice-cream-and-copy-space-summer-time-composition-for-web-banner-cards-invitations-photo.jpg")`
                }}>


                <div className='pt-12 px-7'>

                  <div className='bg-orange-500  w-20 h-5  rounded-lg flex justify-center items-center'> <h1 className='text-sm text-white font-serif'>Top offer</h1></div>
                  <h1 className='font-bold pt-2'>Fresh Fruits</h1>
                  <h1 className='font-bold  text-xl '>Healthy Juice</h1>

                  <div className='flex gap-2 pt-3'>
                    <h1 className='font-bold'>Shop Now </h1>
                    <BsArrowRight className='mt-1.5' />

                  </div>


                </div>







              </div>


            </div>




          </div>



          {/* nine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-44 ">

            {/* LEFT – Background Biriyani Box */}
            <div
              className="w-full h-64 sm:h-72 lg:h-72 xl:h-72 shadow-2xl rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: `url("https://t4.ftcdn.net/jpg/03/04/19/71/360_F_304197125_VyputFZzIIam7Bp4KzAxFNGkgGSWQaEl.jpg")`
              }}
            >
              <div className="px-7 pt-20 sm:pt-24">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Thalasseri Dum Biriyani
                </h1>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Food <span className="text-orange-400">Special Offer</span>
                </h1>

                <div className="flex gap-2 mt-5 bg-orange-500 w-32 py-3 rounded-lg shadow-2xl justify-center items-center">
                  <h1 className="font-bold text-white">Shop Now</h1>
                  <BsArrowRight className="mt-1.5" color="white" />
                </div>
              </div>
            </div>

            {/* RIGHT – Offer Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://img.freepik.com/premium-vector/buy-one-get-one-free-online-shop-discount-sale-background-buy-1-get-1-special-discount-marketing-poster-design-web-social-sale-banner-vector-template-design_1213989-584.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                className="w-full h-64 sm:h-72 lg:h-72 xl:h-72 rounded-xl shadow-2xl object-cover"
              />
            </div>

          </div>


          {/* ten */}

          <div className='text-center pt-44'>

            <h1 className='xl:text-4xl text-2xl font-bold'>What Our Clients Say</h1>
            <div className='xl:px-64 pt-5'>
              <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsam quasi aperiam odit error quod atque, quo nemo accusantium ratione, quaerat tenetur porro laudantium adipisci fuga exercitationem facere quae incidunt!</p>
              <h1 className=' pt-4 font-bold text-lg'>Muhammed Naseel</h1>
            </div>





          </div>


        </div>




      </div>
      <Footer />




    </>
  )
}

export default Home

