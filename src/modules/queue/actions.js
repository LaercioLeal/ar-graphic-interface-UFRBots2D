import { createEvent } from "effector";

import store from "./store";

export const setQueue = createEvent();
export const setDoneTraining = createEvent();

store.on(setQueue, (state, payload) => ({
  ...state,
  queue: payload,
}));

store.on(setDoneTraining, (state, payload) => ({
  ...state,
  done: payload,
}));
