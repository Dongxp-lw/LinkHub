import { Action, ActionTypes, Payload, ComponentState, ComponentProps } from './typing';
import CONFIG from "./config";
import { Common } from "@/utils";
import { Basic } from './controls'


export const currentGroupIndexNormMiddleware = (currentGroupIndex: ComponentState['currentGroupIndex'], groupNum: ComponentState['groupNum']): ComponentState['currentGroupIndex'] => {
    if(groupNum === 0){
        return 0
    }
    if (currentGroupIndex >= groupNum) {
        currentGroupIndex = currentGroupIndex - groupNum;
    }
    if (currentGroupIndex < 0) {
        currentGroupIndex = groupNum + currentGroupIndex;
    }
    return currentGroupIndex
}

export const initStateWithList = (list: ComponentProps['list']): {
    list: ComponentState['list'],
    currentGroup: ComponentState['currentGroup'],
    currentGroupIndex: ComponentState['currentGroupIndex'],
    groupNum: ComponentState['groupNum']
} => {
    let groupNum = Math.ceil(list.length / CONFIG.groupLength);
    let currentGroupIndex = currentGroupIndexNormMiddleware(CONFIG.defaultGroupIndex, groupNum);
    const currentGroup: ComponentState["currentGroup"] = list.length > 0 ? Common.arraySlice(
        list,
        currentGroupIndex * CONFIG.groupLength,
        CONFIG.groupLength,
        Basic.fillFunc
    ):[];
    return {
        list,
        currentGroup,
        groupNum,
        currentGroupIndex,
    };
}

export const componentStateReducer = (state: ComponentState, action: Action) => {
    switch (action.type) {
        case ActionTypes.INDEX_NEXT: {
            console.log(state.currentGroupIndex,state.groupNum)
            const index = currentGroupIndexNormMiddleware(state.currentGroupIndex + 1, state.groupNum);
            const group = Common.arraySlice(state.list, index * CONFIG.groupLength, CONFIG.groupLength, Basic.fillFunc);
            return {
                ...state,
                currentGroupIndex: index,
                currentGroup: group
            }
        }
        case ActionTypes.INDEX_PREV: {
            const index = currentGroupIndexNormMiddleware(state.currentGroupIndex - 1, state.groupNum);
            const group = Common.arraySlice(state.list, index * CONFIG.groupLength, CONFIG.groupLength, Basic.fillFunc);
            return {
                ...state,
                currentGroupIndex: index,
                currentGroup: group
            }
        }
        case ActionTypes.INDEX_GO: {
            const index = currentGroupIndexNormMiddleware(<Payload['GO']>(action.payload), state.groupNum);
            const group = Common.arraySlice(state.list, index * CONFIG.groupLength, CONFIG.groupLength, Basic.fillFunc);
            return {
                ...state,
                currentGroupIndex: index,
                currentGroup: group
            }
        }
        default: {
            return state
        }
    }
}