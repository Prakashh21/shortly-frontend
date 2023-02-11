import React from 'react'
import image from "../assets/image.jpg"
import video from "../assets/video.mp4"
function Login() {




  return (
    <div className='text-xl h-[100vh] flex justify-center items-center '>

      <div className=" flex flex-col sm:flex-row  rounded-tl-lg rounded-bl-lg h-full w-full sm:h-[80vh] sm:w-[65vw]">

        <div className='rounded-tl-lg rounded-bl-lg'>

          <video className='h-full w-full object-cover rounded-tl-lg rounded-tr-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg' src={video} autoPlay loop muted />
        </div>

        <div className="text-center bg-white shadow-2xl rounded-tr-lg rounded-br-lg h-full w-full sm:w-[80%] pt-4 sm:pt-20 sm:px-4">
          <div className="text-small sm:text-normal">
            Create account
          </div>

          <div className='flex flex-col items-center mt-8 mb-4 px-4 m:px-0'>
            <div className='text-left mt-2 p-0 relative'>
              <label for='email' className='absolute bottom-7 text-sm'>Email</label>
              <input id='email' placeholder='' className='outline-none h-full w-full border-b-2 border[#E3E1E3]' type="text"></input>
            </div>
            <div className='mt-8 text-left relative'>
              <label for='password' className='absolute bottom-7 text-sm'> Password</label>
              <input id='password' className='outline-none border-b-2 h-full w-full border-[#E3E1E3]' type="password"></input>
            </div>

          </div>

          <button className='py-1 bg-[#E3E1E3] hover:bg-[#e11d48] text-base hover:text-white px-16 mb-4 rounded ' type='submit'>
            Sign up
          </button>

          <div className="text-center px-4 text-sm">
            Already have an account login here
          </div>
        </div>


      </div>
    </div>
  )
}

export default Login