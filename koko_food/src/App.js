import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { GlobalContext } from './Context';

function App() {
  return (
    <GlobalContext>
      <div>
        <div className='w-full h-[10vh]'>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </GlobalContext>
  );
}

export default App;
