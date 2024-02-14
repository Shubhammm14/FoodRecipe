import {Routes,Route, Outlet} from 'react-router-dom'
import Navbar from './Component/Navbar';

function App() {
  
  return (
    <div>
      <div className=' w-full h-[10vh] bg-gray-200'>
        <Navbar/>
      </div>
      <div>
         <Outlet/>
      </div>
    </div>
  );
}

export default App;
