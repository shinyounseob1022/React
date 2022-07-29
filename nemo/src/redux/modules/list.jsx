const TITLE = "TITLE";

export const addTitle = ({title, id}) => {
    return {
        type: TITLE ,
        title,
        id
    }
} 

const initialState = [];


const list = (state = initialState, action) => {
    switch(action.type){
        case TITLE:
            const new_state = [...state, {title: action.title, id:action.id}]
            return new_state
        default:
            return state
    }
};

export default list


// function addTodo (event) {
//     event.preventDefault()
//     setTodo([...todo, {id: todo.length, title: inputTitle.current.value}])
// }