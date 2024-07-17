import React from 'react';

const genres = [
  {
    "id": "5qNaMXRbfQIK00NFmEQLwD",
    "title": "Action"
  },
  {
    "id": "3zmetciwx7pGdpqCjRWiSW",
    "title": "Adventure"
  },
  {
    "id": "54MESTleZtd9NvrHwJWcYp",
    "title": "Animation"
  },
  {
    "id": "21QWHKQy7f8lQxKA2tFloB",
    "title": "Biography"
  },
  {
    "id": "1jbO934dZitXfFUmIW3FTy",
    "title": "Comedy"
  },
  {
    "id": "1eYm8o1dEaeKK1g5dBHFVl",
    "title": "Crime"
  },
  {
    "id": "1L1TCrOS4GQojaQHgT9D35",
    "title": "Documentary"
  },
  {
    "id": "7jiIQdN2nArVejpipK5U86",
    "title": "Drama"
  },
  {
    "id": "6TbHQzkr5gdCYAu1oouOBE",
    "title": "Family"
  },
  {
    "id": "4WbehsmKChpb2LRMmOkTNR",
    "title": "Fantasy"
  },
  {
    "id": "5YJjJLkPAIldEvuPcczi3j",
    "title": "Film-Noir"
  },
  {
    "id": "YVaYTfUxvSBBhZoab4PrM",
    "title": "History"
  },
  {
    "id": "7AxsYJ3CQbuj72OyGbkoRp",
    "title": "Horror"
  },
  {
    "id": "6Y17GZ7sLjEdmelr0K3jlA",
    "title": "Music"
  },
  {
    "id": "1zyvptVNytpXIRpBg8uE8T",
    "title": "Musical"
  },
  {
    "id": "2tJggLnK3rHmzLk24QPWzA",
    "title": "Mystery"
  },
  {
    "id": "2WMusZXJ3RCCFHzUcPYvKz",
    "title": "Romance"
  },
  {
    "id": "5jNOcSxoHk4j38KXiwNy3i",
    "title": "Sci-Fi"
  },
  {
    "id": "LBi850i0fN345kziTbJIm",
    "title": "Short"
  },
  {
    "id": "7iYozptgaJGZ0IwEfhWLEP",
    "title": "Sport"
  },
  {
    "id": "6J2hKYBbPYdXbT4HU6GVL",
    "title": "Thriller"
  },
  {
    "id": "2WWACsU7oLOABMMEULMgvj",
    "title": "War"
  },
  {
    "id": "3pmOieXhPYEnXO9CSsJjjd",
    "title": "Western"
  }
]

function SearchForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <h2>
                <label htmlFor="query" className="text-base font-semibold leading-7 text-gray-900">
                  Search
                </label>
              </h2>
              <div className="mt-2">
                <input
                  id="query"
                  name="query"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Genres</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Select one or more genres to filter your results.
          </p>

          <div className="mt-10 space-y-10">
            <ol className="mt-6 grid sm:grid-cols-2 gap-4">
              {genres.map(genre => {
                return (
                  <li className="relative flex gap-x-3" key={genre.id}>
                    <div className="flex h-6 items-center">
                      <input
                        id={genre.id}
                        name={genre.title}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor={genre.id} className="font-medium text-gray-900">
                        {genre.title}
                      </label>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
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
