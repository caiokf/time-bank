import Events from './domain-events';
import AggregateRoot from './aggregate-root';

class UserProfile extends AggregateRoot {
  constructor() {
    super();
    this.name = '';

    this.applyEvent[Events.UserProfile.Created] = (event) => {
      this.name = event.name;
    }
  }
}
 export default UserProfile;
