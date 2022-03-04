import { useState } from "react";
import { SubmissionCard } from "./SubmissionCard";
import { useHistory, useLocation } from "react-router-dom";

const UserSubmissions = ({address}) => {
    // const [toArticles, goToArticles] = useState(false);
    const history = useHistory();
    const location = useLocation();

    return (
        <div className="my-8">
            <div className="flex justify-center">
                <div className="rounded-2xl p-8 bg-white flex flex-col text-left space-y-4">
                    <div className="rounded-xl text-lg bg-primary text-white text-center cursor-pointer px-4 py-2" onClick={() => history.push(`/submit/${address}`)}>
                        Submit Your First Article
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
                <SubmissionCard></SubmissionCard>
            </div> */}
        </div>
    )
}

export default UserSubmissions;