import React from 'react'
import image from "../assets/image.jpg"
import video from "../assets/video.mp4"
function Login() {




  return (
    <div className='text-xl h-[100vh] flex justify-center items-center'>

      <div className=" flex rounded-tl-lg rounded-bl-lg h-[80vh] w-[65vw]">

        {/* <div className="">
                        <img className='h-full w-full rounded-tl-lg rounded-bl-lg' src={image} />
                    </div> */}

        <div className='rounded-tl-lg rounded-bl-lg'>
          {/* <video className='h-full w-full rounded-tl-lg rounded-bl-lg border-2 border-black' width="420" height="240" autoPlay={true} loop muted playsInline >
                          <source type='video/mp4' src={video}></source>
                      </video> */}

          <video className='h-full w-full object-cover rounded-tl-lg rounded-bl-lg' src={video} autoPlay loop muted />
        </div>

        <div className="text-center bg-white shadow-2xl rounded-tr-lg rounded-br-lg h-full w-[80%] pt-20 px-4">
          <div className="text-normal">
            Create account
          </div>

          <div className='flex flex-col mt-8 mb-4  mx-4'>
            <div className='text-left mt-2 p-0 relative'>
              <label for='email' className='absolute bottom-7 text-sm'>Email</label>
              <input id='email' placeholder='' className='outline-none border-b-2 border[#E3E1E3]' type="text"></input>
            </div>
            <div className='mt-8 text-left relative'>
              <label for='password' className='absolute bottom-7 text-sm'> Password</label>
              <input id='password' className='outline-none border-b-2 border-[#E3E1E3]' type="password"></input>
            </div>

          </div>

          <button className='py-1 bg-[#E3E1E3] text-base px-16 mb-4 rounded ' type='submit'>
            Sign up
          </button>

          <div className="text-center text-sm">
            Already have an account login here
          </div>
        </div>


      </div>
    </div>
  )
}

export default Login