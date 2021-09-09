const initialValue = {
  Todos: [],
};
const TodoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Add_Todo":
      const { value, id } = action.payload;
      return {
        Todos: [
          ...state.Todos,
          {
            value: value,
            id: id,
          },
        ],
      };
    case "Dell_ALL":
      return {
        Todos: [],
      };
    case "Dell_Todo":
      return {
        ...state,
        Todos: state.Todos.filter((val, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
export default TodoReducer;
