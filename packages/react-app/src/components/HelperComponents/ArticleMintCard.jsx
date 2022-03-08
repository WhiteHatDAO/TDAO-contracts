import { useState, useEffect } from "react";
import { dataURLtoFile } from "../../utils/utils";
import { useHistory } from "react-router-dom";

const ArticleMintCard = ({article}) => {
    const [coverImage, setCoverImage] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if(article === undefined || article === null) return;
        var data = dataURLtoFile(article?.cover?.data, article?.cover?.filename);
        setCoverImage(URL.createObjectURL(data));
    }, [article])

    return (
        <div className="m-3 lg:m-4 rounded-2xl bg-white flex flex-col space-y-4 p-6" style={{ boxShadow: '0px 0px 59px -4px rgba(0, 0, 0, 0.19)' }}>
            <img className="rounded-xl w-full h-auto" src={coverImage}></img>
            <div className="text-xl font-bold text-left">{article?.title}</div>
            <div className="grid grid-cols-2 space-x-4">
                <div className="bg-primary text-white px-4 py-2 rounded-xl cursor-pointer" onClick={() => history.push(`/article/${article._id}`)}>VIEW</div>
                <div className="border border-primary py-2 rounded-xl cursor-pointer" style={{ backgroundColor: 'rgba(180, 28, 46, 0.15)' }}>MINT</div>
            </div>
        </div>
    )
}

export default ArticleMintCard;