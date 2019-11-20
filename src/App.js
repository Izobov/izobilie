import React from 'react';
import './App.css';
import Header from './component/Header/Header';
// import Sidebar from './component/Sidebar/Sidebar';
import { Route } from 'react-router-dom'
import About from './component/About/About';
import Contacts from './component/Contacts/Contacts';
import SidebarContainer from './component/Sidebar/SidebarContainer';
import Catalog from './component/Catalog/Catalog';
import CatalogContainer from './component/Catalog/CatalogContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <SidebarContainer />
      <main className="main">
        <Route path='/about' render={() => <About />} />
        <Route path='/contacts' render={() => <Contacts />} />
        <Route path='/catalog' render={() => <CatalogContainer />} />


      </main>

      <footer className='footer'></footer>
    </div>
  );
}

export default App;
