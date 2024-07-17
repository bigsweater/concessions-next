'use client'
import React from 'react';
import Pagination from '@/components/Pagination'
import { QueryContext } from '../QueryProvider';

function Results() {
  const { movies } = React.useContext(QueryContext)

  return (
    <div className="border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
      {movies?.length ? (
        <ul role="list" className="divide-y divide-gray-100 px-12 py-6 pb-0">
          {movies.map((movie) => (
            <li key={movie.id} className="flex justify-between items-center gap-x-6 py-5 overflow-hidden">
              <div className="flex min-w-0 gap-x-6">
                <div className="flex-shrink-0 w-32 group -mt-6 -mb-6 overflow-hidden">
                  {movie.posterUrl && (<img alt="" src={movie.posterUrl} className="block w-full h-auto flex-none bg-gray-50 shadow-md transition-transform scale-150 group-hover:scale-100" />)}
                </div>

                <div className="min-w-0 flex-auto">
                  <h3 className="text-3xl font-semibold leading-10 text-gray-900">{movie.title}</h3>
                </div>
              </div>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs leading-5 text-gray-500">Rating</p>
                <p className="text-sm leading-6 text-gray-900">{movie.rating || 'Unknown'}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div role="list" className="divide-y divide-gray-100 px-12 py-6 pb-0">
          <h2 className="py-5 text-3xl font-semibold leading-10 text-gray-900">No movies found.</h2>
        </div>
      )}

      <Pagination />
    </div>
  );
}

export default Results;
