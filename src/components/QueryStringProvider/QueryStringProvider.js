'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';

export const QueryStringContext = React.createContext()

function QueryStringProvider({ children }) {
  const searchParams = Object.fromEntries(useSearchParams())
  const [updatedSearchParams, setUpdatedSearchParams] = React.useState(searchParams)

  const updateQueryString = function (newParams) {
    const currentParams = { ...searchParams }
    const nextParams = cleanParams(
      mergeParams(currentParams, newParams)
    )

    if (
      // If the user submits a query we should reset the page
      currentParams.search !== nextParams.search
      || currentParams.genre !== nextParams.genre
      || Number(nextParams.page) === 1
    ) {
      delete nextParams.page
    }

    setUpdatedSearchParams(nextParams)
    const queryString = new URLSearchParams(nextParams).toString()
    const url = queryString.length ? `?${queryString}` : '/'

    window.history.pushState(null, '', url)
  }

  function mergeParams(current, next) {
    const merged = {
      ...current,
      ...next
    }

    return merged
  }

  function cleanParams(params) {
    const cleaned = {}

    for (const [key, value] of Object.entries(params)) {
      if (Boolean(value)) {
        cleaned[key] = value
      }
    }

    return cleaned;
  }

  const getUrlForPage = React.useCallback((page) => {
    const obj = { ...updatedSearchParams }
    obj.page = page
    const params = new URLSearchParams(obj).toString()

    return `?${params}`
  }, [updatedSearchParams])

  return (
    <QueryStringContext.Provider value={{
      getUrlForPage,
      searchParams,
      updateQueryString,
      updatedSearchParams,
    }}>
      {children}
    </QueryStringContext.Provider>
  );
}

export default QueryStringProvider;
