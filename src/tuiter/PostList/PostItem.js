import React from "react";
import post from "./posts.json"
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
            <div className="col-1 wd-logo">
                <img className="rounded-circle" src={post.logo}/>
            </div>
                    
            <div className="col-11 ps-4">
                <div className="row">
                    <div className="col-11 ps-0">
                        <span>
                            <span className="fw-bold">{post.userName}</span>
                            <i className="fas fa-check-circle"></i>
                            <span>{post.handle}</span>
                            <span className="text-secondary"> . {post.time}</span>
                        </span>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-ellipsis-h float-end"></i>
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
                        <i className="far fa-comment-dots"></i> {post.reply}
                    </div>
                    <div className="col"><i className="fas fa-retweet"></i> {post.retweet}</div>
                    <div className="col"><i className="far fa-heart"></i> {post.like}</div>
                    <div className="col"><i className="far fa-share-square"></i> {post.share}</div>
                </div>
            </div>

        </div>)
}

export default PostItem;