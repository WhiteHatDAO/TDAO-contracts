import { PageHeader } from "antd";
import React from "react";
import logo from "../assets/talent-logo.png";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader title={<img src={logo} />} style={{ cursor: "pointer" }} />
    </a>
  );
}
