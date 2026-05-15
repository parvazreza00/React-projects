import React, { useState } from "react";

import faqsData from "./data";
import Faq from "./Faq";

const Faqs = () => {
//   console.log(faqsData);
const [faqs, setFaqs] = useState(faqsData);


  return (
    <div className="container m-auto py-4" style={{ 'backgroundColor':'lightgray' }}>
      {
        faqs.map(faq => <Faq key={faq.id} {...faq} />)
      }
    </div>
  );
};

export default Faqs;
