
import './App.css';
import Home from './componant/Home';
import ContentDb from './componant/db/ContentDb';
import { useState } from 'react';
import { customers } from './componant/db/Db';

function App() {

 // const [mycust , setMycust] = useState(customers);
  const [mycuststomer , setMycustomer] = useState(customers);


  return (
    <>
    <ContentDb.Provider value={{ mycuststomer, setMycustomer }}>
      <Home />
    </ContentDb.Provider>
  </>
  );
}

export default App;
