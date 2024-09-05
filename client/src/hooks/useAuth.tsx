import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used in AuthProvider');
	}
	return context;
}
