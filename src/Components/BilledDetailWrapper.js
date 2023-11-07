import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BilledDetail from './Body/BilledDetail/BilledDetail'
import { setBusinessSetting, setCustomerSetting, setIsSaveBusinessData, setIsSaveCustomerData } from '../Features/BillduReducer'

const BilledDetailWrapper = () => {
  const dispatch = useDispatch()
  const { isSaveBusiData, isSaveCustData } = useSelector(state => state.billdu)
  const handleBilledmodal = () => {
    dispatch(setBusinessSetting(true));
    dispatch(setIsSaveBusinessData(false));
  };
  const handleCustomermodal = () => {
    dispatch(setIsSaveCustomerData(false))
    dispatch(setCustomerSetting(true))
  };



  return (
    <>
      <BilledDetail showData={isSaveBusiData} label1="*billed from" label2={"YOUR BUSINESS DETAILS"} label3={"YOUR BUSINESS DETAILS"} istooltip={true} onClick={handleBilledmodal} />

      <BilledDetail showData={isSaveCustData} label1="*billed to" label2={"ADD CUSTOMER DETAILS"} label3={"ADD CUSTOMER DETAILS"} istooltip={false} onClick={handleCustomermodal} />
    </>
  )
}

export default BilledDetailWrapper
