import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <CDBSidebar textColor="#fff" backgroundColor="#07425b">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          Loan Categories
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/borrow" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="graduation-cap">Student Loans</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/medical" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-md">Medical Loans</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/mortgage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Mortgage Loans</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/standard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="money">
                Standard Loans
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/why" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="btc">
                Why Bitloanscapital?
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/process" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="spinner">
                Borrowing Process
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/privacy" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shield">
                Privacy and Security
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Borrowing Page
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;