import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { setCatalogThunk } from '../../redux/catalog_reducer';
import { setCategories } from '../../redux/catalog_reducer';



class SidebarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {

        this.props.setCatalogThunk()
    }

    onClick(id) {
        this.props.setCategories(id)
    }

    render() {

        return <Sidebar catalog={this.props.catalog} onClick={this.onClick} />
    }
}

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog.catalog,
    }
}

export default connect(mapStateToProps, { setCatalogThunk, setCategories })(SidebarContainer)