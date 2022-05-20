import { useRouter } from 'next/router';
import React, { FC, useEffect, useMemo, useState } from 'react';

export interface State {
  searchTerm: string;
}

const initialState = {
  searchTerm: '',
};

export const SearchContext = React.createContext<State | any>(initialState);

SearchContext.displayName = 'SearchContext';

export const SearchProvider: FC = (props) => {
  const { query } = useRouter();
  const [searchTerm, updateSearchTerm] = useState('');

  useEffect(() => {
    if (query?.text) {
      updateSearchTerm(query?.text as string);
    } else {
      updateSearchTerm('');
    }
  }, [query]);

  const value = useMemo(
    () => ({
      searchTerm,
      updateSearchTerm,
    }),
    [searchTerm]
  );

  return <SearchContext.Provider value={value} {...props} />;
};

export const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error(`useSearch must be used within a SearchProvider`);
  }
  return context;
};
