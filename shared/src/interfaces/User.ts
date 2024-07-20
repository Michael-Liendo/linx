export interface IUserForLogin {
  email: string;
  password: string;
}

export interface ILoggedInUser {
  token: string;
  user: IUser;
}

export interface IUserForRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
