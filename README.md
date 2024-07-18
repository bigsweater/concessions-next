I built this Movie API client with Next, Tailwind UI, and a splash of Lodash.

## Things I like

I think the thing I'm most proud of here is using the URL as a central store of state. I wrote a `QueryStringProvider` that manages and updates query strings based on updated state from the search form.

It was a really interesting problem! In most frontend work that I've done, the query string of the current URL is almost a side consideration. We normally update state in the application and ignore the URL, or at best, update it after the fact.

I wanted to flip that on its head for this project, and use the URL to keep the app stateless. This enables you to link directly to a specific search results page. The back button also works!

I was also proud of my use of Server Actions. I've never used Next or Server Actions, and I'm impressed with how backend-focused it is. It's also pretty darn quick. I ran into a bunch of rough edges in the documentation, so this project took me longer than I wanted. But Server Actions work great.

## Things I'd change

Given the time limit here, there's plenty I'd change.

- I'd clean it up and refactor a lot. I suspect there are some unnecessary re-renders happening in there, and the `QueryStringProvider` is quite messy.
- `QueryStringProvider` was an attempt at centralizing state management (without resorting to a third party package), and it works well enough, but there are some rough edges. For instance, the `SearchForm` component debounces input before sending results to `QueryStringProvider`. I'd like to *not* debounce the genre selection. But I found updating the `genre` and `search` params at different times caused the parameters to override one another. There's something wrong with my reconciliation logic.
    - In retrospect, it would have been better to use a reducer.
    - I ran into some issues with Next's `useSearchParams` hook and the way React serializes data on the frontend. So there's a lot of primitive object manipulation happening here, which feels pretty gross. I'd like to find a way around that.
- I'd add a bit of whimsy! Tailwind UI is great, but this app is so bland.
- I might even use another API (like IMDB) to decorate the movie results with additional data (like audience rating, descriptions, links to trailers, etc.).
