'use client'
import React from 'react';
import { range } from 'lodash'

import  MovieDetails from '@/components/MovieDetails'
import Pagination from '@/components/Pagination'
import { fetchMovies } from '@/app/actions/client';
import { QueryStringContext } from '@/components/QueryStringProvider';

export default function Results({ initialResponse }) {
  const {searchParams} = React.useContext(QueryStringContext)

  const [movies, setMovies] = React.useState(initialResponse.data)
  const [totalPages, setTotalPages] = React.useState(1)

  React.useEffect(() => {
    const updateMovies = async () => {
      const nextMovies = await fetchMovies(searchParams)
      // Server actions that call server actions end up with Promises, even
      // after `await`-ing the Action. Unwrapping them here.
      Promise.all(nextMovies.data)
        .then(values => nextMovies.data = values)
        .then(() => {
          setMovies(nextMovies.data)
          setTotalPages(nextMovies.totalPages)
        })
    }

    updateMovies()
  }, [searchParams])

  return (
    <div className="border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
      {movies?.length ? (
        <ul role="list" className="divide-y divide-gray-100 px-12 py-6 pb-0">
          {movies.map((movie, index) => (
            <li key={movie.id || `movie-${index}`} className="flex justify-between items-center gap-x-6 py-5 overflow-hidden">
              <MovieDetails movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <div role="list" className="divide-y divide-gray-100 px-12 py-6 pb-0">
          <h2 className="py-5 text-3xl font-semibold leading-10 text-gray-900">No movies found.</h2>
        </div>
      )}

      <Pagination totalPages={totalPages} />
    </div>
  );
}

export function LoadingResults() {
  return (
    <div className="border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
      <ul role="list" className="divide-y divide-gray-100 px-12 py-6 pb-0">
        {range(1,10).map((movie) => (
          <li key={`movie-${movie}`} className="flex justify-between items-center gap-x-6 py-5 overflow-hidden">
            <div className="flex min-w-0 gap-x-6">
              <div className="flex-shrink-0 w-32 group -mt-6 -mb-6 overflow-hidden bg-gray-300">
              </div>

              <div className="min-w-0 flex-auto">
                <h3 className="text-3xl font-semibold leading-10 text-gray-900"><span className="block w-full h-full bg-gray-400" /></h3>
              </div>
            </div>

            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 bg-gray-200 rounded-full w-20 h-20"></p>
            </div>
          </li>
        ))}
      </ul>
    </div>


  )
}
