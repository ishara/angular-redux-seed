import {ITaskingState, TASKING_INITIAL_STATE, taskingReducer} from "./tasking/todo.store";
import {IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer} from "./messages/messages.store";
import {combineReducers} from "redux";
/**
 * Created by ishara on 7/16/2017.
 */

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE
}

export const rootReducer = combineReducers({
  tasking: taskingReducer,
  messaging: messagingReducer,
});
