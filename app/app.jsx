var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router, IndexRoute, hashHistory} = require('react-router');
//same as var Route = require('react-router').Route; var Router = ... for each variable in curly braces
var ReactBootstrap = require('react-bootstrap');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path ="/" component={Main}>
    <Route path="about" component={About}></Route>
    <Route path="Examples" component={Examples}></Route>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,

document.getElementById('app')
);
