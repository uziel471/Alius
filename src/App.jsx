import Footer from './components/Footer';
import Home from './components/Home';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Are from './components/Are';
import Services from './components/Services';
import FrequentQuestions from './components/FrequentQuestions';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-auto overflow-x-hidden">
      {/* Header */}
      <Navbar />
      {/* Header */}
      <Home />
      {/* Body */}
      <Body />
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
