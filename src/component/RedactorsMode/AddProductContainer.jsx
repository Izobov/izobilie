import React from 'react';
import { connect } from 'react-redux';
import SidebarContainer from '../Sidebar/SidebarContainer';
import AddProduct from './AddProduct';
import { setCurentSection, insertProduct, updateProducts, deleteProduct, setProductById, setCurrentProduct } from "../../redux/catalog_reducer"
import { withRouter, NavLink, Redirect } from 'react-router-dom';
import { compose } from "redux";
import { BSON } from 'mongodb-stitch-browser-sdk';






class AddProductContainer extends React.Component {

    constructor(props) {

        super(props);

        this.save = this.save.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)

    }
    async componentWillMount() {
        let id = this.props.match.params.id
        let objId = new BSON.ObjectId(id)

        if (id) {

            await this.props.setProductById({ _id: objId })
        }

    }

    save(params, section, category) {
        this.props.insertProduct(params, section, category)
    }
    update(params, id) {
        this.props.updateProducts(params, id)
    }
    delete(params, section, category) {
        this.props.deleteProduct(params, section, category)
    }

    render() {

        if (!this.props.isAuth) { return <Redirect to="/" /> }

        return <>
            <SidebarContainer />
            {this.props.currentProduct && this.props.match.params.id &&
                <AddProduct  {...this.props} save={this.save} update={this.update} delete={this.delete} />}
            {!this.props.match.params.id && <AddProduct  {...this.props} save={this.save} update={this.update} delete={this.delete} currentProduct={false} />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog.catalog,
        currentCategory: state.catalog.currentCategory,
        currentSection: state.catalog.currentSection,
        currentProduct: state.catalog.currentProduct,
        isAuth: state.auth.isAuth

    }
}




export default compose(
    connect(mapStateToProps, {
        setCurentSection, insertProduct, updateProducts, deleteProduct, setProductById, setCurrentProduct
    }),
    withRouter
)(AddProductContainer)