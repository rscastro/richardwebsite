import './index.scss';

import React, { Component } from 'react';

export default class Nav extends Component {

	static get propTypes() {
    return {
      data: React.PropTypes.object
    };
  }

	render() {
		const { data } = this.props;
		
		return (
			<div className="nav">
				<ul>
					{ this.renderNav(data.links) }
				</ul>
			</div>
  	);
	}

	renderNav(links) {
		return links.map((link, index) => {
      return (
        <li key={index}>
					<a href={link.url}>{link.title}</a>
				</li>
      );
    });
	}

}
