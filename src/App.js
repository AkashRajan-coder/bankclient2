
import './App.css';
import Navigation from './navbar.js'
import {HashRouter,Routes,Route} from 'react-router-dom'

import Create from './create.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import Alldata from './alldata.js';
import userContext from './context.js';

import Home from './Home.js'

function App() {
  return (
    <>
   <Navigation></Navigation>
   
     <userContext.Provider value={{'users':[]}}>
     <HashRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/deposit" element={<Deposit/>} ></Route>
        <Route path="/withdraw" element={<Withdraw/>} ></Route>
        <Route path="/alldata" element={<Alldata/>} ></Route>
      </Routes>
     </HashRouter>
     </userContext.Provider>
     
     
    </>
  );
}

export default App;
