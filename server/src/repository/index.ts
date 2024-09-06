import { Link } from './Link';
import { Redirect } from './Redirect';
import { User } from './User';

export default class Repository {
	static user = User;
	static link = Link;
	static redirect = Redirect;
}
