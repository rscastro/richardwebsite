import './_index.scss';

import React from 'react';
import Nav from '../ui-Nav';
import { pageview } from '../u-Analytics';

export default class AppContainer extends React.Component {
  componentWillMount() {
    const { pathname } = this.props;
    pageview({pathname: pathname});
  }

  render() {
    return (
      <div className='app-container'>
        <Nav />
        { this.props.children }
      </div>
    );
  }
}
