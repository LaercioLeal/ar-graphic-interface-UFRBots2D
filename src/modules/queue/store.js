import { createStore } from "effector";
import Queue from "./queue";

const store = createStore({
  queue: new Queue(),
});

export default store;
