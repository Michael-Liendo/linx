import { Routes as ReactRoutes, Route } from 'react-router';
import useAuth from './hooks/useAuth';
import HomeApp from './pages/(app)/Home';
import Login from './pages/(auth)/Login';
import Signup from './pages/(auth)/Signup';

export enum PublicRoutesEnum {}

export enum AuthRoutesEnum {
  login = '/',
  Signup = '/signup',
  Welcome = '/welcome',
}

export enum PrivateRoutesEnum {
  Home = '/home',
}

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

const PrivateRoutes: JSX.Element[] = [
  <Route
    key={PrivateRoutesEnum.Home}
    path={PrivateRoutesEnum.Home}
    Component={HomeApp}
  />,
  <Route key={'no-found'} path={'*'} Component={() => <>No Found</>} />,
];

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

const PublicRoutes: JSX.Element[] = [];
