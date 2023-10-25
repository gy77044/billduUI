import React from 'react'
import ButtonwithHeader from '../Button/ButtonwithHeader'

const headButtonList = [
  {
    img: require("../../assest/images/grepair.webp"),
    head1: "STRIPE TEMPLATE",
    head2: "Download the template example in Word, Excel or Google Sheet",
    btnName: "CREATE AN INVOICE"
  },
  {
    img: require("../../assest/images/elleton.webp"),
    head1: "CLASSIC TEMPLATE",
    head2: "Download the template example in Word, Excel or Google Sheet",
    btnName: "CREATE AN INVOICE"
  },
  {
    img: require("../../assest/images/ybusiness.webp"),
    head1: "MODERN TEMPLATE",
    head2: "Download the template example in Word, Excel or Google Sheet",
    btnName: "CREATE AN INVOICE"
  },
  {
    img: require("../../assest/images/simple.webp"),
    head1: "SIMPLE TEMPLATE",
    head2: "Download the template example in Word, Excel or Google Sheet",
    btnName: "CREATE AN INVOICE"
  },

]
const InvoiceType = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4 p-4 sm:p-20 md:p-20 lg:p-20 '>
      {
        headButtonList.map((itm, index) => {
          return (<div key={index}>
            <ButtonwithHeader img={itm.img} head1={itm.head1} head2={itm.head2} invoicebtn={itm.btnName} />
          </div>)
        })
      }
    </div>
  )
}

export default InvoiceType