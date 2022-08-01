const READ = 'READ';

export const searchTitle = ({title, id}) => {
    return {
        type: READ,
        title,
        id
    }
}


const initialValue = {title:'', id:''};





const media = (state = initialValue, action) => {
    switch(action.type){
        case READ:
            const now_state = {title: action.title, id: action.id}
            return  now_state
        default:
            return state
    }
}

export default media