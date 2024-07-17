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

export const fetchMovies = async function (params) {
	const client = await getClient();
	const res = await client('/movies', { limit: 10, ...params })
	const json = await res.json()

	return json
}

export const fetchGenres = React.cache(async function () {
	const client = await getClient();
	const res = await client('/genres/movies')
	const json = await res.json()

	return json
})
