import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setCatalogThunk, insertCategory, deleteCategory, addSection, deleteSection, updateNestedSections } from "../../redux/catalog_reducer";




class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteCategory = this.onDeleteCategory.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this)
    this.onUpdateNestedSections = this.onUpdateNestedSections.bind(this)

  }


  componentDidMount() {
    this.props.setCatalogThunk();
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
  insertCategory,
  deleteCategory,
  addSection,
  deleteSection,
  updateNestedSections


})(SidebarContainer);
