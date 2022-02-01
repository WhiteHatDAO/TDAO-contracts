import React, { useState } from "react";
import Navbar from "../components/HelperComponents/Navbar";
import { SubmitFile } from "../components/HelperComponents/SubmitFile";

const Submit = () => {
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
	}; 


  return (
    <div className="max-w-screen-2xl mx-auto">
      <section>
        <h2 className="text-4xl text-left">Submit Article</h2>
        <p className="text-left">Upload your article manuscript and related details to the Journal of Decentralized Work.</p>
      </section>

      <section className="flex">
        <div className="w-2/3">
          <h2>Manuscript Upload</h2>
          <SubmitFile buttonText="Upload Manuscript" onChange={changeHandler} onClick={handleSubmission}/>
          <h2>Thumbnail Upload</h2>
        </div>
        <div className="w-1/3">
          <h2>Preview</h2>
        </div>
      </section>
    </div>
  );
};

export default Submit;
