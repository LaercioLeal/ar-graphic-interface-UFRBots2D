import { startMatch } from "services";

class Queue {
  constructor() {
    this.queue = [];
    this.results = [];
    this.running = false;
  }

  async run() {
    this.running = true;
    if (this.queue[0].status === "done") {
      this.running = false;
      return;
    } else if (this.queue[0].status === "queue") {
      this.queue[0].status = "running";
    }

    const match = this.queue[0];

    const { mode, team1, team2 } = match;
    let { data, isError } = await startMatch(mode, team1.path, team2.path);
    this.queue[0].status = "done";
    this.running = false;
    this.queue = this.queue.filter((item) => item.id !== match.id);

    let { scores } = data;
    let result = {
      ...match,
      status: "done",
      team1: {
        ...match.team1,
        score: scores.team1,
        winner: scores.team1 > scores.team2,
      },
      team2: {
        ...match.team2,
        score: scores.team2,
        winner: scores.team2 > scores.team1,
      },
      empate: scores.team2 === scores.team1,
    };

    this.results.push({
      ...result,
    });
    if (!isError) {
      return result;
    }
  }

  async add(match) {
    if (match.status !== "wait") return match;
    this.queue.push({
      ...match,
      status: "queue",
    });
    return match;
  }

  remove(match) {
    this.queue = this.queue.filter((item) => item.id !== match.id);
    return match;
  }
}

export default Queue;
