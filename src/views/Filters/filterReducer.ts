export type FilterState = {
  status: string;
  speed: number;
};

export type FilterAction =
  | { type: "set_status"; payload: string }
  | { type: "set_speed"; payload: number }
  | { type: "reset" };

export const filterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case "set_status":
      return { ...state, status: action.payload };
    case "set_speed":
      return { ...state, speed: action.payload };
    case "reset":
      return { status: "All", speed: 0 };
    default:
      return state;
  }
};
