import Results from '@/components/Results'
import SearchForm from '@/components/SearchForm'

export default function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Movie Search</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="sm:col-span-1">
              <SearchForm />
            </div>

            <div className="md:col-span-2">
              <Results />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
