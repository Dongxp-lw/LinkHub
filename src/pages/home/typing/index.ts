
import { Project } from "@/global";

export enum ActionTypes {
    ADD = "ADD",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}

export interface Payload {
    [ActionTypes.ADD]:Project,
    [ActionTypes.UPDATE]:Project,
    [ActionTypes.DELETE]:Project["key"]
}

export interface Action {
    type: ActionTypes,
    payload: Payload[ActionTypes]
}