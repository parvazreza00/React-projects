import { useState } from 'react'

import './App.css'
import Form from './Components/From-validation/Form'
import Form_2 from './Components/From-validation/Form_2'
import Toggle from './Components/Toggle/Toggle'
import Faqs from './Components/FAQs/Faqs'
import Faqs_2 from './Components/FAQ_2/Faqs'
import UseEffectExample from './Components/Hooks/UseEffect/UseEffectExample'
import DataFetch from './Components/Hooks/UseEffect/DataFetch'
import FetchData_2 from './Components/Hooks/UseEffect/FetchData_2'
import CustomHookDataFetch from './Components/Hooks/CustomHooks/DataFetch'

function App() {

  return (
   <div>
    {/* <Form /> */}
    {/* <Form_2/> */}
    {/* <Toggle/> */}
    {/* <Faqs/> */}
    {/* <Faqs_2 /> */}
    {/* <UseEffectExample/> */}
    {/* <DataFetch /> */}
    {/* <FetchData_2/> */}
    <CustomHookDataFetch />
   </div>
  )
}

export default App
