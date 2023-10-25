
// import NavBar from './Components/NavBar';
import Header from '../src/Components/Header/Header'
import FiveSection from './Components/Sections/FiveSection';
import Footer from './Footer/Footer';
import "../src/assest/scss/AllComponents.scss"
import TopSection from './Components/Body/TopSection';
import InvoiceSection from './Components/Body/InvoiceSection';
import InvoiceBottom from './Components/Body/InvoiceBottom';
import InvoiceDetails from './Components/Body/InvoiceDetails';
import MoreInvoiceDetails from './Components/Body/MoreInvoiceDetails';
import InvoiceType from './Components/Body/InvoiceType';
import Recommended from './Components/Body/Recommended/Recommended';
import AccordionwithArrow from './Components/Accordion/AccordionwithArrow';
import AccordionwithAdd from './Components/Accordion/AccordionwithAdd';

const mainHeader1 = "FREE ONLINE INVOICE GENERATOR";
const subHeader1 = "Create professional PDF invoices in seconds. Free & easy to use invoice generator app saves a lot of time. Create an invoice now."
const mainHeader2 = "TEMPLATES YOU CAN CREATE WITH FREE ONLINE INVOICE GENERATOR";
const subHeader2 = "Are you tired of the simple old black-on-white invoices? Take advantage of Billdu's invoice maker, automatically generate professional Australian invoices and dazzle your client's with 5 stunning templates in every (and more) color of the rainbow. You can create your custom design directly in our invoice maker by clicking the corresponding Color and Template buttons in the top bar."
const mainHeader3 = "MORE FREE INVOICE TEMPLATES";
const subHeader3 = "Have you not found your desired template? We have more free templates in our Free Creator.";


function App() {
  return (
    <>
      <Header />
      <TopSection mainHeader={mainHeader1} subHeader={subHeader1} isButton={false} />
      <InvoiceSection />
      <InvoiceBottom />
      <InvoiceDetails />
      <TopSection mainHeader={mainHeader2} subHeader={subHeader2} isButton={false} />
      <InvoiceType />
      <TopSection mainHeader={mainHeader3} subHeader={subHeader3} isButton={true} />
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
