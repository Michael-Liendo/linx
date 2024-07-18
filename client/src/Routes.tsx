import { Routes as ReactRoutes, Route } from 'react-router';
import useAuth from './hooks/Auth';
import Login from './pages/(auth)/Login';
import Signup from './pages/(auth)/Signup';
import Home from './pages/home';

export enum PublicRoutesEnum {
  Home = '/',
}

export enum AuthRoutesEnum {
  login = '/login',
  Signup = '/signup',
  Welcome = '/welcome',
}

export enum PrivateRoutesEnum {}

export function Routes() {
  const { user } = useAuth();
  return (
    <ReactRoutes>
      {user
        ? PrivateRoutes.map((route) => route)
        : AuthRoutes.map((route) => route)}
      {PublicRoutes.map((route) => route)}
    </ReactRoutes>
  );
}

const PrivateRoutes: JSX.Element[] = [];

const AuthRoutes: JSX.Element[] = [
  <Route
    key={AuthRoutesEnum.Signup}
    path={AuthRoutesEnum.Signup}
    Component={Signup}
  />,
  <Route
    key={AuthRoutesEnum.login}
    path={AuthRoutesEnum.login}
    Component={Login}
  />,
];

const PublicRoutes = [
  <Route
    key={PublicRoutesEnum.Home}
    path={PublicRoutesEnum.Home}
    Component={Home}
  />,
];
