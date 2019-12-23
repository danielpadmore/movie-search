import React from "react";
import classes from "./card.module.scss";

type Props = {
  backgroundUrl?: string;
  children: React.ReactNode;
};
const Card = ({ children, backgroundUrl }: Props) => {
  const backgroundStyle = backgroundUrl
    ? {
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    : {};
  return (
    <div style={{ ...backgroundStyle }} className={classes.container}>
      {children}
    </div>
  );
};

export default Card;
