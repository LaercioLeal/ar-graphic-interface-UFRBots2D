import { createEvent } from "effector";

import store from "./store";

export const setQueue = createEvent();

store.on(setQueue, (state, payload) => ({
  ...state,
  queue: payload,
}));
