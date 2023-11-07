import React, { useEffect, useState } from 'react'
import DarkButton from '../Button/DarkButton'
import LightButton from '../Button/LightButton'
import LabelwithValue from '../LabelwithValue/LabelwithValue'
import { labelList } from '../LabelwithValue/LabelList'
import { IconAdd, IconDrag, IconSetting } from '../../assest/Icon'
import UploadLogo from '../UploadLogo/UploadLogo'
import BilledDetail from './BilledDetail/BilledDetail'
import InputwithLabel from './Input/InputwithLabel'
import DiscountInput from './Input/DiscountInput'
import TextArea from './TextArea/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { setBusinessSetting, setCustomerSetting, setIsSaveBusinessData, setIsSaveInvoiceData, setModalOpen, setShowError } from '../../Features/BillduReducer'

import jsPDF from 'jspdf';
import InvoiceFormWrapper from './InvoiceFormWrapper'
import BilledDetailWrapper from '../BilledDetailWrapper'
import html2canvas from 'html2canvas'

const InvoiceSection = () => {
  const dispatch = useDispatch()
  const showError = useSelector(state => state.billdu.showError)

  const [data, setData] = useState({
    invNum: "",
    issueDate: "",
    duedate: "",
    delivery: "",
    quantity: "",
    unit: "",
    price: "",
    vat: "",
    total: "",
    desc: "",
    textdata: "",
    discount: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }


  const generatePDF = () => {
    const inputElement = document.getElementById('invoiceContent');

    if (inputElement) {
      html2canvas(inputElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        pdf.save('invoice.pdf');
      });
    } else {
      console.error('Element not found');
    }
  };


  const handleOpenEdit = () => {
    dispatch(setModalOpen(true))
    dispatch(setIsSaveInvoiceData(false))
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowError(false))
    }, 2000);
  }, [showError])


  return (<>

    <div className='bg-[#f6f7f8]'>
      <div className='max-w-5xl mx-auto'>
        {showError && <div className="w-full text-yellow-700 bg-yellow-300/30 p-3 mx-2 rounded-md">
          Please add Business details
        </div>}
        <div className='flex  items-center justify-end py-16'>
          <LightButton name="Send Document by Email" onClick={() => dispatch(setShowError(true))} />
          <DarkButton name="generate document" onClick={generatePDF} />
        </div>
      </div>
    </div>

    <section id="invoiceContent" className="p-5 bg-[#f6f7f8]">
      <div className='max-w-5xl mx-auto flex justify-between mb-6'>
        <div className='flex flex-wrap items-center'>
          <p className='uppercase text-xs font-bold mx-2 '>Invoice Settings:</p>
          <InvoiceFormWrapper />
        </div>
        <p className='flex items-center text-[#0028F2] uppercase text-xs font-bold mx-2 ' onClick={handleOpenEdit}><IconSetting />Edit Settings</p>
      </div>

      <div className="max-w-5xl mx-auto p-1 pb-6 bg-white">
        <article className="overflow-hidden">
          <div className="bg-[white] rounded-b-md">
            <div className="p-9">
              <div className="flex flex-row-reverse space-x-4 space-x-reverse text-slate-700">
                <p className="text-3xl text-black font-medium tracking-tight uppercase font-body">
                  invoice
                </p>
              </div>
            </div>
            <div className="grid  gap-4 md:grid-cols-2 p-3 ">
              <UploadLogo />
            </div>
            <div className="p-3">
              <div className="grid gap-4 md:grid-cols-2">
                <BilledDetailWrapper />
              </div>
            </div>
            <div className="grid gap-6 mb-3 md:grid-cols-4 p-4">
              <InputwithLabel labelname="*INVOICE NUMBER:" Type="number" name="invoicenumber" onChange={handleChange} value={data.invNum} />
              <InputwithLabel labelname="*ISSUE DATE" Type="date" name="issuedate" onChange={handleChange} value={data.issueDate} />
              <InputwithLabel labelname="DUE DATE:" Type="date" name="duedate" onChange={handleChange} value={data.duedate} />
              <InputwithLabel labelname="DELIVERY DATE:" Type="date" name="deliverydate" onChange={handleChange} value={data.delivery} />
            </div>
            <div className="mb-2 p-4">
              <div className="text-sm text-black font-extrabold bg-gray-100 border border-gray-300 rounded-lg block w-full p-2.5">MORE OPTIONS </div>
            </div>
            <div className="grid gap-3 mb-3 md:grid-cols-7 p-4">

              <div className='grid col-span-2'>
                <label htmlFor="ii" className="block mb-2 ml-7 text-xs uppercase text-black font-bold">ITEM</label>
                <div className='flex'>
                  <IconDrag />  <input type="text" id={"ii"} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={""} required />
                </div>
              </div>
              <InputwithLabel labelname="QUANTITY" Type="text" name="quantity" onChange={handleChange} value={data.quantity} />
              <InputwithLabel labelname="UNIT" Type="text" name="unit" onChange={handleChange} value={data.unit} />
              <InputwithLabel labelname="PRICE" Type="text" name="price" onChange={handleChange} value={data.price} />
              <InputwithLabel labelname="VAT" Type="text" name="vat" onChange={handleChange} value={data.vat} />
              <InputwithLabel labelname="TOTAL ($)" Type="text" name="total" onChange={handleChange} value={data.total} />
              {/* <IconDelete /> */}
            </div>
            <div className="px-10 py-2 ">
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Add Description..." required name="desc" onChange={handleChange} value={data.desc} />
            </div>
            <div className="p-4 flex items-center text-xs uppercase text-[#0028F2] font-bold">
              <IconAdd /> ADD ITEM
            </div>

            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="md:col-start-1 col-end-2  h-full mt-20">
                {/* <UploadLogo /> */}
                <TextArea name="textdata" onChange={handleChange} value={data.textdata} />
              </div>
              <div className="md:col-start-2  items-center pb-8">
                {/* <UploadLogo /> */}
                <DiscountInput name="textdata" onChange={handleChange} value={data.discount} />
              </div>
            </div>
            {/* <div className="p-4">
              <div className="grid grid-cols-2 gap-2 p-2">
                <TextArea />               
              </div>
            </div> */}
          </div>
        </article>
      </div>
    </section>

  </>
  )
}

export default InvoiceSection