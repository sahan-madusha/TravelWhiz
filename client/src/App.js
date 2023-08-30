import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import FrontPage from './components/frontPage/FrontPage';
import Profileform from './components/profilepage/Profileform';
import { Fragment, useState } from 'react';

function App(props) {

  const [tocreate , setToCreate] = useState(false)
  const [show , setShow] = useState(true)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={!tocreate ? <FrontPage show={show} setShow={setShow} tocreate={tocreate} setToCreate={setToCreate} /> : <Navigate to="/profile" />}/>
          <Route path="/profile" element={tocreate ? <Profileform /> : <Navigate to="/" />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
    </BrowserRouter>

    // <div>
    //   {!tocreate && <FrontPage show={show} setShow={setShow} tocreate={tocreate}/>}
    //   {tocreate && <Profileform/>}
    // </div>
  );
}

export default App;
