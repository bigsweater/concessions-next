'use client'
import React from 'react';
import { QueryContext } from '../QueryProvider';
import { XMarkIcon } from '@heroicons/react/20/solid';

function SearchForm({ initialGenres, initialGenre, initialSearch }) {
  const [currentGenre, setCurrentGenre] = React.useState(initialGenre)
  const [currentSearch, setCurrentSearch] = React.useState(initialSearch)
  const deferredCurrentSearch = React.useDeferredValue(currentSearch)
  const { updateQuery } = React.useContext(QueryContext)

  React.useEffect(() => {
    updateQuery({ genre: currentGenre || '', search: deferredCurrentSearch || '' })
  }, [currentGenre, deferredCurrentSearch])

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div className="flex gap-6">
                <h2>
                  <label htmlFor="search" className="text-base font-semibold leading-7 text-gray-900">
                    Search
                  </label>
                </h2>

                {currentSearch && (
                  <button
                    type="button"
                    className="inline-flex items-center px-1 py-1 text-sm font-semibold text-indigo-600 hover:text-indigo-900 focus:ring-1 ring-inset ring-gray-300"
                    onClick={() => setCurrentSearch('')}
                  >
                    <XMarkIcon aria-hidden="true" className="h-5 w-5 text-indigo-300 hover:text-indigo-900" />{" "}
                    Clear
                  </button>
                )}
              </div>
              <div className="mt-2">
                <input
                  id="search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={currentSearch}
                  onChange={e => setCurrentSearch(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {initialGenres?.length && (
          <div className="border-b border-gray-900/10 pb-12">
            <div className="flex gap-6">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Genres</h2>
              {currentGenre && (
                <button
                  type="button"
                  className="inline-flex items-center px-1 py-1 text-sm font-semibold text-indigo-600 hover:text-indigo-900 focus:ring-1 ring-inset ring-gray-300"
                  onClick={() => setCurrentGenre(null)}
                >
                  <XMarkIcon aria-hidden="true" className="h-5 w-5 text-indigo-300 hover:text-indigo-900" />{" "}
                  Clear
                </button>
              )}
            </div>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Select a genre to filter your results.
            </p>

            <div className="mt-10 space-y-10">
              <ol className="mt-6 grid sm:grid-cols-2 gap-4">
                {initialGenres.map(genre => {
                  return (
                    <li className="relative flex gap-x-3" key={genre.id}>
                      <div className="flex h-6 items-center">
                        <input
                          id={genre.id}
                          name="genre"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          checked={currentGenre === genre.title}
                          value={genre.title}
                          onChange={() => setCurrentGenre(genre.title)}
                        />
                      </div>
                      <div className="text-sm leading-6 flex-grow">
                        <label htmlFor={genre.id} className="w-full font-medium text-gray-900 flex items-baseline gap-2">
                          <span>{genre.title}</span>
                          {genre.movies && (
                            <span className="font-thin text-xs text-gray-600">{genre.movies.length}</span>
                          )}
                        </label>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-stretch gap-x-6">
        <button
          type="submit"
          className="flex-grow rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
