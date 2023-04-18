import connect from '@/store/connect';
import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { push } from 'connected-react-router';

import './index.scss';

interface IHomeChildProps {
  pathname?: string;
  search?: string;
  hash?: string;
  push?: (path: string, s?: any) => void;
}

const mapStateToProps = {
  pathname: 'router.location.pathname',
  search: 'router.location.search',
  hash: 'router.location.hash',
};

const mapDispatchToProps = {
  push,
};

@connect(mapStateToProps, mapDispatchToProps)
class HomeChild extends BaseComponent<IHomeChildProps> {
  handleGoPage = () => {
    this.props.push('/page1', { a: 1 });
  };

  handleGoPage2 = () => {
    this.props.push('/page2', { a: 3 });
  };

  render() {
    const { pathname, search, hash } = this.props;
    return (
      <div className="home-child">
        <div className="text1">pathname::{pathname} </div>
        <div className="text1">search::{search} </div>
        <div className="text1">hash::{hash} </div>
        <button type="button" onClick={this.handleGoPage}>
          跳转page1
        </button>
        <button type="button" onClick={this.handleGoPage2}>
          跳转page2
        </button>
      </div>
    );
  }
}

export default HomeChild;
