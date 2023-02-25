import axios from "axios";
import { email } from "../../email";

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const getActivities = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_ACTIVITIES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: `https://todo.api.devcode.gethired.id/activity-groups?email=${email}`,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: GET_ACTIVITIES,
          payload: {
            loading: false,
            data: res.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ACTIVITIES,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const createActivity = (dispatch, data) => {
  //loading
  dispatch({
    type: CREATE_ACTIVITY,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "POST",
    url: "https://todo.api.devcode.gethired.id/activity-groups",
    data: data,
  })
    .then((response) => {
      dispatch({
        type: CREATE_ACTIVITY,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      alert("Berhasil membuath todo");
    })
    .catch((error) => {
      dispatch({
        type: CREATE_ACTIVITY,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
