import Home from './pages/home';
import { Routes as ReactRoutes, Route } from 'react-router';

export enum PublicRoutesEnum {
  Home = '/',
}

export enum AuthRoutesEnum {
  Login = '/login',
  SignUp = '/signup',
  Welcome = '/welcome',
}

export enum PrivateRoutesEnum {}

export function Routes() {
  return (
    <ReactRoutes>
      {/* {user ? PrivateRoutes.map((route) => route) : AuthRoutes.map((route) => route)} */}
      {PublicRoutes.map((route) => route)}
    </ReactRoutes>
  );
}

const _PrivateRoutes: JSX.Element[] = [];

const _AuthRoutes: JSX.Element[] = [];

const PublicRoutes = [
  <Route
    key={PublicRoutesEnum.Home}
    path={PublicRoutesEnum.Home}
    Component={Home}
  />,
];
