import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'


function Home() {
    const {testState} = useContext(Context)
    const [inputState , setInputState] = useState()

    const shortUrlHandler = (url) => {
          axios(
            {
              method: 'post',
              url: 'http://localhost:8001/',
              data: {"url": String(url)},

            }
          ).then((resp) => {
            console.log(resp)
          })
    }



  return (
    <div>


      <div className='text-center text-2xl'>

              Enter the URL which you want to short
      </div>

       <div className="mt-4">


       <input
        className='block mx-auto outline-none text-center'
        type="text"
        value={inputState}
        placeholder="Enter the URL"
        onChange={(e) => setInputState(e.target.value)}

        ></input>

       </div>


      <div className=' mt-2'>
          <div onClick={() => shortUrlHandler(inputState)} className=' text-xl w-20 mx-auto text-center bg-gray-500 text-black'>
              GO
          </div>
      </div>

    </div>

  )
}

export default Home
