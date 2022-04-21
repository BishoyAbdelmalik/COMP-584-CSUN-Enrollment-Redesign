import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Home from './routes/home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
