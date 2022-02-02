import React, { useState } from "react";
import Navbar from "../components/HelperComponents/Navbar";
import { SubmitFile } from "../components/HelperComponents/SubmitFile";

const Submit = () => {

  const manuscriptFileLabel = "manuscript-label"
  const thumbnailFileLabel = "thumbnail-label"
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
  };


  return (
    <div className="m-4 max-w-screen-xl mx-auto">
      <div>
        <h2 className="text-4xl text-left">Submit Article</h2>
        <p className="text-left">Upload your article manuscript and related details to the Journal of Decentralized Work.</p>
      </div>

      <div className="flex">
        <form className="flex-1 space-y-6" action="#" method="POST">
          <div className="space-y-6">
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div>
                    <label className="block text-left text-sm font-medium text-gray-700">Article Manuscript</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">pdf, md, doc, docs, or txt up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">jpg or png up to 10 MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-left text-sm font-medium text-gray-700">Price</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="md:col-span-1">
                  <h3 className="text-left text-lg font-medium leading-6 text-gray-900">Preview</h3>
                </div>
              </div>

              <div className="mt-10 col-span-6">
                <label htmlFor="article-title" className="block text-left text-sm font-medium text-gray-700">
                  Article Title
                </label>
                <input
                  type="text"
                  name="article-title"
                  id="article-title"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-10 col-span-6">
                <label htmlFor="authors" className="block text-left text-sm font-medium text-gray-700">
                  Author(s)
                </label>
                <input
                  type="text"
                  name="authors"
                  id="authors"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-10 col-span-6">
                <label htmlFor="abstract" className="block text-left text-sm font-medium text-gray-700">
                  Abstract
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="abstract"
                    id="abstract"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="mt-10 col-span-6">
                <label htmlFor="location" className="block text-left text-sm font-medium text-gray-700">
                  Select Blockchain
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="Ethereum"
                >
                  <option>Ethereum</option>
                </select>
              </div>

              <div className="mt-10 col-span-6">
                <label htmlFor="categories" className="block text-left text-sm font-medium text-gray-700">
                  Categories
                </label>
                <select
                  id="categories"
                  name="categories"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="Decentralization"
                  multiple
                >
                  <option>Decentralization</option>
                  <option>The Future of Work</option>
                  <option>DAOs</option>

                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>

          </div>
        </form>
      </div>

    </div>
  );
};

export default Submit;
