import React from 'react'
const requiredOptionalList = [
  {
    count: 1,
    name: "Your Business Details:",
    description: "Clarify who's issuing the invoice.",
  },
  {
    count: 2,
    name: "Client's Business Details:",
    description: "Clarify to who the invoice is addressed.",
  },
  {
    count: 3,
    name: "Issue & Delivery Date:",
    description: "Clarify when the invoice was issued and when the product or service was delivered.",
  },
  {
    count: 4,
    name: "Item & Price:",
    description: "Detail the product or service supplied, number, and price.",
  },
  {
    count: 5,
    name: "Tax Rate:",
    description: "If applicable, make sure to include this to clarify how much tax the customer is paying and avoid paying for it yourself.",
  },
  {
    count: 6,
    name: "Invoice Number:",
    description: "Helps with cataloging invoices for both you and your customer.",
  },
  {
    count: 7,
    name: "Invoice Template & Color:",
    description: "Customize your invoice to create a professional and unique design your clients' can automatically associate with you.",
  },
  {
    count: 8,
    name: "Logo:",
    description: "Add your company logo to add to your invoice's professionalism and boost brand recognition.",
  },
  {
    count: 9,
    name: "Note:",
    description: "Attach any relevant notes regarding the products, services, payment, or just the invoice itself.",
  },
]


const InvoiceDetails = () => {
  return (
    <>
      <div className={`md:flex  h-fit w-full mt-20 mx-auto max-w-7xl  p-4`}>
        <div>
          <p className='text-3xl text-[#0028F2] font-bold'>HOW TO MAKE A CUSTOM INVOICE USING BILLDU ONLINE CREATOR</p>
          <p className='text-[16px] text-[#0028F2] font-normal mt-7'>Generating a custom invoice with Billdu takes mere moments. Just fill in the required fields, including your and your client's business details, the issue and delivery date, the items and price, tax rate, and invoice number. Then, spice up the invoice with a logo or colorful template, and email it to a client straightaway or download the PDF completely free.</p>
          <p className='text-[16px] text-[#0028F2] font-bold mt-10 mb-6'>Required</p>
          {requiredOptionalList.slice(0, 6).map((itm) => {
            return (<>
              <div key={itm.count}>
                <span className='font-normal text-[#0028F2]'>
                  {itm.count}.&nbsp;
                </span>
                <span className='font-bold text-[#0028F2]'>
                  {itm.name}&nbsp;
                </span>
                <span className='font-normal text-[#0028F2]'>
                  {itm.description}
                </span>
              </div>
            </>)
          })}
          <p className='text-[16px] text-[#0028F2] font-bold mt-10 mb-6'>Optional</p>
          {requiredOptionalList.slice(6, 9).map((itm) => {
            return (<>
              <div key={itm.count}>
                <span className='font-normal text-[#0028F2]'>
                  {itm.count}.&nbsp;
                </span>
                <span className='font-bold text-[#0028F2]'>
                  {itm.name}&nbsp;
                </span>
                <span className='font-normal text-[#0028F2]'>
                  {itm.description}
                </span>
              </div>
            </>)
          })}
        </div>
        <img src={require("../../assest/images/invoice001.png")} alt="" className='w-full sm:w-[50%] md:w-[50%] lg:w-[50%] h-fit' />
      </div>

    </>
  )
}

export default InvoiceDetails