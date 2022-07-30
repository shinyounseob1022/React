const TITLE = "TITLE";
const DELETE = "DELETE";
const UPDATE = "UPDATE";
const DETAIL = "DETAIL";

//Action Creator
export const addTitle = ({title, id, isDone, content}) => {
    return {
        type: TITLE ,
        title: title,
        id: id,
        isDone,
        content
    }
} 

export const deleteTitle = (id) => {
    return {
        type: DELETE,
        id: id
    }
}

export const updateTitle = (id) => {
    return {
        type: UPDATE,
        id
    }
}


const initialState = [];


//Reducer
const list = (state = initialState, action) => {
    switch(action.type){
        case TITLE:
            const new_state = [...state, {title: action.title, id:action.id, isDone: action.isDone, content: action.content}]
            return new_state
        case DELETE:
            return state.filter((value) => value.id !== action.id)
        case UPDATE:
            return state.map((value) => value.id == action.id ? {...value, isDone: !value.isDone} : value)

        default:
            return state
    }
};

export default list