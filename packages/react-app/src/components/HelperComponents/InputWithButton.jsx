import { SearchCircleIcon } from "@heroicons/react/solid";

export default function InputWithButton() {
  return (
    <div className="mt-1 flex rounded-md shadow-sm">
      <div className="relative items-stretch focus-within:z-10">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 content-center"
          placeholder="Articles, Journals, Documents..."
        />
      </div>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <SearchCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        <span>Search</span>
      </button>
    </div>
  );
}
