import { lazy, Suspense } from "react";

const ReviewedPaperCard = lazy(() => import("./ReviewedPaperCard.jsx"));

const ReviewedPapers = ({ address }) => {
  return (
    <div className="flex flex-col bg-white p-8">
      <div className="flex flex-row mb-6 place-content-between">
        <div className="ml-1 -mt-1 font-bold cursor-pointer text-lg">Reviewed Papers</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Suspense fallback={<div>Loading Reviewed Paper Card...</div>}>
          <ReviewedPaperCard></ReviewedPaperCard>
        </Suspense>
      </div>
    </div>
  );
};

export default ReviewedPapers;
