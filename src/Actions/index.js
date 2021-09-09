export const Add_Todo = (Val) => {
  return {
    type: "Add_Todo",
    payload: {
      id: new Date().getTime().toString(),
      value: Val,
    },
  };
};
export const Dell_Todo = (index) => {
  return {
    type: "Dell_Todo",
    payload: index,
  };
};
export const Dell_ALL = () => {
  return {
    type: "Dell_ALL",
  };
};
