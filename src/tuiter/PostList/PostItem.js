import React from "react";
import post from "./posts.json"
import {faCircleCheck, faEllipsisH, faCommentDots, faHeart, faRetweet, faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostItem =(
    {post = {
        "id": 1,
        "logo": "../images/northeastern.png",
        "userName": "Northeastern University",
        "handle": "@northeastern university",
        "time": "2h",
        "text": "It is a great day to be a Husky.",
        "image": "../../images/husky.jpeg",
        "article": "BOSTON — In the first iteration of the Beanpot final to ever feature Northeastern and Harvard, the TD Garden crowd also saw the tournament's first 3-on-3 + shootout championship game.",
        "reply": "3.5k",
        "retweet": "3k",
        "like": "5k",
        "share": "6.5k"
    }}
) => {
    return (
        <div className="row">
            <div className="col-1 wd-logo-react ps-1">
                <img className="rounded-circle" src={post.logo}/>
            </div>
                    
            <div className="col-11 ps-4">
                <div className="row">
                    <div className="col-11 ps-0">
                        <span>
                            <span className="fw-bold me-1">{post.userName}</span>
                            <FontAwesomeIcon icon={faCircleCheck}/>
                            <span className="ms-1">{post.handle}</span>
                            <span className="text-secondary"> . {post.time}</span>
                        </span>
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faEllipsisH} className="float-end"/>
                    </div>
                </div>               
                <div className="row">{post.text}</div>
                <div className="row mt-2">
                    <ul className="list-group wd-post-box">
                        <li className="list-group-item wd-image-box">
                            <img className="wd-post-image" src={post.image}/>
                        </li>
                        <li className="list-group-item wd-post-article">{post.article}</li>
                    </ul>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <FontAwesomeIcon icon={faCommentDots} /> {post.reply}
                    </div>
                    <div className="col"><FontAwesomeIcon icon={faRetweet} /> {post.retweet}</div>
                    <div className="col"><FontAwesomeIcon icon={faHeart} /> {post.like}</div>
                    <div className="col"><FontAwesomeIcon icon={faShare} /> {post.share}</div>
                </div>
            </div>

        </div>)
}

export default PostItem;