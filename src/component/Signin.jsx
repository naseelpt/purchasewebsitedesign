import React from 'react'

function Signin() {
  return (
    <>



    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 px-1">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-purple-300 rounded-full opacity-50 animate-pulseSlow"></div>
        <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-pink-300 rounded-full opacity-40 animate-pulseSlow"></div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6 animate-fadeIn">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-center mb-8 animate-fadeIn delay-200">
          Sign in to your account
        </p>

        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              className="peer w-full border-b-2 border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-indigo-600 transition"
            />
            <label className="absolute left-2 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-indigo-600 peer-focus:text-xs">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              className="peer w-full border-b-2 border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-indigo-600 transition"
            />
            <label className="absolute left-2 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-indigo-600 peer-focus:text-xs">
              Password
            </label>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-600" /> Remember me
            </label>
            <a href="#" className="hover:text-indigo-600">
              Forgot password?
            </a>
          </div>

              {/* signup page navigation */}
          <div className='flex justify-between sm:gap-0  '>
            <a href="/" className='text-indigo-600 mt-4 text-xs'>Back to Home</a>
             <p className="text-gray-500/90 text-sm mt-4 text-center">Don’t have an account? <a className="text-indigo-400 hover:underline" href="/signup">Sign up</a></p>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Sign In
          </button>

          {/* Or sign in with */}
          <div className="flex justify-center items-center gap-4 mt-4 text-gray-500 text-sm">
            <span>or sign in with</span>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mt-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition transform hover:scale-110">
              F
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition transform hover:scale-110">
              G
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition transform hover:scale-110">
              T
            </button>
          </div>
        </form>
      </div>
       </div>



    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Signin