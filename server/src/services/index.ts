import Auth from './Auth';
import Link from './Link';
import Redirect from './Redirect';
import User from './User';

export default class Services {
	static auth = Auth;
	static user = User;
	static link = Link;
	static redirect = Redirect;
}
