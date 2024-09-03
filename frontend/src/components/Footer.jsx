import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div>
   
<footer className="relative text-gray-400 pt-8 pb-6 bg-[#1a1a1a]">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-gray-200">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-400">
          Find us on any of these platforms.
        </h5>
        <div className=" mt-6 lg:mb-0 mb-6">
         <div className='flex'>
          <FaLinkedin size="30px" color="white"  className="mx-2 transition-all duration-300 hover:scale-125"/>
          <BsInstagram size="30px" color="white"  className="mx-2 transition-all duration-300 hover:scale-125" />
          </div>
    
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Home</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Events</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Members</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">About Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
             
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-400"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Innovxus</a>

        </div>
        <h4>Made by <a href="https://abhi101.in" className='text-blue-700'>Abhishek kumar</a></h4>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer