import useDebounce from '@/hooks/useDebounce';
import { createContext, useContext, useState } from 'react';

type RestaurantsProviderProps = {
  children: React.ReactNode;
};

type RestaurantsContextProps = {
  search: string;
  setSearch: (search: string) => void;
  page: number;
  setPage: (page: number) => void;
};

const RestaurantsContext = createContext<RestaurantsContextProps>({
  search: '',
  page: 1,
  setSearch: () => {},
  setPage: () => {},
});

export const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 500);

  return (
    <RestaurantsContext.Provider value={{ search: debouncedSearch, page, setSearch, setPage }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContext;

export const RestaurantsConsumer = RestaurantsContext.Consumer;

export const useRestaurantsContext = () => useContext(RestaurantsContext);
