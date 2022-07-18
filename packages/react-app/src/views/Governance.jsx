import React, { lazy, Suspense } from "react";

const Footer = lazy(() => import("../components/HelperComponents/Footer"));

const Governance = () => {
  return (
    <div className="mx-auto pt-4 max-w-xl md:max-w-4xl xl:max-w-7xl overflow-hidden">
      Governance View
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <Footer></Footer>
        </Suspense>
      </div>
    </div>
  );
};

export default Governance;