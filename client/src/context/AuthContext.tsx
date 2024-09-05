import type { IUser } from '@linx/shared';
import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export interface AuthContextProps {
	isLoading: boolean;
	setUser: (user: IUser) => void;
	setToken: (token: string) => void;
	user: IUser | undefined;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
	undefined,
);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
	const [user, setUser] = useState<IUser>();
	const [loading, setLoading] = useState(true);

	const checkUser = async () => {
		setLoading(true);
		try {
			const token = await localStorage.getItem('token');
			if (token) {
				const user = await Services.user.me();
				setUser(user);
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		checkUser();
	}, []);

	const updateUser = async (user: IUser) => {
		await localStorage.set('user', JSON.stringify(user));
		setUser(user);
	};

	const setToken = async (token: string) => {
		localStorage.setItem('token', token);
	};

	return (
		<AuthContext.Provider
			value={{ isLoading: loading, user, setUser: updateUser, setToken }}
		>
			{children}
		</AuthContext.Provider>
	);
};
