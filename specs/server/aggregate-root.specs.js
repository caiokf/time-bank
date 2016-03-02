import {expect} from 'chai';

import AggregateRoot from '../../src/server/domain/aggregate-root';

describe('Aggregate Root', () => {
  const Events = {
    Created: 'something_created',
    Updated: 'something_updated'
  };

  class TestingEntity extends AggregateRoot {
    constructor() {
      super();
      this.events = [];

      this.applyEvent[Events.Created] = (event) => {
        this.events.push(event);
      };

      this.applyEvent[Events.Updated] = (event) => {
        this.events.push(event);
      };
    }
  };

  it('should hydrate events', () => {
    let aggregateRoot = new TestingEntity();

    let events = [
      { name: Events.Created, payload: {} },
      { name: Events.Updated, payload: {} }
    ];

    aggregateRoot.hydrate(events);

    expect(aggregateRoot.events).to.have.lengthOf(2);
  });

  it('should set payload of events', () => {
    let aggregateRoot = new TestingEntity();

    let payload = { any: 'value' };
    let e = { name: Events.Created, payload: payload };

    aggregateRoot.hydrate([e]);

    expect(aggregateRoot.events[0]).to.equal(payload);
  });

  it('should not apply events without a handler', () => {
    let aggregateRoot = new TestingEntity();

    aggregateRoot.hydrate([{ name: 'unsubscribed_event', payload: {} }]);

    expect(aggregateRoot.events).to.be.empty;
  });
});
