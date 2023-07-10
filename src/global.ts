import { PropsWithChildren } from "react";



/**
 * Project
 */
export type ProjectKey = string;
export interface Project {
    key: ProjectKey,
    name: string,
    desc?: string,
    icon?: string,
    link:string
}
export type ProjectList = Array<Project>;
/** 
 * End
 */



/**
 * Component
 */
export interface DefaultComponentProps extends PropsWithChildren {
    className?: string | undefined
    style?: React.CSSProperties
    [key:string]:any
}
/** 
 * End
 */


// Common
export enum ATarget {
    __self = "_self",
    _blank = "_blank",
    _parent = "_parent",
    _top = "_top"
}


