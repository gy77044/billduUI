import React, { useEffect, useState } from 'react';
import InputwithLabel from '../Body/Input/InputwithLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessSetting, setIsSaveBusinessData, setSaveBusinessData } from '../../Features/BillduReducer';

const AddBusinessSettingForm = () => {
  const isSaveBusinessData = useSelector(state => state.billdu.isSaveBusinessData)
  const dispatch = useDispatch()
  const [businessData, setBusinessData] = useState({
    bname: "",
    bemail: "",
    bstreet: "",
    binvtemplate: "",
    bsuite: "",
    bzip: "",
    bcity: "",
    bstate: "",
    businessId: "",
    btaxId: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessData({ ...businessData, [name]: value })
  }
  useEffect(() => {
    if (isSaveBusinessData) {
      dispatch(setSaveBusinessData(businessData))
      dispatch(setIsSaveBusinessData(false))
      dispatch(setBusinessSetting(false))
    }
  }, [isSaveBusinessData])
  return (
    <div className='p-3'>
      <div className=' mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='*BUSINESS NAME' Type='text' name="bname" onChange={handleChange} value={businessData.bname} />
        <InputwithLabel labelname='BUSINESS EMAIL' Type='text' name="bemail" onChange={handleChange} value={businessData.bemail} />
      </div>
      <div className=' mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='*STREET' Type='text' name="bstreet" onChange={handleChange} value={businessData.bstreet} />
        <InputwithLabel labelname='INVOICE TEMPLATE' Type='text' name="binvtemplate" onChange={handleChange} value={businessData.binvtemplate} />
      </div>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='APARTMENT SUITE' Type='text' name="bsuite" onChange={handleChange} value={businessData.bsuite} />
        <InputwithLabel labelname='ZIP CODE' Type='text' name="bzip" onChange={handleChange} value={businessData.bzip} />
      </div>
      <div className=' mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='*CITY' Type='text' name="bcity" onChange={handleChange} value={businessData.bcity} />
        <InputwithLabel labelname='PROVINCE/STATE' Type='text' name="bstate" onChange={handleChange} value={businessData.bstate} />
      </div>
      <div className='mb-5 sm:flex md:flex lg:flex gap-5'>
        <InputwithLabel labelname='BUSINESS ID' Type='text' name="businessId" onChange={handleChange} value={businessData.businessId} />
        <InputwithLabel labelname='TAX/VAT ID' Type='text' name="btaxId" onChange={handleChange} value={businessData.btaxId} />
      </div>
    </div>

  );
};

export default AddBusinessSettingForm;
