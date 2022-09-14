
import './App.css';
import Search from './components/search.js';
import Noteslist from './components/noteslist.js';
import React from 'react';
import './index.css';

function App() {

  function toggle1(){
    var element = document.body;
   element.classList.toggle("dark-mode");
  }


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='w-50 p-3'>
            <h1 className='h1'>Notes</h1>
          </div>
          <div className='w-50 d-grid gap-2 d-md-flex justify-content-md-end p-3'>
            <button className='btn btn-primary me-md-2 sm' onClick={toggle1}>Toggle Switch</button>
          </div>
        </div>
        <Search />
      
      <Noteslist />
      </div>
    </>
  );
}

export default App;
