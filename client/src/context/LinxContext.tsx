import { createContext, useEffect, useState } from 'react';
import Services from '../services';
import type { ILink } from '@linx/shared';
import { AuthContext } from './AuthContext';

export interface LinksContextProps {
  isLoading: boolean;
  links: ILink[] | [];
}

export const LinksContext = createContext<LinksContextProps | undefined>(
  undefined,
);

export const LinksProvider = ({ children }: { children?: React.ReactNode }) => {
  const [links, setLinks] = useState<ILink[]>([]);
  const [loading, setLoading] = useState(true);

  const getLinks = async () => {
    setLoading(true);
    try {
      const links = await Services.link.getAll();
      setLinks(links);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <LinksContext.Provider value={{ isLoading: loading, links }}>
      {children}
    </LinksContext.Provider>
  );
};
