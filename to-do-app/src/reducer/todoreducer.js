export const initialState = {arr:[
    {todo: "Learn about reducers",
    notes: "and practice",
    completed: false,
    id: 1,}
]}

export const reducer = (state=initialState, action, payload) =>{
    switch(action.type) {
        case "ADD_TO_DO":{
            return{
                ...state,
                arr: [...state.arr, action.payload]
            }
        };
        default:
            return state;
    }
}

