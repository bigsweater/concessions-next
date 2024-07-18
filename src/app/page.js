import React from 'react'
import Results, { LoadingResults } from '@/components/Results'
import SearchForm, { LoadingSearchForm } from '@/components/SearchForm'
import QueryStringProvider from '@/components/QueryStringProvider'
import { fetchGenres, fetchMovies } from '@/app/actions/client';

export default async function Home({ searchParams }) {
  let initialMovies = await fetchMovies(searchParams)
  const genres = await fetchGenres()
  const initialGenre = searchParams.genre
  const initialSearch = searchParams.search

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Movie Search</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <QueryStringProvider>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="sm:col-span-1">
                <React.Suspense fallback={<LoadingSearchForm />}>
                  <SearchForm initialGenres={genres.data} initialGenre={initialGenre} initialSearch={initialSearch} />
                </React.Suspense>
              </div>

              <div className="md:col-span-2">
                <React.Suspense fallback={<LoadingResults />}>
                  <Results initialResponse={initialMovies} />
                </React.Suspense>
              </div>
            </div>
          </QueryStringProvider>
        </div>
      </main>
    </>
  );
}
