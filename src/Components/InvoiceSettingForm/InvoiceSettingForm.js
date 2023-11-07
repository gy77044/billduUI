import React, { useState, useEffect } from 'react';
import InputwithLabel from '../Body/Input/InputwithLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSaveInvoiceData, setModalOpen, setSaveInvData } from '../../Features/BillduReducer';

const InvoiceSettingForm = () => {
  const isSaveInvoiceData = useSelector(state => state.billdu.isSaveInvoiceData)

  const dispatch = useDispatch()
  const [invoiceData, setInvoiceData] = useState({
    language: "EN",
    currency: "USD",
    documentcolor: ".",
    invoivetemplate: "Simple",
    taxlabel: "VAT"
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value })
  }
  useEffect(() => {
    if (isSaveInvoiceData) {      
      dispatch(setSaveInvData(invoiceData))
      dispatch(setIsSaveInvoiceData(false))
      dispatch(setModalOpen(false))
    }
  }, [isSaveInvoiceData])

  return (
    <div className='p-3'>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='LANGUAGE' name="language" Type='text' onChange={handleChange} value={invoiceData.language} />
        <InputwithLabel labelname='CURRENCY' name="currency" Type='text' onChange={handleChange} value={invoiceData.currency} />
      </div>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='DOCUMENT COLOR' name="documentcolor" Type='text' onChange={handleChange} value={invoiceData.documentcolor} />
        <InputwithLabel labelname='INVOICE TEMPLATE' name="invoivetemplate" Type='text' onChange={handleChange} value={invoiceData.invoivetemplate} />
      </div>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='TAX LABEL' name="taxlabel" Type='text' onChange={handleChange} value={invoiceData.taxlabel} />
      </div>
    </div>

  );
};

export default InvoiceSettingForm;
