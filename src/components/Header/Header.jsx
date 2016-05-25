/**
 * Created by Zoe Hu on 16/5/25.
 */


'use strict';

import './header.less';

import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    const { title, leftIcon, rightIcon, leftText, rightText, leftLink, rightLink} = this.props,
          leftIconClass = leftIcon ? 'header-icon fa fa-' + leftIcon : null,
          rightIconClass =  rightIcon ? 'header-icon fa fa-' + rightIcon : null,
    
          itemLeft = (leftIcon || leftText)
            ? <a href = {`#/${leftLink}`} className='link icon-only external'>
                { leftIcon ?
                  <i className={leftIconClass}></i> : null
                }
                {
                  leftText ?
                  <span>{leftText}</span> : null
                }
              </a> : null,
          itemRight = (rightIcon || rightText)
            ? <a href = {`#/${rightLink}`} className='link icon-only external'>
                { rightIcon ?
                  <i className={rightIconClass}></i> : null
                }
                {
                  rightText ?
                  <span>{rightText}</span> : null
                }
              </a>  :  null;
    return (
      <div className='navbar'>
        <div className='navbar-inner'>
            <div className='left'>
                {itemLeft}
            </div>
            <div className='center'>{title}</div>
            <div className='right'>
                {itemRight}
            </div>
        </div>
      </div>
    );
  }
}
