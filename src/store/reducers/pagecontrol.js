const INITIAL_STATE = {
  page: "home",
  drag_img: [],
  selected_drag: 0,
};

function pagecontrol(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "ADD_IMG":
      return {
        ...state,
        drag_img: [...state.drag_img.concat(action.payload)],
      };
    case "CHANGE_SELECTED_DRAG":
      return {
        ...state,
        selected_drag: action.payload,
      };
    default:
      return state;
  }
}

export default pagecontrol;
