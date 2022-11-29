import { createStore } from "effector";
import Queue from "./queue";

const store = createStore({
  queue: new Queue(),
  done: 0,
});

export default store;
