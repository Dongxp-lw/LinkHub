// typing
export enum ClassesActionTypes {
    ADD = "ADD",
    DELETE = "DELETE"
}
export interface ClassesAction {
    type:ClassesActionTypes,
    payload:string
}

export default (classes:string, action:ClassesAction) => {
    const classesSet = new Set(classes.split(' '));
    switch (action.type) {
        case ClassesActionTypes.ADD: {
            classesSet.add(action.payload);
        }
        case ClassesActionTypes.DELETE: {
            classesSet.delete(action.payload);
        }
    }
    return Array.from(classesSet).join(" ");
}