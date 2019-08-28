import React from 'react';
import{BrowserRouter} from'react-router-dom';
import Routes from './Routes';
import './index.css';
import './User/user.css'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    </div>
   
  );
}
// nessrine commit to testpull request

export default App;
