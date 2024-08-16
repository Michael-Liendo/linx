import { useContext } from 'react';
import { LinksContext } from '@/context/LinxContext';

export default function useLinks() {
  const context = useContext(LinksContext);
  if (context === undefined) {
    throw new Error('useLinks must be used in LinksProvider');
  }
  return context;
}
