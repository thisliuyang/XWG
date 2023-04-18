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
class Header extends BaseComponent<IHomeChildProps> {
  render() {
    return (
      <div className="header">
        <div className="header-t">
          <div className="w">her</div>
        </div>
      </div>
    );
  }
}

export default Header;
