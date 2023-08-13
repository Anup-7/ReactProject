import React from 'react'
import { Provider } from 'react-redux'
import Form from '../Task3/Form'
import { AccordionStore } from './Store'

function Main() {
  return (
    <>
   <Provider store={AccordionStore}>
   <Form/>
   </Provider>
    </>
  )
}

export default Main