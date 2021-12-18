import {List} from '../../warehouseDetail/WarehouseData'


const initialState = {
    data: List
}


export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_DATA":
            return { ...state, data: action.payload };
        default:
            return state;
    }
}