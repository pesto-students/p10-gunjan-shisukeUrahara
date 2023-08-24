const initialState = {
  loading: false,
  workoutPlan: null,
  error: null,
};

function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_WORKOUT_PLAN_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_WORKOUT_PLAN_SUCCESS":
      return {
        ...state,
        loading: false,
        workoutPlan: action.payload,
      };
    case "FETCH_WORKOUT_PLAN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        workoutPlan: null,
      };
    default:
      return state;
  }
}

export default workoutReducer;
