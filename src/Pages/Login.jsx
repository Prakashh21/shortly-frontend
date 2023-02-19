import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import image from "../assets/image.jpg"
import video from "../assets/video.mp4"
axios.defaults.withCredentials = true


function Login() {

  const [nameState, setNameState] = useState()
  const [emailState, setEmailState] = useState()
  const [passwordState, setPasswordState] = useState()
  const [switchState, setSwitchState] = useState(false)
  const navigate = useNavigate()


  const signupHandler = (name, email, password) => {
    console.log("name -->", name)
    console.log("email -->", email)
    console.log("password -->", password)
    axios(
      {
        method: 'post',
        url: 'http://localhost:7400/user/signup',
        data: {
          "name": name,
          "email": email,
          "password": password

        }

      }
    ).then((resp) => {

      console.log(resp.data)

    })

  }

  const loginHandler = (email, password) => {
    console.log("email -->", email)
    console.log("password -->", password)
    axios(
      {
        method: 'post',
        url: 'http://localhost:7400/user/login',
        data: {
          "email": email,
          "password": password

        },
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

      }
    ).then((resp) => {

      console.log(resp.data)
      if(resp.data.status === 'success'){
        navigate('/home')
      }

    })
  }

  // console.log("emailstate --> ", emailState)


  return (
    <div className='text-xl h-[100vh] flex justify-center items-center '>

      <div className=" flex flex-col sm:flex-row  rounded-tl-lg rounded-bl-lg h-full w-full sm:h-[80vh] sm:w-[65vw]">

        <div className='rounded-tl-lg rounded-bl-lg'>

          <video className='h-full w-full object-cover rounded-tl-lg rounded-tr-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg' src={video} autoPlay loop muted />
        </div>

        {switchState ? (<div className="text-center bg-white shadow-2xl rounded-tr-lg rounded-br-lg h-full w-full sm:w-[80%] pt-4 sm:pt-20 sm:px-4">
          <div className="text-small sm:text-normal">
            Create account
          </div>

          <div className='flex flex-col items-center mt-12 mb-4 px-4 m:px-0'>
            <div className='text-left mt-2 p-0 relative'>
              <label for='name' className='absolute bottom-7 text-sm'>Name</label>
              <input id='name' placeholder='' value={nameState} onChange={((e) => setNameState(e.target.value))} className='outline-none h-full w-full border-b-2 border[#E3E1E3]' type="text"></input>
            </div>
            <div className='text-left mt-8 p-0 relative'>
              <label for='email' className='absolute bottom-7 text-sm'>Email</label>
              <input id='email' placeholder='' value={emailState} onChange={((e) => setEmailState(e.target.value))} className='outline-none h-full w-full border-b-2 border[#E3E1E3]' type="text"></input>
            </div>
            <div className='mt-8 text-left relative'>
              <label for='password' className='absolute bottom-7 text-sm'> Password</label>
              <input id='password' value={passwordState} onChange={(e) => setPasswordState(e.target.value)} className='outline-none border-b-2 h-full w-full border-[#E3E1E3]' type="password"></input>
            </div>

          </div>

          <button onClick={(e) => {
            signupHandler(nameState, emailState, passwordState)
          }} className='py-1 bg-[#E3E1E3] hover:bg-[#e11d48] text-base hover:text-white px-16 mb-4 rounded ' type='submit'>
            Sign up
          </button>

          <div className="text-center px-4 text-sm">
            Already have an account <span onClick={() => setSwitchState(val => !val)} className='text-blue-700 cursor-pointer'> login here </span>
          </div>
        </div>
        ) : (
          <div className="text-center bg-white shadow-2xl rounded-tr-lg rounded-br-lg h-full w-full sm:w-[80%] pt-4 sm:pt-20 sm:px-4">
            <div className="text-small sm:text-normal">
              Login
            </div>

            <div className='flex flex-col items-center mt-12 mb-4 px-4 m:px-0'>
              <div className='text-left mt-8 p-0 relative'>
                <label for='email' className='absolute bottom-7 text-sm'>Email</label>
                <input id='email' placeholder='' value={emailState} onChange={((e) => setEmailState(e.target.value))} className='outline-none h-full w-full border-b-2 border[#E3E1E3]' type="text"></input>
              </div>
              <div className='mt-8 text-left relative'>
                <label for='password' className='absolute bottom-7 text-sm'> Password</label>
                <input id='password' value={passwordState} onChange={(e) => setPasswordState(e.target.value)} className='outline-none border-b-2 h-full w-full border-[#E3E1E3]' type="password"></input>
              </div>

            </div>

            <button onClick={(e) => {
              loginHandler(emailState, passwordState)
            }} className='py-1 bg-[#E3E1E3] hover:bg-[#e11d48] text-base hover:text-white px-16 mb-4 rounded ' type='submit'>
              Login
            </button>

            <div className="text-center px-4 text-sm">
              Don't have an account ? <span className='text-blue-800 cursor-pointer' onClick={() => setSwitchState(val => !val)}>SignUP first</span>
            </div>
          </div>)}


      </div>
    </div>
  )
}

export default Login