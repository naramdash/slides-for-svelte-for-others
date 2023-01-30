export class Eliza {
  replies = [
    "Please go on.",
    "Does talking about this bother you ?",
    "Do you feel strongly about discussing such things ?",
    "Tell me more about that.",
    "I'm not sure I understand you fully.",
  ];

  #index = 0;
  next() {
    return this.replies.at(this.#index++ % this.replies.length);
  }
}
