import Footer from './components/Footer';
import Home from './components/Home';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Are from './components/Are';
import Services from './components/Services';
import FrequentQuestions from './components/FrequentQuestions';
import ContactUs from './components/ContactUs';
import Information from './components/Information';
import Ad from './components/Ad';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-auto overflow-x-hidden">
      {/* Header */}
      <Ad />
      <Navbar />
      {/* Header */}
      <Home />
      {/* Body */}
      <Body />
      <Information />
      <Are />
      <Services />
      <FrequentQuestions />
      <ContactUs />
      {/* Body end */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
