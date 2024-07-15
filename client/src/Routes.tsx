import { Routes as ReactRoutes, Route } from 'react-router';
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
  return (
    <ReactRoutes>
      {/* biome-ignore lint/correctness/noConstantCondition: remove when is ready the user state */}
      {false
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
];

const PublicRoutes = [
  <Route
    key={PublicRoutesEnum.Home}
    path={PublicRoutesEnum.Home}
    Component={Home}
  />,
];
