import React from "react";
import classes from "./grid.module.scss";
type Props = {
  children: React.ReactNode;
};
const Grid = ({ children }: Props) => {
  return <div className={classes.container}>{children}</div>;
};

export default Grid;
