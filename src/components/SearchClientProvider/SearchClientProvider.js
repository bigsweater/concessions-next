'use client'
import React from 'react';

export const SearchClientContext = React.createContext()

function SearchClientProvider({ children }) {
  return (
    <SearchClientContext.Provider>
      {children}
    </SearchClientContext.Provider>
  )
}

export default SearchClientProvider;
