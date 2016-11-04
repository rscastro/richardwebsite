
import React, { Component } from 'react';


export default class List extends Component {

  static get propTypes() {
    return {
      items: React.PropTypes.array.required,
      className: React.PropTypes.string
    };
  }

  renderItems(items) {
    return items.map((item, index) => {
      if (item.url) {
        return (
          <li key={item.title + '-' + index}>
            <a href={item.url}>
              {item.title}
            </a>
          </li>
        );

      } else {
        return (
          <li key={item.title + '-' + index}>
            {item.title}
          </li>
        );
      }
    });
  }

  render() {
    const {
      items,
      className
    } = this.props;

    return (
      <ul className={className}>
        { this.renderItems(items) }
      </ul>
    );
  }
}
