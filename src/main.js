$ = jQuery = require('jquery');

var React=require('react');
var Home=require('./components/homePage');
var About=require('./components/about/aboutPage');
var Header=require('./components/common/header');
var Authors=require('./components/authors/authors');


var App=React.createClass({

	render: function () {
		var View;

		switch(this.props.route)
		{
			case 'about': View=About; break;
			case 'authors': View=Authors; break;
			default: View=Home;
		}
		
		return (
			<div>
				<Header/>
				<View/>
			</div>
			);
	}
});


function routeView(){
	var route=window.location.hash.substr(1);
	React.render(<App route={route} /> , document.getElementById('app'));
}

window.addEventListener('hashchange',routeView);
routeView();



