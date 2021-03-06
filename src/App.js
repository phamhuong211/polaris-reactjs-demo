import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import Users from './components/Users';
import Page404 from './components/Page404';


// import {AppProvider} from '@shopify/polaris'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Register/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
