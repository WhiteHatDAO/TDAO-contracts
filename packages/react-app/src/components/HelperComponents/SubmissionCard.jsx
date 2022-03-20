import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dataURLtoFile } from "../../utils/utils";

export const SubmissionCard = article => {
  const [src, setSrc] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!article) return;
    var file = dataURLtoFile(article?.article?.cover?.data, article?.article?.cover?.filename);
    var source = URL.createObjectURL(file);
    setSrc(source);
  }, [article]);

  return (
    <div
      className="my-3 rounded-xl bg-white p-4 flex flex-col space-y-4"
      style={{ boxShadow: "0px 0px 39px -4px rgba(0, 0, 0, 0.19)" }}
    >
      <img className="rounded-xl" src={src} alt="main"></img>
      <div className="text-lg font-bold text-left">{article?.article?.title}</div>
      <div
        className="mx-8 rounded-xl border border-black py-2 text-xl font-bold cursor-pointer"
        onClick={() => history.push(`/article/${article.article?._id}`)}
      >
        VIEW
      </div>
    </div>
  );
};
