
import Accordion from './Accordion'

const accordionList = [
  { name: "WHAT IS AN INVOICE?", desc: "An invoice is a commercial document issued by a seller to a buyer, detailing the goods or services provided with their corresponding costs. It serves as a formal request for payment, specifying the terms and conditions of the transaction. Generally, an invoice acts as a record of the sale and helps facilitate the payment process between the parties involved." },
  { name: "HOW TO MAKE AN INVOICE?", desc: "Creating an invoice with Billdu's online invoice generator is simple and efficient. You can select from pre-designed templates, choose your preferred colour scheme, add your company logo and signature, and fill out the relevant details. Additionally, you can write some relevant information in 'Note' section. The result is a professional-looking invoice that accurately reflects your business and helps to streamline your accounting process." },
  { name: "HOW TO SEND AN INVOICE?", desc: "After you created your invoice in our Free online invoice generator, you can easily send it to your clients right away by filling out your client's email and hitting 'Send' button. Additionally, you can attach other important files that can be relevant for your client. If you wish to generate your document first, save it to your computer for additional edits, you can do it so by clicking on 'Generate document'." },
  { name: "WHAT IS AN INVOICE NUMBER?", desc: "An invoice number, also known as invoice ID, is a unique identifier that has to be included in each invoice. It helps businesses track and manage financial transactions by providing a reference number for each invoice. There are several ways how to generate invoice number - you can do it manually based on your company's needs or have it generated automatically by invoice software.  It typically consists of letters, numbers, or combined. Each business has to choose the format that suits them the best and can be easily tracked in the financial records." },
  { name: "CAN I CHANGE THE CURRENCY?", desc: "Yes, of course. With our free online invoice generator, you can effortlessly switch currencies and language to tailor your preferences. Simply adjust the settings, and you're all set!" },
  { name: "IS INVOICE GENERATOR SAFE?", desc: "When using our Free online invoice generator you can trust that your data is safe with us. Your sensitive information is stored securely on our servers, which we keep secure with regular updates and monitoring. Our credit note generator complies with all the latest privacy regulations, so you can have peace of mind knowing your information is in good hands." },
  { name: "IS INVOICE MAKER FREE?", desc: "Yes, our Free online invoice generator is completely free of charge and you can either send your created invoice directly to your client via an email or generate it as a PDF document. If you decide to register and use all Billdu's features, you can select a plan starting from $3.99 which will enable you to create an unlimited number of invoices, add payment reminders, use online payments and much more." },
]

const AccordionwithAdd = () => {


  return (
    <div className={` flex flex-col justify-between items-center p-4`} >
      <div className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0028F2] mt-24 mb-16'>FREQUENTLY ASKED QUESTIONS</div>
      <div className='w-full  lg:w-[60%] mx-10'>
        {
          accordionList.map((itm, index) => {
            return (
              <div key={index}>
                <Accordion name={itm.name} desc={itm.desc} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AccordionwithAdd