import { DefaultComponentProps } from "@/global";
import { ComponentProps as LinkComponentProps } from '@/components/Link/typing'

export interface PropsListItem extends LinkComponentProps {
    key: string,
    name: string,
    isEmpty?:boolean
}
export interface ComponentProps extends DefaultComponentProps {
    list: PropsListItem[]
}

export interface ComponentState {
    list:ComponentProps['list'],
    currentGroup:ComponentProps['list'],
    currentGroupIndex:number,
    groupNum:number
}

export enum ActionTypes {
    INDEX_NEXT = "NEXT",
    INDEX_PREV = "PREV",
    INDEX_GO = "GO"
}

export interface Payload {
    [ActionTypes.INDEX_NEXT]: undefined
    [ActionTypes.INDEX_PREV]: undefined,
    [ActionTypes.INDEX_GO]: number
}

export interface Action {
    type: ActionTypes
    payload?:Payload[ActionTypes]
}