
// import NavBar from './Components/NavBar';
import Header from '../src/Components/Header/Header'
import FiveSection from './Components/Sections/FiveSection';
import Footer from './Footer/Footer';
import "../src/assest/scss/AllComponents.scss"
import TopSection from './Components/Body/TopSection';
import InvoiceBottom from './Components/Body/InvoiceBottom';
import InvoiceDetails from './Components/Body/InvoiceDetails';
import MoreInvoiceDetails from './Components/Body/MoreInvoiceDetails';
import InvoiceType from './Components/Body/InvoiceType';
import Recommended from './Components/Body/Recommended/Recommended';
import AccordionwithArrow from './Components/Accordion/AccordionwithArrow';
import AccordionwithAdd from './Components/Accordion/AccordionwithAdd';
import { useSelector, useDispatch } from 'react-redux';
import { setBusinessSetting, setCustomerSetting, setIsSaveBusinessData, setIsSaveCustomerData, setIsSaveInvoiceData, setModalOpen } from './Features/BillduReducer';
import Modal from "./Components/Modal/Modal";
import InvoiceSettingForm from "../src/Components/InvoiceSettingForm/InvoiceSettingForm.js"
import AddBusinessSettingForm from './Components/AddBusinessSettingForm/AddBusinessSettingForm.js';
import AddCustomerSettingForm from './Components/AddCustomerSettingForm/AddCustomSettingForm.js'
import InvoiceSection from './Components/Body/InvoiceSection.js';
const mainHeader1 = "FREE ONLINE INVOICE GENERATOR";
const subHeader1 = "Create professional PDF invoices in seconds. Free & easy to use invoice generator app saves a lot of time. Create an invoice now."
const mainHeader2 = "TEMPLATES YOU CAN CREATE WITH FREE ONLINE INVOICE GENERATOR";
const subHeader2 = "Are you tired of the simple old black-on-white invoices? Take advantage of Billdu's invoice maker, automatically generate professional Australian invoices and dazzle your client's with 5 stunning templates in every (and more) color of the rainbow. You can create your custom design directly in our invoice maker by clicking the corresponding Color and Template buttons in the top bar."
const mainHeader3 = "MORE FREE INVOICE TEMPLATES";
const subHeader3 = "Have you not found your desired template? We have more free templates in our Free Creator.";


function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const { modalOpen, isBusiness, isCustomer } = useSelector(state => state.billdu)
  const saveInvoiceData = () => {
    dispatch(setIsSaveInvoiceData(true))
  }
  const saveBusinessData = () => {
    dispatch(setIsSaveBusinessData(true))
    // dispatch(setBusinessSetting(false))
  }
  const saveCustomerData = () => {
    dispatch(setIsSaveCustomerData(true))
    // dispatch(setBusinessSetting(false))    
  }

  return (
    <>
      {modalOpen && <Modal modalTitle="INVOICE SETTINGS" closeModal={() => dispatch(setModalOpen(false))} Children={<InvoiceSettingForm />} onClick={saveInvoiceData} />}
      {isBusiness && <Modal modalTitle="ADD BUSINESS SETTINGS" closeModal={() => dispatch(setBusinessSetting(false))} Children={<AddBusinessSettingForm />} onClick={saveBusinessData} />}
      {isCustomer && <Modal modalTitle="ADD CUSTOMER SETTINGS" closeModal={() => dispatch(setCustomerSetting(false))} Children={<AddCustomerSettingForm />} onClick={saveCustomerData} />}
      <Header />
      <div className='my-48'>
        <TopSection mainHeader={mainHeader1} subHeader={subHeader1} isButton={false} />
      </div>
      <InvoiceSection />
      <InvoiceBottom />
      <InvoiceDetails />
      <TopSection mainHeader={mainHeader2} subHeader={subHeader2} isButton={false} />
      <InvoiceType />
      <div className='my-48'>
        <TopSection mainHeader={mainHeader3} subHeader={subHeader3} isButton={true} />
      </div>
      <MoreInvoiceDetails />
      <Recommended />
      <AccordionwithAdd />
      <AccordionwithArrow />
      <FiveSection />
      <Footer />
    </>
  );
}

export default App;
