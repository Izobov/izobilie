import React from 'react';
import './App.css';
import {
  Route
} from 'react-router-dom'
import About from './component/About/About';
import PayInfo from './component/PayInfo/PayInfo';
import CatalogContainer from './component/Catalog/CatalogContainer';
import BasketContainer from './component/Basket/BasketContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/Login/Login';
import OrdersContainer from './component/Orders/OrdersContainer';
import Footer from './component/Footer/Footer';
import HomePage from './component/HomePage/HomePage';
import ProductContainer from "./component/Product/ProductContainer"
import AddProductContainer from './component/RedactorsMode/AddProductContainer';



function App() {


  return (

    <div className="App" >
      <HeaderContainer />
      <BasketContainer />
      < main className="main" >
        <div className="content_wrapper" >

          <div className='content' >

            <Route path='/' exact
              render={
                () => <HomePage />
              }
            />

            <Route path='/about/:asd?'
              render={
                () => < About />
              }
            />
            <Route path='/payinfo'
              render={
                () => < PayInfo />
              }
            />
            <Route path='/catalog/:action?/:name?'
              render={
                () => < CatalogContainer />
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
            <Route path='/product'
              render={
                () => < ProductContainer />
              } />
            <Route path='/productadd'
              render={
                () => < AddProductContainer />
              } />
          </div>
        </div>



      </main>


      <Footer />
    </div>

  );
}

export default App;