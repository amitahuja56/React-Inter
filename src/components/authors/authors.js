"use strict";

var React=require('react');
var AuthorApi=require('../../api/authorApi');
var AuthorsList=require('./authorsList');
var Router = require('react-router');
var Link = Router.Link;

var Authors=React.createClass({
	 

	getInitialState:function () {
		return{
			authors:[]
		};
	},
	componentDidMount:function () {

		if(this.isMounted()){

		this.setState({authors:AuthorApi.getAllAuthors()});

		}
		
		
	},

	render: function () {
		return (
			<div>
				<h1> Authors </h1>
				<Link to="add-author" className="btn btn-success"> Add Auhtor</Link>
				<AuthorsList authors={this.state.authors} />
			</div>
			);
	}

});

module.exports=Authors;