class AggregateRoot {
  constructor() {
    this.applyEvent = {};
  };

  hydrate(events) {
    events.forEach(x => {
      this.applyEvent[x.name](x.payload);
    });
  }
}

export default AggregateRoot;
