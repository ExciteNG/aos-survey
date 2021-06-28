import {Link} from "react-router-dom";
import React from "react";
// import styles from "./layout.module.css";
// import { useRouter } from "next/router";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {navItems} from './menu'
import logo from './../../../components/asset/img/Excite WLL.png'
// import "react-pro-sidebar/dist/css/styles.css";

export default function SideBar() {

  // console.log(router.pathname);
  return (
    <ProSidebar 
    // image="/nav-bg.png" 
    collapsed={false}>
      <SidebarHeader>
        <img src={logo} style={{ width: "150px" }} alt='brand'/>
      </SidebarHeader>
      <SidebarContent>
      <Menu iconShape="circle">
            <MenuItem>INFLUENCER CONSOLE</MenuItem>
          </Menu>
        {navItems.map((navCategory, index) => (
          <Menu iconShape="circle" key={index}>
            <MenuItem icon={<i className={navCategory.iClass}></i>}><Link href={navCategory.url}>{navCategory.category}</Link></MenuItem>
          </Menu>
        ))}
      </SidebarContent>
      <SidebarFooter>&copy; 2021</SidebarFooter>
    </ProSidebar>
  );
}
