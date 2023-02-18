import React, { useContext } from 'react'
import { Context } from '../Context/Context'


function Home() {
    const {testState} = useContext(Context)
  return (
    <div>Home
        This variable is coming from Context -- {testState}
    </div>

  )
}

export default Home
