import React from 'react'
import image from "../assets/image.jpg"
function Login() {




  return (
    <div className='text-xl h-[100vh] flex justify-center items-center'>

            <div className=" flex rounded-tl-lg rounded-bl-lg h-[80vh] w-[65vw]">

                    <div className="">
                        <img className='h-full w-full rounded-tl-lg rounded-bl-lg' src={image} />
                    </div>

                    <div className="text-center bg-white shadow-2xl rounded-tr-lg rounded-br-lg h-full w-[80%] pt-20 px-4">
                            <div className="text-normal">
                                Create account
                            </div>

                            <div className='flex flex-col mt-8 mb-4  mx-4'>
                            <input placeholder='Email' className='mt-2' width="80%" type="text"></input>
                            <input placeholder='Password' className='mt-2' type="password"></input>
                            </div>

                            <button className='py-1 px-16 mb-4 rounded border-2 border-black' type='submit'>
                                Submit
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