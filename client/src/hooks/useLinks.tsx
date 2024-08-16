import { LinksContext } from '@/context/LinxContext';
import { useContext } from 'react';

export default function useLinks() {
  const context = useContext(LinksContext);
  if (context === undefined) {
    throw new Error('useLinks must be used in LinksProvider');
  }
  return context;
}
