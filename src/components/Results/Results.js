import React from 'react';
import Pagination from '@/components/Pagination'

const movies = [
  {
    "id": "7GQMaTpw7B0MInjOHis5yu",
    "title": "'The Descent': Beneath the Scenes"
  },
  {
    "id": "5QMbuAa6H8uMAEbR2agDbe",
    "title": "10 Cloverfield Lane",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "017UwRkfdbbqWDQD99T7OL",
    "title": "12 Years a Slave",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "eWHddZqsc7wwB5IthCFHs",
    "title": "3:10 to Yuma",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODE0NTcxNTQzNF5BMl5BanBnXkFtZTcwMzczOTIzMw@@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "llNU1NFpijiLc1udSYxBG",
    "title": "A Bug's Life",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNThmZGY4NzgtMTM4OC00NzNkLWEwNmEtMjdhMGY5YTc1NDE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "rating": "G"
  },
  {
    "id": "3LoGWHDGt0c0G9xpZHmLmo",
    "title": "A Christmas Story",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWMyNjE0MzEtMzVjNy00NjIxLTg0ZjMtMWJhNGI1YmVjYTczL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg",
    "rating": "PG"
  },
  {
    "id": "4GiVRuYOaBG7jYet2VTBno",
    "title": "A Girl Walks Home Alone at Night",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMzNjMyMjU2M15BMl5BanBnXkFtZTgwMzA3NjQ0MzE@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "shkUYcAqTCOSPn60zdvkn",
    "title": "A Hard Day's Night",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjQyMGUwNzAtNTc2MC00Y2FjLThlM2ItZGRjNzM0OWVmZGYyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "rating": "PG"
  },
  {
    "id": "1s6euUs99UAiKlNlFvfBmi",
    "title": "A Journey of the Soul: The Making of 'Hostiles'"
  },
  {
    "id": "58QQLOJMoDvOl1ejUN9UYs",
    "title": "A Million Ways to Die in the West",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "30OHPaSv2fT0FqRD2HUWSO",
    "title": "A Monster Calls: Making of the Tales",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDQ1OTc4MWUtM2E4Mi00Y2I0LWJjMzktNDQyZGE3NjdlZjc5XkEyXkFqcGdeQXVyNDY0NDMxOTQ@._V1_.jpg"
  },
  {
    "id": "50X0nBREBD9aCbx7q6k5bc",
    "title": "A Nightmare on Elm Street",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "rating": "18A"
  },
  {
    "id": "6EjsX0xnZJv7YeqPmhWy54",
    "title": "A Quiet Place",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "1d1Kn4JpJJkAf03pRifTVe",
    "title": "A Streetcar Named Desire",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzk2M2Y3MzYtNGMzMi00Y2FjLTkwODQtNmExYWU3ZWY3NzExXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    "rating": "14A"
  },
  {
    "id": "1qQQF18af4z7fGnUgbUCsd",
    "title": "Airplane!",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjA3YjdhMWEtYjc2Ni00YzVlLWI0MTUtMGZmNTJjNmU0Yzk2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "rating": "AA"
  },
  {
    "id": "4Of0hHwbRXr2X7OzFEGZKl",
    "title": "Akira",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg",
    "rating": "AA"
  },
  {
    "id": "3zlRx72GVJZObhRNArZ4bl",
    "title": "Aladdin",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTg5ZTVmM2EtZjdhZC00MzBjLWEwZTYtNWIwZDczYzZkMzA4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "rating": "G"
  },
  {
    "id": "3lWxB4uMlS4rqDoZhcEaYR",
    "title": "Alien",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "rating": "R"
  },
  {
    "id": "2rt7a6gk2fZ0C11lkhHJGN",
    "title": "Aliens",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllMDAtYzYzYjA0ZjFhZWJjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
    "rating": "R"
  },
  {
    "id": "2MkTThjQEJBdRQUdZsJVT",
    "title": "All About Eve",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYmE1M2Y3NTYtYTI0Mi00N2JlLTkzMzItOTY1MTlhNWNkMDgzXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
    "rating": "PG"
  },
  {
    "id": "3i3BFr3xUW6cFwR2bDMQZh",
    "title": "All Is Lost",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI0MzIyMjU1N15BMl5BanBnXkFtZTgwOTk1MjQxMDE@._V1_.jpg",
    "rating": "PG"
  },
  {
    "id": "1HkLInlNYr6vHvmG2wCOUR",
    "title": "All Quiet on the Western Front",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDdlMzRjM2MtNjcxNy00MjgyLTkyZmYtY2ExODM0OTBkMzI0XkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_.jpg",
    "rating": "PG"
  },
  {
    "id": "6iQcgPaH4CrhqprPHTyhZP",
    "title": "Altered States",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTdkOTU5NDYtZjk4NC00NDA0LTlkMDItODY3ZWU2Y2VkNzFjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "rating": "R"
  },
  {
    "id": "399df9yAMsnin2II4HdEIw",
    "title": "American Outlaws",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTIwMTYxODAzMV5BMl5BanBnXkFtZTYwNTM3Nzc5._V1_.jpg",
    "rating": "PG"
  },
  {
    "id": "1lvDjAu1LCRzKo7qqyIqGL",
    "title": "An American in Paris",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzFkNGM0YTUtZjY5Ny00NzBkLWE1NTAtYzUxNjUyZmJlODMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "rating": "G"
  }
]

function Results() {
  return (
    <div className="border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
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

      <Pagination />
    </div>
  );
}

export default Results;
