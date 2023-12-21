import React from "react";

interface IProps {
  className?: string;
}

const SideDrawer = (props: IProps) => {
  const { className } = props;
  return <div className={className}>SideDrawer</div>;
};

export default SideDrawer;
