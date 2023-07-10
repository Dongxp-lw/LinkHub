import type { ComponentProps, PropsListItem } from "./typing";
import { useCallback, useReducer } from "react";
import classesReducer from "@/reducer/classesReducer";
import styles from "./style/index.scss";
import Link from "@/components/Link";
import Heading from "@/components/Heading";
import Iconfont from "@/components/IconFont";
import { ActionNextGroup, ActionPrevGroup } from "./actions";

import { componentStateReducer, initStateWithList } from "./reducer";

export default (props: ComponentProps) => {
  const [classes, classesDispatch] = useReducer(
    classesReducer,
    `${styles["link-group"]}`
  );

  const [state, dispatch] = useReducer(
    componentStateReducer,
    Object.assign({}, initStateWithList(props.list))
  );
  const renderItemContent = useCallback((data: PropsListItem) => {
    return (
      <div className={styles["link-group__item-content"]}>
        <Heading
          level="2"
          className={`${styles["link-group__item-content-title"]}`}
        >
          {data.name}
        </Heading>
        <div className={`${styles["link-group__item-content-desc"]}`}>
          {data.desc}
        </div>
      </div>
    );
  }, []);

  const renderItem = useCallback((data: PropsListItem, index: number) => {
    let inDuration = 500;
    let inDelay = inDuration * 0.8;
    let style = {
      animationName: "slideInDown",
      animationDuration: `${inDuration}ms`,
      animationDelay: `${inDelay * index}ms`,
      animationTimingFunction: "linear",
      animationFillMode: "both",
    };
    return (
      <Link {...data} style={style} className={`${styles["link-group__item"]}`}>
        {renderItemContent(data)}
      </Link>
    );
  }, []);

  const renderTools = useCallback(() => {
    return (
      <div className={styles["link-group__tools"]}>{renderToggleTool()}</div>
    );
  }, []);

  const renderToggleTool = useCallback(() => {
    return (
      <>
        <div
          className={`${styles["tool"]}`}
          onClick={() => dispatch(ActionPrevGroup())}
        >
          <Iconfont iconName="#icon-left" />
        </div>
        <div
          className={`${styles["tool"]}`}
          onClick={() => dispatch(ActionNextGroup())}
        >
          <Iconfont iconName="#icon-right" />
        </div>
      </>
    );
  }, []);

  return (
    <div className={classes}>
      {state.list.length > 0 ? renderTools() : <></>}
      {state.list.length > 0 ? state.currentGroup.map(renderItem) : <></>}
    </div>
  );
};
