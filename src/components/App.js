
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TShirtDetail from './TShirtDetail';

const [cart, setCart] = useState({});

function App() {

  return (
  <React.Fragment>
    <Header />
    <TShirtDetail /> 
    <Footer />
      </React.Fragment>
  )
};

export default App;




