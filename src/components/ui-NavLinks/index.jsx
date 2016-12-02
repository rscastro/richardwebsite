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
          email,
          address1,
          address2,
          address3
        },
        navColumns
      }
    } = this.props;

    return (
      <div className={`grid ${ isFooter ? 'nav-footer-links' : ''}`}>
        <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
          <h3 className="title underline">{title}</h3>
          <p>
            {weAre}
            <span className="contact">
              <a href="tel:+1-415-263-7383">
                415-263-7383
              </a>
            </span><br/>
            <span className="contact">
              <a href={'mailto:' + email}>
                {email}
              </a>
            </span>
            <span className="addr">{address1}</span>
            <span className="addr">{address2}</span>
            <span className="addr">{address3}</span>
          </p>
          <SocialMediaIcons />
        </div>
      { this.renderColumns(navColumns) }
      </div>
    );
  }
}
