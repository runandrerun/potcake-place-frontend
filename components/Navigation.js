import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Navigation extends Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log(e)
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
         <Link href='/'><a>Home</a></Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href='/about' prefetch><a>About Potcake Place</a></Link>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper">What We Do</span>}>
          <MenuItemGroup title="About Us">
            {/*<Menu.Item key="setting:1"><a href="/about">About Us</a></Menu.Item>*/}
            <Menu.Item key="setting:2">Health</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Adoption">
            <Menu.Item key="setting:3">Adopt</Menu.Item>
            {/*<Menu.Item key="setting:4">Option 4</Menu.Item>*/}
          </MenuItemGroup>
        </SubMenu>
        {/*<Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>*/}
      </Menu>
    );
  }
};
