import {expect} from 'chai';

import Events from '../../src/server/domain/domain-events';
import UserProfile from '../../src/server/domain/user-profile';

describe('User Profile', () => {
  it('should handle user created event', () => {
    let user = new UserProfile();

    let events = [ { name: Events.UserProfile.Created, payload: { name: 'new user name' } } ];

    user.hydrate(events);

    expect(user.name).to.equal('new user name');
  });
});
