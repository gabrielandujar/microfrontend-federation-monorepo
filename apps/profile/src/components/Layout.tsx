import React from 'react';
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/profile/page-1`} style={{ marginRight: "1rem" }}>
          Profile Page1
        </Link>
        <Link to={`/profile/page-2`} style={{ marginRight: "1rem" }}>
          Profile Page2
        </Link>
        <Link to={`/settings/page-a`} style={{ marginRight: "1rem" }}>
        Settings PageA
        </Link>
        <Link to={`/settings/page-b`}>Settings PageB</Link>
        <Link to={`/about`}>About</Link>
      </nav>
      <Outlet />
    </>
  );
}