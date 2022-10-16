import Footer from './components/Footer';
import Home from './components/Home';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Are from './components/Are';
import Services from './components/Services';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />
      {/* Header */}
      <Home />
      {/* Body */}
      <Body />
      <Are />
      <Services />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
