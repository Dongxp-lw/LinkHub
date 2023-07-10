import { Action,ActionTypes, Payload} from "./typing";

export const ActionNextGroup = ():Action=>({
    type:ActionTypes.INDEX_NEXT
});
export const ActionPrevGroup = ():Action=>({
    type:ActionTypes.INDEX_PREV
});
export const ActionSpecifiedGroup = (index:Payload['GO']):Action=>({
    type:ActionTypes.INDEX_GO,
    payload:index
})