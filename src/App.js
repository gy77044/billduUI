import './App.css';
import NavBar from './Components/NavBar';
import FirstSection from './Components/Sections/FirstSection';
import FiveSection from './Components/Sections/FiveSection';
import FourSection from './Components/Sections/FourSection';
import SecondSection from './Components/Sections/SecondSection';
import ThirdSection from './Components/Sections/ThirdSection';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <Footer />
    </>
  );
}

export default App;
