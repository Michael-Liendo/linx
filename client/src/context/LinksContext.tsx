import { useContext } from 'react';

import useAuth from '@/hooks/useAuth';
import type { ILink, ILinkForCreate } from '@linx/shared';
import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export interface LinksContextProps {
  isLoading: boolean;
  links: ILink[] | [];
  create: (link: ILinkForCreate) => void;
  update: (link: ILinkForCreate) => void;
  deleteById: (link_id: string) => void;
}

export const LinksContext = createContext<LinksContextProps | undefined>(
  undefined,
);

export const LinksProvider = ({ children }: { children?: React.ReactNode }) => {
  const { user } = useAuth();
  const [links, setLinks] = useState<ILink[]>([]);
  const [loading, setLoading] = useState(true);

  const getLinks = async () => {
    if (!user) {
      return;
    }
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

  const update = async (linkDTO: ILinkForCreate) => {
    const updated_link = await Services.link.update(linkDTO);
    setLinks((oldLinks) => {
      const newList = [...oldLinks];
      const index = newList.findIndex((link) => link.id === updated_link.id);
      newList[index] = updated_link;
      return newList;
    });
  };

  const deleteById = async (id: string) => {
    const link_id = await Services.link.deleteById(id);

    setLinks((oldLinks) => {
      const newList = [...oldLinks];

      return newList.filter((link) => link.id !== link_id);
    });
  };

  useEffect(() => {
    getLinks();
  }, [user]);

  return (
    <LinksContext.Provider
      value={{ isLoading: loading, links, create, update, deleteById }}
    >
      {children}
    </LinksContext.Provider>
  );
};
