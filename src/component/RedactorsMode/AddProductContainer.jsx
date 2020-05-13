import React from 'react';
import { connect } from 'react-redux';
import SidebarContainer from '../Sidebar/SidebarContainer';
import AddProduct from './AddProduct';
import { setCurentSection, insertProduct } from "../../redux/catalog_reducer"





class AddProductContainer extends React.Component {

    constructor(props) {

        super(props);

        this.save = this.save.bind(this)

    }

    save(params, section, category) {
        this.props.insertProduct(params, section, category)
    }

    render() {

        return <>
            <SidebarContainer />
            <AddProduct  {...this.props} save={this.save} />

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog.catalog,
        currentCategory: state.catalog.currentCategory,
        currentSection: state.catalog.currentSection

    }
}




export default connect(mapStateToProps, {
    setCurentSection, insertProduct
})(AddProductContainer)