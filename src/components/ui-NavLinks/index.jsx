import React, {Component} from 'react';

import NavColumn from '../ui-NavColumn'
import SocialMediaIcons from '../ui-SocialMediaIcons';

export default class NavLinks extends Component {

  constructor() {
    super();
  }

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn
          key={ `nav-column-${index}` }
          title={column.title}
          className={column.className}
          listlinks={column.listlinks}
        />
      );
    });
  }

  render() {
    const {
      isFooter,
      navData: {
        aboutInfo: {
          title,
          weAre,
          email
        },
        navColumns
      }
    } = this.props;

    return (
      <div className={`grid ${ isFooter ? 'nav-footer-links' : ''}`}>
        { this.renderColumns(navColumns) }
        <div className='nav-column nav-column-about grid__col-12 grid__col-sm-4 grid--order-1-sm'>
          <h3 className='title underline'>{title}</h3>
          <p>
            <span className='nav-we-are' dangerouslySetInnerHTML={ {__html: weAre} } />
            <span className='contact'>
              <a href='tel:+1-415-263-7383'>
                415-263-7383
              </a>
            </span><br/>
            <span className='contact'>
              <a href={'mailto:' + email}>
                {email}
              </a>
            </span><br/>
          </p>
          <SocialMediaIcons />
        </div>
      </div>
    );
  }
}
