import { ActionTypes as Test } from "./constants";

const INIT_STATE = {
  loading: true,
  testData: {},
};

type ActionTypes = {
  type: Test.TEST;
  payload: {
    actionType?: string;
    data?: {};
    error?: string;
  };
};

const TestReducer = (state: any = INIT_STATE, action: ActionTypes) => {
  switch (action.type) {
    case Test.TEST:
      return {
        ...state,
        testData: action.payload.data,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default TestReducer;
