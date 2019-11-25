import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import About from './component/About/About';
import Contacts from './component/Contacts/Contacts';
import SidebarContainer from './component/Sidebar/SidebarContainer';
import CatalogContainer from './component/Catalog/CatalogContainer';
import BasketContainer from './component/Basket/BasketContainer';
import HeaderContainer from './component/Header/HeaderContainer';


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <SidebarContainer />
      <main className="main">
        <Route path='/about' render={() => <About />} />
        <Route path='/contacts' render={() => <Contacts />} />
        <Route path='/catalog' render={() => <CatalogContainer />} />
        <Route path='/basket' render={() => <BasketContainer />} />



      </main>

      <footer className='footer'></footer>

    </div>
  );
}

export default App;
