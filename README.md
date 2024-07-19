# Concessions

Movies require snacks, and tight timelines require tradeoffs. Concessions!

## [Current `main` deployment](https://concessions-next.vercel.app)

I built this Movie API client with Next, Tailwind UI, and a splash of Lodash.

## Things I like

I think the thing I'm most proud of here is using the URL as a central store of state. I wrote a [`QueryStringProvider`](https://github.com/bigsweater/concessions-next/blob/main/src/components/QueryStringProvider/QueryStringProvider.js) that manages and updates query strings based on updated state from the search form. When the query parameters are updated, the [`Results`](https://github.com/bigsweater/concessions-next/blob/main/src/components/Results/Results.js) component calls the `fetchMovies` server action and updates its list of movies. (Query params are generally updated by the [`SearchForm`](https://github.com/bigsweater/concessions-next/blob/main/src/components/SearchForm/SearchForm.js) component.)

It was a really interesting problem! It's probably not "good" -- or at least conventional -- React to do it this way, but it was fun. In most frontend work that I've done, the query string of the current URL is almost a side consideration. We normally update state in the application and ignore the URL, or at best, update it after the fact.

I wanted to flip that on its head for this project, and use the URL to keep the app stateless. This enables you to link directly to a specific search results page (for instance: [Genre: Family, Page: 2](https://concessions-next.vercel.app/?genre=Family&page=2)). The back button also works!

The UI and URL update instantly, but the fetch calls are debounced.

I was also happy with my first use of Server Actions. I've never used Next or Server Actions, and I'm impressed with how backend-focused it is. It's also pretty darn quick. I ran into a bunch of rough edges in the documentation, so this project took me longer than I wanted. But Server Actions work great.

## Things I'd change

Given the time limit here, there's plenty I'd change.

- Tests! Need to write tests.
- There's no sanitation/validation of any of the inputs. That would be important in a real app.
- The URL currently updates *as you type* into the search bar. This keeps state synced up nicely, but it creates a lot of history states. I'd like to figure out a way to use the URL as a single source of truth for search state, *but* avoid pushing to history too frequently.
- I'd clean it up and refactor a lot. There are some unnecessary re-renders happening in there, and the `QueryStringProvider` is quite messy.
    - In retrospect, it would have been better to use a reducer. A state machine would make this code much clearer.
    - I ran into some issues with Next's `useSearchParams` hook and the way React serializes data on the frontend. So there's a lot of object manipulation happening here, which feels pretty gross. I'd like to find a way around that.
- I'd make sure Suspense boundaries are working. There's some funny business going on with Suspense...couldn't get loading states to show, despite having built with Server Actions and wrapped them in Suspense components. I think it's because Next is treating URL updates like full navigation events?
- I'd add a bit of whimsy! Tailwind UI is great, but this app is so bland.
