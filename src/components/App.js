
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (
  <React.Fragment>
    <Header />
        {/* <grid style={{
      maxHeight: '400px'
    }}>
          <column field="TShirtArtist" title="Artist" width="300px" />
          <column field="TShirtSize" title="Size" />
          <column field="Discontinued" title="Discontinued" />
        </grid> */}
        <Footer />
      </React.Fragment>
  )
};

export default App;




