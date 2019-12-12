import React from 'react'
import ReactDOM from 'react-dom'

class Portal extends React.Component {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    render() {

        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

export default Portal;