import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './pages/home/Index';
import Details from './pages/details/Index';
import Favorites from './pages/favorites/Index';
import { GlobalContext } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithRoutes = () => (
  <Router>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
        {/*<Route path="/about" element={<About/>}/> */}
      </Routes>
    </App>
  </Router>
);

root.render(
  <React.StrictMode>
    <GlobalContext>
    <AppWithRoutes />
    </GlobalContext>
  </React.StrictMode>
);

reportWebVitals();
