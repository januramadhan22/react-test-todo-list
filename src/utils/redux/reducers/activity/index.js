import { CREATE_ACTIVITY, GET_ACTIVITIES } from "../../actions/activitesAction";

const initialState = {
  getActivitiesLoading: false,
  getActivitiesResult: false,
  getActivitiesError: false,

  createActivityLoading: false,
  createActivityResult: false,
  createActivityError: false,
};

const activities = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        getActivitiesResult: action.payload.data,
        getActivitiesLoading: action.payload.loading,
        getActivitiesError: action.payload.errorMessage,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        createActivityLoading: action.payload.loading,
        createActivityResult: action.payload.data,
        createActivityError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default activities;
