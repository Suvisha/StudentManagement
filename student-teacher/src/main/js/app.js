'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
// end::vars[]

// tag::app[]
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>IN React Page</h1>
        )
    }
}

// end::app[]

// tag::render[]
ReactDOM.render(
    <App/>,
    document.getElementById('react')
)
// end::render[]

