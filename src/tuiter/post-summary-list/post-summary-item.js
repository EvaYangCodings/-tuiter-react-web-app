import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "TESLA.PNG"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row pe-0">
                <div className="col-10">
                    <div className="text-secondary pb-1">{post.userName} . {post.time}</div>
                    <div className="fw-bolder pb-1">{post.topic}</div>
                    <div className="text-secondary pb-1">{post.title}</div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <img width={70} className="rounded-3 float-end" src={`../../images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;