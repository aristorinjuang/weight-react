import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Weight from './Weight';
import Weights from './Weights';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Weights />} />
          <Route path='*' element={<Weight />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
