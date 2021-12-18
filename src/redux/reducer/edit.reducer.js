const initialState = {
    data: null
}

export const editDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_DATA":
            return { ...state, data: action.payload };
        default:
            return state;
    }
}


