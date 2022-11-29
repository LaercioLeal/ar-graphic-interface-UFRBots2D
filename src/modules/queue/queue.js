import { updateTraining, runTraining } from "services";

class Queue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  async updateLast() {
    await updateTraining({
      ...this.queue[0],
      status: "running",
    }).then((_) => {
      return true;
    });
  }

  async run(useTraining = () => {}) {
    this.running = true;
    const training = this.queue[0];
    this.queue = this.queue.filter((item) => item.id !== training.id);
    console.log(`[QUEUE][E] >> running ${training.id}`);
    await runTraining(training, useTraining)
      .then(async (_) => {
        console.log(`[QUEUE][E] >> finished ${training.id}`);
        this.running = false;
        useTraining(0);
        return true;
      })
      .catch(
        async (_) =>
          await updateTraining({
            ...training,
            status: "wait",
          }).then((_) => {
            console.log(`[QUEUE][E][ERROR] >>  finished ${training.id}`);
            this.running = false;
            return false;
          })
      );
  }

  async add(training) {
    if (training.status !== "wait") return training;
    this.queue.push(training);
    await updateTraining({
      ...training,
      status: this.queue.length === 0 ? "running" : "queue",
    }).then((_) => {
      console.log(`[QUEUE]    >> added ${training.id}`);
      return training;
    });
  }

  remove(training) {
    console.log(`[QUEUE]    >> removed ${training.id}`);
    this.queue = this.queue.filter((item) => item.id !== training.id);
    return training;
  }

  getOne() {
    const training = this.queue.shift();
    console.log(`returned ${training.id}`);
    return training;
  }
}

export default Queue;
