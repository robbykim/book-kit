var React = require('react');
var Navbar = require('./nav-header');

var NavbarContainer = React.createClass({
  getInitialState: function () {
    return {
      input: ''
    };
  },
  onChange: function (event) {
    var value = event.target.value;
    console.log('asdf');
    this.setState({
      input: value
    });
  },
  render: function () {
    return (
      <Navbar input={this.state.input} onChange={this.onChange}/>
    );
  }
});

module.exports = NavbarContainer;
