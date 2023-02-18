import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'


function Home() {
  const { testState } = useContext(Context)
  const [inputState, setInputState] = useState()
  const [currdata , setCurrData] = useState()
  const [data , setData] = useState([])

  const shortUrlHandler = (url) => {
    axios(
      {
        method: 'post',
        url: 'http://localhost:8001/',
        data: { "url": url }

      }
    ).then((resp) => {
      data.push(resp.data)
      setCurrData(resp.data)
      console.log(currdata)
      console.log(data)

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


      <div className='border-2 border-black'>

        {data?.map((data , index) => {
          return (
            <div className='border-2 border-black'>
               Shortend url for  - {data.longUrl} is <Link className='text-blue-400' to={`http://localhost:8001/${data.shortUrl}`}>http://localhost:8001/{data.shortUrl}</Link>
            </div>
          )
        })}
      </div>


    </div>

  )
}

export default Home
