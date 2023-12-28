import React, { useLayoutEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { NavBar } from './components/navbar';


function App() {

  return (
    <div className='h-[100vh] flex flex-col'>
      <div>
        <NavBar />
      </div>
      <div className='flex-1 '>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
