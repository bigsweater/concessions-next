import React from 'react';
import { Disclosure } from '@headlessui/react'
import Image from 'next/image';

function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/concessions-logo.png" width="50" height="64" alt="Concessions logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                  <h1
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Concessions
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

export default Header;
