
const initialData = {
    list : []
}

const todoReducers = (state=initialData, action) => {
   // eslint-disable-next-line default-case
   switch(action.type) {
       case "ADD_TODO": 
       const {id, data } = action.payload;
    return {
        ...state,
        list: [
            ...state.list,
            {
                id,
               data
        }
    ]
    }
    case "DELETE_TODO": 
     const  newList =  state.list.filter((elem) => elem.id !== action.id)
    return {
     ...state,
           List : newList 
    }
    case "removeTodo": return {
    ...state,
          list : [] 
   }
    default : return state;
   }

}
export default todoReducers;