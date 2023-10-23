import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Styles from "./ManageLayout.module.scss";

const ManageLayout: FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>ManageLayout header</div>
      <div className={Styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
