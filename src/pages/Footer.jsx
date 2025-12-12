import React from 'react'

function Footer() {
  return (
    <>

      <div className=" flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black font-poppins">
        {/* Logo */}
        <a href="https://prebuiltui.com">
          <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m8.75 5.3 6.75 3.884 6.75-3.885M8.75 28.58v-7.755L2 16.939m27 0-6.75 3.885v7.754M2.405 9.408 15.5 16.954l13.095-7.546M15.5 32V16.939M29 22.915V10.962a2.98 2.98 0 0 0-1.5-2.585L17 2.4a3.01 3.01 0 0 0-3 0L3.5 8.377A3 3 0 0 0 2 10.962v11.953A2.98 2.98 0 0 0 3.5 25.5L14 31.477a3.01 3.01 0 0 0 3 0L27.5 25.5a3 3 0 0 0 1.5-2.585" stroke="url(#a)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="a" x1="15.5" y1="2" x2="15.5" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8FAFC" />
                <stop offset="1" stopColor="#383838" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Links */}
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <div>
            <p className="text-slate-100 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-100 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition flex items-center gap-2">
                Careers 
              </a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-100 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-[240px]">Making every customer feel valued—no matter the size of your audience.</p>
          <div className="flex items-center gap-4 mt-3">
            {/* Social Icons */}
            <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer" className="hover:text-indigo-500">
              {/* Dribbble SVG */}
            </a>
            <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer" className="hover:text-indigo-500">
              {/* LinkedIn SVG */}
            </a>
            <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer" className="hover:text-indigo-500">
              {/* Twitter SVG */}
            </a>
            <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer" className="hover:text-indigo-500">
              {/* YouTube SVG */}
            </a>
          </div>
          <p className="mt-3 text-center">© 2025 <a href="https://prebuiltui.com" className="hover:text-indigo-600 transition">PrebuiltUI</a></p>
        </div>
      </div>












    </>
  )
}

export default Footer