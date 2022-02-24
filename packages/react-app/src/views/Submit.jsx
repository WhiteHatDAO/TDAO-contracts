import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthorForm } from "../components/HelperComponents/AuthorForm";

const Submit = () => {
  const manuscriptFileLabel = "manuscript-label";
  const thumbnailFileLabel = "thumbnail-label";
  const [selectedManuscriptFile, setSelectedManuscriptFile] = useState();
  const [selectedArticleCover, setSelectedArticleCover] = useState();
  const [articleTitle, setArticleTitle] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [categories, setCategories] = useState([]);

  const changeSelectedManuscriptFile = event => {
    setSelectedManuscriptFile(event.target.files[0]);
    console.log(selectedManuscriptFile);
  };

  const changeSelectedArticleCover = event => {
    setSelectedArticleCover(event.target.files[0]);
    console.log(selectedArticleCover);
  };

  const changeArticleTitle = event => {
    setArticleTitle(event.target.value);
  };

  const changeBlockchain = event => {
    setBlockchain(event.target.value);
  };

  const changeCategories = event => {
    var options = event.target.options;
    var categoriesSelected = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        categoriesSelected.push(options[i].value);
      }
    }
    setCategories(categoriesSelected);
  };

  const { register, control, handleSubmit, reset, formState, watch, errors } = useForm();

  const handleFormSubmission = data => {
    data.preventDefault();
    console.log(data.target);
    //JSON.stringify(data.target, null, 4)
  };

  return (
    <div className="" style={{backgroundImage: 'linear-gradient(#fff, #EEEE'}}>
      <div className="m-4 p-4 max-w-screen-lg lg:max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-left">Submit Article</h2>
          <p className="text-left">
            Upload your article manuscript and related details to the Journal of Decentralized Work.
          </p>
        </div>

        <div className="flex">
          <form className="flex-1 space-y-6" onSubmit={handleSubmit(handleFormSubmission)}>
            <div className="space-y-6">
              <div className="py-5 sm:rounded-lg">
                <div className="md:grid md:grid-cols-10 md:gap-6">
                  <div className="mt-5 md:mt-0 md:col-span-6">
                    <div>
                      <label className="block text-left text-lg font-bold text-gray-700">Article Manuscript</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-300 rounded-md">
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
                              htmlFor="manuscript-upload"
                              className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                {...register("manuscript-upload", { required: true })}
                                id="manuscript-upload"
                                name="manuscript-upload"
                                type="file"
                                className="sr-only"
                                onChange={changeSelectedManuscriptFile}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">pdf, md, doc, docs, or txt up to 10MB</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-300 rounded-md">
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
                              htmlFor="image-upload"
                              className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                {...register("image-upload", { required: true })}
                                id="image-upload"
                                name="image-upload"
                                type="file"
                                className="sr-only"
                                onChange={changeSelectedArticleCover}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">jpg or png up to 10 MB</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <label className="block text-left text-lg font-bold">Price</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="mt-1 mb-0 p-2 bg-transparent block w-full shadow-sm focus:outline-none text-lg border-b border-black "
                      />
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col">
                    <h3 className="text-left text-lg font-bold leading-6 text-gray-900">Preview</h3>
                    <div className="my-0 border border-gray-300 rounded-md w-full h-full flex items-center justify-center text-center">
                      <p>Upload image to preview your article image</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 col-span-6">
                  <label htmlFor="article-title" className="pl-4 block text-left text-lg font-bold">
                    Title <span className="pl-1 text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="article-title"
                    id="article-title"
                    placeholder="e.g Decentralised finance"
                    className="my-1 p-4 bg-transparent rounded-xl block w-full focus:outline-none text-lg border border-black "
                    {...register("article-text", { required: true })}
                  />
                </div>
                <div className="mt-10 col-span-6">
                  <label htmlFor="article-title" className="pl-4 block text-left text-lg font-bold">
                    Author(s) <span className="pl-1 text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="article-title"
                    id="article-title"
                    placeholder="e.g John Doe"
                    className="my-1 p-4 bg-transparent rounded-xl block w-full focus:outline-none text-lg border border-black "
                    {...register("article-text", { required: true })}
                  />
                </div>
                {/* <div className="mt-10 col-span-6">
                <label htmlFor="authors" className="block text-left text-sm font-medium text-gray-700">
                  Author(s)
                </label>
                <AuthorForm
                  register={register}
                  control={control}
                  handleSubmit={handleSubmit}
                  reset={reset}
                  formState={formState}
                  watch={watch}
                />
              </div> */}
                <div className="mt-10 col-span-6">
                  <div className="pl-4 flex flex-col text-left">
                    <label htmlFor="abstract" className="block text-left text-lg font-bold">
                      Abstract <span className="pl-1 text-primary">*</span>
                    </label>
                    <p>Each submission should have exactly one abstract. Submissions with multiple articles will be disqualified from the marketplace.</p>
                  </div>
                  <div className="mt-1">
                    <textarea
                      rows={4}
                      name="abstract"
                      id="abstract"
                      className="block w-full bg-transparent text-lg rounded-xl border border-black"
                      {...register("abstract", { required: true })}
                    />
                  </div>
                </div>

                <div className="mt-10 col-span-6">
                  <label htmlFor="select-blockchain" className="pl-4 block text-left text-lg font-bold">
                    Select Blockchain <span className="pl-4 text-primary">*</span>
                  </label>
                  <select
                    id="select-blockchain"
                    name="select-blockchain"
                    className="mt-1 block bg-transparent w-full pl-3 pr-10 py-2 text-lg rounded-xl border border-black"
                    {...register("select-blockchain", { required: true })}
                  >
                    <option>Ethereum</option>
                  </select>
                </div>

                <div className="mt-10 col-span-6">
                  <div className="pl-4 flex flex-col">
                    <label htmlFor="categories" className="block text-left text-lg font-bold">
                      Categories
                    </label>
                    <p className="text-left">Select the category this article might belong to</p>
                  </div>
                  {/* <select
                  id="categories"
                  name="categories"
                  className="mt-1 w-full p-4 text-lg rounded-lg flex flex-row items-center"
                  multiple
                  {...register("select-blockchain", { required: true })}
                >
                  <option>Decentralization</option>
                  <option>The Future of Work</option>
                  <option>DAOs</option>
                </select> */}
                  <div className="mt-1 w-full p-4 text-lg rounded-lg border flex flex-row flex-wrap items-center space-x-4">
                    <div className="my-2 px-4 py-2 rounded-full text-lg border border-primary cursor-pointer" style={{ backgroundColor: 'rgba(180, 28, 46, 0.13)' }}>Technology</div>
                    <div className="my-2 px-4 py-2 rounded-full text-lg border cursor-pointer">History</div>
                    <div className="my-2 px-4 py-2 rounded-full text-lg border cursor-pointer">Romance</div>
                    <div className="my-2 px-4 py-2 rounded-full text-lg border cursor-pointer">Comedy</div>
                    <div className="my-2 px-4 py-2 rounded-full text-lg border cursor-pointer">Politics</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-primary text-white py-2 px-6 rounded-full text-lg"
                >
                  SUBMIT
                </button>
                {/* <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submit;
