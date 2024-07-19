'use server'
import React from 'react'

const BASE_URL = 'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com'

export const getClient = React.cache(async function () {
	const res = await fetch(`${BASE_URL}/auth/token`)
	const token = (await res.json()).token

	return async (path, params) => {
		if (path.slice(0,1) !== '/') {
			path = `/${path}`
		}

		let url = `${BASE_URL}${path}`
		const queryString = new URLSearchParams(params).toString()
		url = queryString.length ? url + '?' + queryString : url

		return await fetch(url, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
})

const fetchMovie = React.cache(async function (movieId) {
	const client = await getClient()
	const res = await client(`/movies/${movieId}`)
	const json = await res.json()

	return json
})

export const fetchMovies = async function (params) {
	const client = await getClient();
	const res = await client('/movies', { limit: 10, ...params })
	const json = await res.json()
	const decoratedMovies = json.data.map(async movie => {
		if (!movie.id) return movie
		const decoratedMovie = await fetchMovie(movie.id)
		return {
			...movie,
			...decoratedMovie
		}
	})

	json.data = decoratedMovies

	return json
}

export const fetchGenres = React.cache(async function () {
	const client = await getClient();
	const res = await client('/genres/movies', { limit: 1000 })
	const json = await res.json()

	return json
})
