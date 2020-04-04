import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setCatalogThunk, setCurentCategory, setCurentSection } from "../../redux/catalog_reducer";
import { setProductsThunk } from "../../redux/catalog_reducer";
import { CatalogAPI } from "../../api/api";
import { upload } from "../../api/stitch";

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.props.setCatalogThunk();
  }

  onClick(params, name) {

    this.props.setProductsThunk(params);
    this.props.setCurentCategory(name);
    if (params.sectionId) {

      this.props.setCurentSection(params.sectionId)
    }
  }

  onSubmit(name) {
    CatalogAPI.addCatalog(name);
  }

  onChange(file) {
    upload(file)
  }

  render() {
    return (

      <Sidebar
        {...this.props}
        onClick={this.onClick}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
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

  upload
})(SidebarContainer);
