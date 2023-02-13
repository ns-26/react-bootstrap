import { ActionTypes } from "./constants";

export type TriggerActionType = {
  type:
    | ActionTypes.TEST
    | ActionTypes.FETCH_ALL_TRIGGER
    | ActionTypes.SET_TRIGGER_ERROR;
  payload: {} | string;
};

export const getTriggers = (data: any): TriggerActionType => ({
  type: ActionTypes.TEST,
  payload: { data },
});

export const triggerApiResponse = (
  actionType: string,
  data: any
): TriggerActionType => {
  switch (actionType) {
    case ActionTypes.FETCH_ALL_TRIGGER:
      return {
        type: ActionTypes.TEST,
        payload: { data },
      };
    default:
      return {
        type: ActionTypes.SET_TRIGGER_ERROR,
        payload: { actionType, error: "Error While setting data to store ! " },
      };
  }
};

export const triggerApiError = (
  actionType: string,
  error: any
): TriggerActionType => ({
  type: ActionTypes.SET_TRIGGER_ERROR,
  payload: { actionType, error },
});
