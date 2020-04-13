import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setCatalogThunk, setCurentCategory, setCurentSection,  insertCategory } from "../../redux/catalog_reducer";
import { setProductsThunk } from "../../redux/catalog_reducer";
// import { CatalogAPI } from "../../api/api";


class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    this.props.setCatalogThunk();
  }

  onClick(params, name) {

    this.props.setProductsThunk(params);
    this.props.setCurentCategory(name);
    if (params.sectionName) {

      this.props.setCurentSection(params.sectionName)
    }
  }

  onSubmit(params) {
    debugger
   this.props.insertCategory(params)
    // CatalogAPI.addCatalog(name);
  }


  render() {
    return (

      <Sidebar
        {...this.props}
        onClick={this.onClick}
        onSubmit={this.onSubmit}

      />
    );
  }
}


let mapStateToProps = state => {
  return {
    catalog: state.catalog.catalog,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  setCatalogThunk,
  setProductsThunk,
  setCurentCategory,
  setCurentSection,
  insertCategory,


})(SidebarContainer);
