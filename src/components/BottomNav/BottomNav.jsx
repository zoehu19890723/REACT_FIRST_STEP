/**
 * Created by Zoe Hu on 16/5/25.
 * items : Array
 * each item : {name,text,icon,notification,notificationClassName},'name' is necessary
 */


'use strict';

import './bottomNav.less';

import React, { Component } from 'react';


export default class BottomNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items
    };
  }

  render() {
    const { items } = this.state,
          { onActivate } = this.props;
    this.onActivate = onActivate;
    const tabItems = items.map((item, index) => {
      const className = 'external tab-link'+ (item.active ? ' active' : ''),
            iconClassName = (item.icon) ? ('icon fa fa-'+ item.icon) : null,
            badgeClassName = 'badge bg-red' + (item.notificationClassName ? (' '+item.notificationClassName):'');

      return <a className={className} key={index}
                href={`#/${item.link}`}
                onTouchTap={this.activateTab.bind(this, index)}>
                {
                  item.icon
                    ? <i className={iconClassName} name={item.icon}>
                            {
                              (item.notification && item.notification>0)
                              ? <span className={badgeClassName}>{item.notification}</span>
                                :null
                             }
                      </i>
                    : null
                }
                {
                  item.text ? <span className='tabbar-label'>{item.text}</span> : item.text
                }
              </a>;
              });

    return (
        <div className="toolbar tabbar tabbar-labels" style={{ position:'absolute' }}>
          <div className="toolbar-inner">
              {tabItems}
          </div>
        </div>
    );
  }


  /**
   * Activate a tab by index
   * @param {number} index
   */
  activateTab(index) {
    let oldActiveItem, activeItem;

    this.state.items.forEach((item, itemIndex) => {
      if (item.active) {
        oldActiveItem = item;
      }

      item.active = (itemIndex === index);

      if (item.active) {
        activeItem = item;
      }
    });

    if ((oldActiveItem !== activeItem) && (typeof this.onActivate === 'function')) {
      this.onActivate.call(this, activeItem.name, index);
    }

    this.setState({
      items: this.state.items
    });
  }
}