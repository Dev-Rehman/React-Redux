
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
                id:id,
               data:data
        }
    ]
    }
    default : return state;
   }

}
export default todoReducers;