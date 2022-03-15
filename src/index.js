import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Watchlist from './screens/Watchlist';
import Detail from './screens/Detail';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);