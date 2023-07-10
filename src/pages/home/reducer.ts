import { Action, ActionTypes, Payload } from './typing';
import { ProjectList } from '@/global'

export const reducer = (state: ProjectList, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD: {
            return [
                ...state,
                <Payload[ActionTypes.ADD]>action.payload
            ];
            return state;

        }
        case ActionTypes.DELETE: {
            return state.filter(item => item.key !== action.payload);
            // return state;

        }
        case ActionTypes.UPDATE: {
            return state.map((item) => {
                if (item.key === (<Payload[ActionTypes.UPDATE]>action.payload).key) {
                    return <Payload[ActionTypes.UPDATE]>action.payload;
                } else {
                    return item;
                }
            });
        }
        default: {
            return state;
        }
    }
}