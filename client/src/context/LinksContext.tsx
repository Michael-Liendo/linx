import { useContext } from 'react';

import type { ILink, ILinkForCreate } from '@linx/shared';
import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export interface LinksContextProps {
  isLoading: boolean;
  links: ILink[] | [];
  create: (link: ILinkForCreate) => void;
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

  const create = async (linkDTO: ILinkForCreate) => {
    const link = await Services.link.create(linkDTO);
    setLinks((oldLinks) => {
      const newList = [...oldLinks];
      newList.unshift(link);
      return newList;
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <LinksContext.Provider value={{ isLoading: loading, links, create }}>
      {children}
    </LinksContext.Provider>
  );
};
