import { useContext } from 'react';

import type { ILink, ILinkForCreate } from '@linx/shared';
import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export interface LinksContextProps {
  isLoading: boolean;
  links: ILink[] | [];
  create: (link: ILinkForCreate) => void;
}

export const useLinks = () => {
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
    setLinks((oldLinks) => [link, ...oldLinks]);
  };

  useEffect(() => {
    getLinks();
  }, []);

  return { isLoading: loading, links, create };
};
