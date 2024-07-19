'use client'
import React from 'react';
import { isoDuration, en } from '@musement/iso-duration'

function MovieDetails({ movie }) {
  isoDuration.setLocales({en}, {fallbackLocale: 'en'})
  return (
    <>
      <div className="flex min-w-0 gap-x-6">
        <div className="flex-shrink-0 w-48 group overflow-hidden">
          {movie.posterUrl && (
            <div
              className="w-full h-full transition-transform scale-125 hover:scale-100 bg-cover"
              style={{backgroundImage: `url('${movie.posterUrl}')`}}
            />
          )}
        </div>

        <div className="min-w-0 flex-auto flex-col divide-y divide-gray-200">
          <div className="pb-4">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">{movie.title}</h3>
            <p className="mt-1 text-xs leading-5 text-gray-500">{movie.summary}</p>
          </div>

          <div className="py-4">
            {movie.genres?.length && (
            <p className="text-xs leading-6 text-gray-500">
                <span className="font-semibold text-gray-900">Genres:</span>{' '}
                {movie.genres.map(genre => genre.title).join(', ')}
            </p>
            )}
            {movie.directors?.length && (
            <p className="text-xs leading-6 text-gray-500">
                <span className="font-semibold text-gray-900">Directors:</span>{' '}
                {movie.directors.join(', ')}
            </p>
            )}
            {movie.mainActors?.length && (
            <p className="text-xs leading-6 text-gray-500">
                <span className="font-semibold text-gray-900">Starring:</span>{' '}
                {movie.mainActors.join(', ')}
            </p>
            )}
            {movie.datePublished && (
            <p className="text-xs leading-6 text-gray-500">
                <span className="font-semibold text-gray-900">Released:</span>{' '}
                {movie.datePublished}
            </p>
            )}
            {movie.ratingValue && (
            <p className="text-xs leading-6 text-gray-500">
                <span className="font-semibold text-gray-900">Audience rating:</span>{' '}
                {movie.ratingValue}
            </p>
            )}
            {movie.duration && (
            <p className="text-xs leading-6 text-gray-500">
                <span className="font-semibold text-gray-900">Duration:</span>{' '}
                {isoDuration(movie.duration).humanize()}
            </p>
            )}
          </div>
        </div>
      </div>

      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="mt-1 text-xs leading-5 text-gray-500">Rating</p>
        <p className="text-sm leading-6 text-gray-900">{movie.rating || 'Unknown'}</p>
      </div>
    </>
  )
}

export default MovieDetails;
