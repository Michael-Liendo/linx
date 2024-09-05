import { LinksContext } from '@/context/LinksContext';
import { useContext } from 'react';

export default function useLinks() {
	const context = useContext(LinksContext);
	if (context === undefined) {
		throw new Error('useLinks must be used in AuthProvider');
	}
	return context;
}
