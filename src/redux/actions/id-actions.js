import ACTIONS from "../types";

export const setId = id => ({
    type: ACTIONS.SET_USER_ID,
    payload: id
})