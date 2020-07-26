import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import './sidebar.component.css';
import {
  FaHeart,
  FaBars, FaHome, FaPepperHot, FaBook,
  FaPen,
  FaInbox,
  FaArrowRight
} from 'react-icons/fa';
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { IconContext} from 'react-icons';
interface MyState { 
  toggled: boolean,
  collapsed: boolean
}
export class SideBar extends React.Component<{}, MyState>{
  constructor(props: any) { 
    super(props);
    this.state = {
      toggled: false,
      collapsed: true
    };
  }
  onToggle(value: boolean) {
    console.log("Hello: " + value);
    this.setState({ toggled: !this.state.toggled });
  }
  expandSidebar() { 
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    return (
      <IconContext.Provider value={{color: 'black', className: "sidebar-icon"}}>
        
        <ProSidebar className="custom-sidebar" 
          onToggle={this.onToggle}
          toggled={this.state.toggled}
          collapsed={this.state.collapsed}
          breakPoint="md">
          <Menu iconShape="square">
            <div onClick={()=>this.expandSidebar()}>
              <MenuItem className="hover-text" icon={<FaArrowRight></FaArrowRight>}></MenuItem>
            </div>
            <MenuItem className="hover-text" icon={<FaHome/>}> Home </MenuItem>
            <MenuItem className="hover-text" icon={<FaPepperHot/>}> Profile </MenuItem>
            <SubMenu title="Diary" className="hover-text" icon={<FaBook></FaBook>}>
              <MenuItem prefix={<FaPen></FaPen>}>Write Diary</MenuItem>
              <MenuItem prefix={<FaInbox></FaInbox>}>My collection</MenuItem>
          </SubMenu>
          </Menu>
        </ProSidebar>
      </IconContext.Provider>
    );
  }
}