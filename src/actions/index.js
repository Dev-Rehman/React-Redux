export const addTodo = (data) => {

  // console.log(data);
    return {
      type : "ADD_TODO",
      payload : {
        id : new Date().getTime().toString(),
        data 
      }
    }
}

 export const deleteTodo = (id) => {
  //  console.log(data.filter(d => d.data != id.data))
   console.log(id)
  //  console.log(data)
    return {
      type: "DELETE_TODO",
      id
      }
}
 export const removeTodo = () => {
   console.log("ddd");
    return {
        type : "REMOVE_TODO"
      }
 }