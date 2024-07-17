'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchMovies } from '@/utils/client';

export const QueryContext = React.createContext()

function QueryProvider({ children, initialMovies }) {
  const searchParams = useSearchParams()
  const [movies, setMovies] = React.useState(initialMovies)
  const [totalPages, setTotalPages] = React.useState(1)

  const updateQuery = function (params) {
    const currentParamsObject = convertParamsToCleanedObject(searchParams)
    const nextParamsObject = convertParamsToCleanedObject(new URLSearchParams({
      ...currentParamsObject,
      ...params
    }))
    const nextParams = new URLSearchParams(nextParamsObject)
    const queryString = nextParams.toString().length ? `?${nextParams.toString()}` : ''

    window.history.pushState(null, '', queryString)
  }

  function convertParamsToCleanedObject(params) {
    const obj = {}

    for (const [key, value] of params.entries()) {
      if (Boolean(value)) {
        obj[key] = value
      }
    }

    return obj
  }

  const getUrlForPage = React.useCallback((page) => {
    const obj = Object.fromEntries(searchParams)
    obj['page'] = page
    const params = new URLSearchParams(obj).toString()
    
    return `?${params}`
  }, [searchParams])

  const getCurrentPage = React.useCallback(() => {
    return Number(searchParams.get('page')) || 1
  }, [searchParams])

  React.useEffect(() => {
    const getAndSetMovies = async (searchParams) => {
      const res = await fetchMovies(convertParamsToCleanedObject(searchParams))
      setMovies(res.data)
      setTotalPages(res.totalPages || 1)
    }
    getAndSetMovies(searchParams)
  }, [searchParams])

  return (
    <QueryContext.Provider value={{
      updateQuery,
      movies,
      pagination: {
        totalPages,
        getUrlForPage,
        getCurrentPage
      }
    }}>
      {children}
    </QueryContext.Provider>
  );
}

export default QueryProvider;
