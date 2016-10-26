import './index.scss';

import React from 'react';
import Header from '../ui-Header';
import Nav from '../ui-Nav';
import Hero from '../ui-Hero';
import Footer from '../ui-Footer';


export default class AppContainer extends React.Component {

	static get propTypes() {
		return {
			appData: React.PropTypes.object
		};
	};

	render() {
		const {
			appData
		} = this.props;

		return (
			<div className="app-container">
				<Header />
				<Nav />
				<Hero />
				<Footer />
			</div>
		);
	}

	showThankYouScreen() {
		console.log('change when form submitted...');
		this.setState({formSubmitted: true});
	}
}
