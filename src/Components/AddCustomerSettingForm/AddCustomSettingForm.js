import React, { useEffect, useState } from 'react';
import InputwithLabel from '../Body/Input/InputwithLabel';
import { setCustomerSetting, setIsSaveCustomerData, setSaveCustomeData } from '../../Features/BillduReducer';
import { useDispatch, useSelector } from 'react-redux';

const AddCustomerSettingForm = () => {
  const isSaveCustomerData = useSelector(state => state.billdu.isSaveCustomerData)
  const dispatch = useDispatch()
  const [customerData, setCustomerData] = useState({
    bname: "",
    cemail: "",
    cstreet: "",
    csuite: "",
    czip: "",
    ccity: "",
    ccountry: "",
    cstate: "",
    cbusinessId: "",
    ctaxId: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value })
  }
  useEffect(() => {
    if (isSaveCustomerData) {
      dispatch(setSaveCustomeData(customerData))
      dispatch(setIsSaveCustomerData(false))
      dispatch(setCustomerSetting(false))
    }
  }, [isSaveCustomerData])
  return (
    <div className='p-3'>
      <div className=' mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='*CUSTOMER NAME' Type='text' name="bname" onChange={handleChange} value={customerData.bname} />
        <InputwithLabel labelname='CUSTOMER EMAIL' Type='text' name="cemail" onChange={handleChange} value={customerData.cemail} />
      </div>
      <div className=' mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='*STREET' Type='text' name="cstreet" onChange={handleChange} value={customerData.cstreet} />
        <InputwithLabel labelname='APARTMENT SUITE' Type='text' name="csuite" onChange={handleChange} value={customerData.csuite} />
      </div>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='ZIP CODE' Type='text' name="czip" onChange={handleChange} value={customerData.czip} />
        <InputwithLabel labelname='*CITY' Type='text' name="ccity" onChange={handleChange} value={customerData.ccity} />
      </div>
      <div className=' mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='*COUNTRY' Type='text' name="ccountry" onChange={handleChange} value={customerData.ccountry} />
        <InputwithLabel labelname='PROVINCE/STATE' Type='text' name="cstate" onChange={handleChange} value={customerData.cstate} />
      </div>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='BUSINESS ID' Type='text' name="cbusinessId" onChange={handleChange} value={customerData.cbusinessId} />
        <InputwithLabel labelname='TAX/VAT ID' Type='text' name="ctaxId" onChange={handleChange} value={customerData.ctaxId} />
      </div>
    </div>

  );
};

export default AddCustomerSettingForm;
