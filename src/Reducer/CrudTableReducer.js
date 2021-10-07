const initialValue = {
  Data: [],
};
const CrudTableReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Push_Data":
      const { TableData } = action.payload;
      return {
        TD: [
          {
            ye: TableData,
          },
        ],
      };
    default:
      return state;
  }
};
export default CrudTableReducer;
