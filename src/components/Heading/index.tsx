import { ComponentProps } from "./typing";
import { useReducer } from "react";
import classesReducer from "@/reducer/classesReducer";

const Heading: React.FC<ComponentProps> = ({ level, children, className,style }) => {
  const [classes, dispatch] = useReducer(
    classesReducer,
    `${className ? className : ""}`
  );
  switch (level) {
    case "1": {
      return <h1 className={classes} style={style}>{children}</h1>;
    }
    case "2": {
      return <h2 className={classes} style={style}>{children}</h2>;
    }
    case "3": {
      return <h3 className={classes} style={style}>{children}</h3>;
    }
    case "4": {
      return <h4 className={classes} style={style}>{children}</h4>;
    }
    case "5": {
      return <h5 className={classes} style={style}>{children}</h5>;
    }
  }
};

export default Heading;
