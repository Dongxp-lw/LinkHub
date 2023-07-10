import { Action, ActionTypes } from './typing';

import { useReducer,useCallback } from "react";
import { reducer } from "./reducer";
// Component
import LinkGroup from '@/components/LinkGroup';
import { ProjectList } from '@/global';
import styles from './style/index.scss'



const initialProjectList:ProjectList = [];

export default () => {
    const [projectList,dispatch] = useReducer(reducer,initialProjectList);

    return (<div className={`${styles['home']}`}>
        <LinkGroup list={projectList}/>
    </div>)
};
