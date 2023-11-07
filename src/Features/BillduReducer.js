import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: 1,
  modalOpen: false,
  showError: false,
  isBusiness: false,
  isSaveInvoiceData: false,
  isSaveBusinessData: false,
  isSaveCustomerData: false,
  isInvData: {
    language: "EN",
    currency: "USD",
    documentcolor: ".",
    invoivetemplate: "Simple",
    taxlabel: "VAT"
  },
  isSaveBusiData: {
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
  },
  isSaveCustData: {
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
  },
}

export const BillduReducer = createSlice({
  name: 'billdu',
  initialState,
  reducers: {
    isSetOpen: (state, action) => {
      state.isOpen = action.payload
    },
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload
    },
    setShowError: (state, action) => {
      state.showError = action.payload
    },
    setBusinessSetting: (state, action) => {
      state.isBusiness = action.payload
    },
    setCustomerSetting: (state, action) => {
      state.isCustomer = action.payload
    },
    setIsSaveInvoiceData: (state, action) => {
      state.isSaveInvoiceData = action.payload
    },
    setSaveInvData: (state, action) => {
      state.isInvData = action.payload
    },
    setIsSaveBusinessData: (state, action) => {
      state.isSaveBusinessData = action.payload
    },
    setSaveBusinessData: (state, action) => {
      state.isSaveBusiData = action.payload
    },
    setIsSaveCustomerData: (state, action) => {
      state.isSaveCustomerData = action.payload
    },
    setSaveCustomeData: (state, action) => {
      state.isSaveCustData = action.payload
    },
  },
})

export const { isSetOpen, setModalOpen, setShowError, setBusinessSetting, setCustomerSetting, setIsSaveInvoiceData, setSaveInvData, setIsSaveBusinessData, setIsSaveCustomerData, setSaveBusinessData, setSaveCustomeData } = BillduReducer.actions

export default BillduReducer.reducer