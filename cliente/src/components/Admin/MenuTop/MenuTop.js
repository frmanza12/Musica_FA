import React from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import MusicaFAlogo from "../../../assets/img/png/logo.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__lef">
        <img
          className="menu-top__left-logo"
          src={MusicaFAlogo}
          alt="MusicaFA"
        />

        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {React.createElement(
            menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
