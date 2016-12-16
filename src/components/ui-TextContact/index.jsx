import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';

export default class TextContact extends Component {

  static get propTypes() {
    return {
      copy: React.PropTypes.string,
      contacts: React.PropTypes.array
    };
  }

  renderContacts(contacts) {
    return contacts.map((contact, index) => {
      return (
        <p
          key={ `contact-${index}` }
        >
          { contact.what }
          <br/>
          <a href={contact.email}>{contact.email}</a>
        </p>
      );
    });
  }

  render() {
    const {
      copy,
      contacts
    } = this.props;

    return (
      <div className="text-contact">
        <GridLines />
        <div className="grid grid--justify-center">
          <div className="grid__col-12 grid__col-sm-6 grid__col-md-6 copy">
            <div dangerouslySetInnerHTML={ {__html: copy} } />
          </div>
          <div className="grid__col-12 grid__col-sm-4 grid__col-md-2 copy">
            { this.renderContacts(contacts) }
          </div>
        </div>
      </div>
    );
  }
}
