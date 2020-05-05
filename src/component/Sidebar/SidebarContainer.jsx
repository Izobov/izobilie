import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setCatalogThunk, setCurentCategory, setCurentSection, insertCategory, deleteCategory, addSection, deleteSection, updateNestedSections } from "../../redux/catalog_reducer";
import { setProductsThunk } from "../../redux/catalog_reducer";



class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteCategory = this.onDeleteCategory.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this)
    this.onUpdateNestedSections = this.onUpdateNestedSections.bind(this)

  }


  componentDidMount() {
    this.props.setCatalogThunk();
  }

  onClick(params, name) {
    debugger

    this.props.setProductsThunk(params);
    this.props.setCurentCategory(name);
    this.props.setCurentSection(params.sectionName || params.nestedSectionName)

  }

  onSubmit(params) {

    this.props.insertCategory(params)
    // CatalogAPI.addCatalog(name);
  }

  onDeleteCategory(params) {

    this.props.deleteCategory(params)
  }

  deleteSection(name, id) {
    this.props.deleteSection(name, id)
  }

  addSection(name, id) {

    this.props.addSection(name, id)
  }

  onUpdateNestedSections(categoryName, sectionName, arr) {
    this.props.updateNestedSections(categoryName, sectionName, arr)
  }

  render() {
    return (

      <Sidebar
        {...this.props}
        onClick={this.onClick}
        onSubmit={this.onSubmit}
        deleteCategory={this.onDeleteCategory}
        addSection={this.addSection}
        deleteSection={this.deleteSection}
        update={this.onUpdateNestedSections}

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
  deleteCategory,
  addSection,
  deleteSection,
  updateNestedSections


})(SidebarContainer);
