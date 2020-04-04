import React from 'react';
import './App.css';
import {
  Route
} from 'react-router-dom'
import About from './component/About/About';
import Contacts from './component/Contacts/Contacts';
import SidebarContainer from './component/Sidebar/SidebarContainer';
import ProductsContainer from './component/Catalog/ProductsContainer';
import BasketContainer from './component/Basket/BasketContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/Login/Login';
import OrdersContainer from './component/Orders/OrdersContainer';
import Footer from './component/Footer/Footer';
import HomePage from './component/HomePage/HomePage';



function App() {


  return (

    <div className="App" >
      <HeaderContainer />
      < main className="main" >
        <SidebarContainer />
        <BasketContainer />
        <div className="content_wrapper" >

          <div className='content' >

            <Route path='/' exact
              render={
                () => <HomePage />
              }
            />

            <Route path='/about'
              render={
                () => < About />
              }
            />
            <Route path='/contacts'
              render={
                () => < Contacts />
              }
            />
            <Route path='/products'
              render={
                () => < ProductsContainer />
              }
            />
            <Route path='/basket'
              render={
                () => < BasketContainer />
              } />
            <Route path='/login'
              render={
                () => < Login />
              } />
            <Route path='/orders'
              render={
                () => < OrdersContainer />
              } />
          </div>
        </div>



      </main>

      {
      /* <Footer /> */} </div>

  );
}

export default App;