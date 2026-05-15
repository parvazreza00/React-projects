import React, { useState } from 'react'

import faqsData from './data'
import Faq from '../FAQ_2/Faq';

const Faqs = () => {

    const [faqs, setFaqs] = useState(faqsData);

  return (
    <div className='py-2 container m-auto' style={{ 'backgroundColor':'lightblue' }}>
        {
            faqs.map(faq=> <Faq key={faq.id} {...faq}/>)
        }
      
    </div>
  )
}

export default Faqs
