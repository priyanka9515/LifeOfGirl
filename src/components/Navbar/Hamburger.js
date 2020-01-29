
import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Icon, Button } from 'antd';

// const { SubMenu } = Menu;

class Hamburger extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 1 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span>Family 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span>Friends 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            <span>Colleagues 3</span>
          </Menu.Item>
                  </Menu>
      </div>
    );
  }
}

export default Hamburger;
          