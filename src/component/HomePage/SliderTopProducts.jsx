import React, { useEffect } from "react";
import Swiper from 'react-id-swiper';
import s from "./home.module.css";
import d from "../Catalog/Products/product.module.css";
import 'swiper/css/swiper.css';
import { connect } from 'react-redux';
import Products from "../Catalog/Products/Products"
import { getTopProducts } from "../../redux/catalog_reducer";
import { setBasketProducts } from "../../redux/basket_reducer";


const SliderTopProducts = (props) => {


    useEffect(() => {


        if (!props.topProducts.length) {
            props.getTopProducts()
        }
    }, [])


    let pushInBasket = (product, count) => {
        if (count > 0) {
            product.count = count;

        } else {
            product.count = 1
        }
        props.setBasketProducts(product)


    }



    const params = {

        slidesPerView: 1,
        // spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
        ContainerEl: "array"
    }

    let productsElements = props.topProducts.map(i =>




        <Products product={i} key={i._id} pushInBasket={pushInBasket} catalog={props.catalog} basket={props.basket} />


    )


    if (props.catalog.length) {
        return (


            <  >
                {productsElements}



            </ >

        )
    } else { return <></> }
}

const mapStateToProps = (state) => {
    return {
        topProducts: state.catalog.topProducts,
        catalog: state.catalog.catalog,
        basket: state.basket.products,
    }
}

export default connect(mapStateToProps, { getTopProducts, setBasketProducts })(SliderTopProducts)