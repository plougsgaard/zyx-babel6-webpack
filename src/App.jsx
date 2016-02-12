const React = require('react')

const App = React.createClass({
  render: function () {
    return React.DOM.div({}, 'Hello World.. \u221E Things are things.')
  }
})

module.exports = App
