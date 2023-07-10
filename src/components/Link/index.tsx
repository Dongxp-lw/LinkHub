import { useReducer } from "react";
import { ComponentProps } from "./typing";
import styles from "./style/index.scss";
import classesReducer from "@/reducer/classesReducer";

const Link: React.FC<ComponentProps> = ({
  link,
  target,
  className,
  style,
  children,
}) => {
  const [classes, dispatch] = useReducer(
    classesReducer,
    `${styles["link"]} ${className ? className : ""}`
  );
  return (
    <a
      className={classes}
      style={style}
      href={link}
      target={target ? target : "_self"}
    >
      {children}
    </a>
  );
};

export default Link;
