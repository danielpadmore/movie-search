import React from "react";
type Props = {
  children: React.ReactNode;
};
const Card = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Card;
