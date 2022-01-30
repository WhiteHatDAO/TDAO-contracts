import React from "react";
import Navbar from "../components/HelperComponents/Navbar";

const Submit = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <section>
        <h2 className="text-4xl">Submit Article</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </section>

      <section>
        <div>
          <h2>Upload file</h2>
        </div>
        <div>
          <h2>Preview</h2>
        </div>
      </section>
    </div>
  );
}

export default Submit;
