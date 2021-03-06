"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;


var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authors')} />
    <Route name="add-author" path="author" handler={require('./components/authors/manageAuthorPage')} />
     <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
    <Route name="about" handler={require('./components/about/aboutPage')} />
      <NotFoundRoute handler={require('./components/notFoundPage')} />
  </Route>
);

module.exports = routes;