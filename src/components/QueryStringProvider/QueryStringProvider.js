'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchMovies } from '@/app/actions/client';

export const QueryStringContext = React.createContext()

function QueryStringProvider({ children, initialMovies }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [movies, setMovies] = React.useState(initialMovies)
  const [totalPages, setTotalPages] = React.useState(1)

  const updateQueryString = function (newParams, routerOptions) {
    const currentParams = searchParams
    const nextParams = cleanParams(mergeParams(currentParams, newParams))

    if (
      // If the user submits a query we should reset the page
      currentParams.get('search') !== nextParams.get('search')
      || currentParams.get('genre') !== nextParams.get('genre')
      || Number(nextParams.get('page')) === 1
    ) {
      nextParams.delete('page')
    }

    Array.from(nextParams.keys()).forEach(key => {
      if (!Boolean(nextParams.get(key))) {
        nextParams.delete(key)
      }
    })
    mergeParams(searchParams, newParams)

    const queryString = nextParams.toString().length ? `?${nextParams.toString()}` : ''
    router.push(`/${queryString}`, routerOptions || {scroll: true})
  }

  function mergeParams(params1, params2) {
    return new URLSearchParams({
      ...Object.fromEntries(params1),
      ...Object.fromEntries(params2)
    })
  }

  function cleanParams(params) {
    const cleaned = new URLSearchParams()

    params.forEach((value, key) => {
      if (Boolean(value)) {
        cleaned.set(key, value)
      }
    })

    return cleaned;
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
    const fetchAndSetMovies = async (searchParams) => {
      const res = await fetchMovies(Object.fromEntries(searchParams))
      setMovies(res.data)
      setTotalPages(res.totalPages || 1)
    }
    fetchAndSetMovies(searchParams)
  }, [searchParams])

  return (
    <QueryStringContext.Provider value={{
      updateQueryString,
      movies,
      pagination: {
        totalPages,
        getUrlForPage,
        getCurrentPage
      }
    }}>
      {children}
    </QueryStringContext.Provider>
  );
}

export default QueryStringProvider;
