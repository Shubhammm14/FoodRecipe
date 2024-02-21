import React, { useContext } from 'react';
import { Form, NavLink } from 'react-router-dom';
import { BiLogoCodepen } from "react-icons/bi";
import Details from '../pages/details/Index';
import Home from '../pages/home/Index';
import Favorites from '../pages/favorites/Index';
import { GlobalContext } from '../Context';
const Navbar = () => {
  const [SearchParam,setSearchParam]=useContext(GlobalContext)
  return (
    <div className='h-full w-full flex justify-between items-center'>
        <h1 className='text-5xl text-orange-300  m-10 '>
           <BiLogoCodepen/>
        </h1>
    <div className=' flex text-2xl flex-row  items-center '>

      <form>
        <input
          type='text'
          placeholder='Search...'
          value={SearchParam}
          onChange={(e)=>{setSearchParam(e.target.value)}}
          className=' border p-2 rounded-full border-none shadow-xl text-lg  outline-none shadow-orange-200 w-[20vw]  '
        />
        
      </form>
      <ul className=' flex gap-5 mx-10 flex flex-row'>
        <li >
            <NavLink to={'/details'} className=''>
                 <Details/>
            </NavLink>
           
            

        </li>
        <li>
        <NavLink to={'/'} className=''>
                 <Home/>
            </NavLink>
        </li>
        <li>
        <NavLink to={'/favorites'} className=''>
                 <Favorites/>
            </NavLink>
        </li>
      </ul>
      <div>
        <p>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
