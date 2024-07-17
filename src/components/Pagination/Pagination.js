import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { QueryContext } from '@/components/QueryProvider';
import Link from 'next/link';

function Pagination() {
  const { pagination: paginationContext } = React.useContext(QueryContext)
  const currentPage = paginationContext.getCurrentPage()
  const prevPage = currentPage - 1 < 1 ? null : currentPage - 1
  const nextPage = currentPage + 1 > paginationContext.totalPages ? null : currentPage + 1

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {prevPage && (
          <Link
            href={paginationContext.getUrlForPage(prevPage)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </Link>
        )}
        {nextPage && (
          <Link
            href={paginationContext.getUrlForPage(nextPage)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </Link>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing page <span className="font-medium">{currentPage}</span> of{' '}
              <span className="font-medium">{paginationContext.totalPages}</span> pages
            </p>
          </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            {prevPage && (
              <Link
                href={paginationContext.getUrlForPage(prevPage)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
              </Link>
            )}

            {nextPage && (
              <Link
                href={paginationContext.getUrlForPage(nextPage)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
