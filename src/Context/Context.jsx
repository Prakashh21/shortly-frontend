import React , {createContext, useState} from 'react'


const Context = createContext()

const {Provider} = Context


function ContextProvider(props) {
    const [testState , setTestState] = useState('test variable')


    const {children} = props

  return (
    <Provider


        value={{
            testState
        }}>

        {children}

    </Provider>
  )
}

export {Context , ContextProvider}
