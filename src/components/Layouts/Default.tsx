import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Layout.module.css";
import DefaultMenu from "../Menu/Default";

const cx = classNames.bind(styles);

const Default = () => {
  return (
    <div className={cx({ wrapper: true })}>
      <DefaultMenu />
      <Outlet />
    </div>
  );
};

export default Default;
