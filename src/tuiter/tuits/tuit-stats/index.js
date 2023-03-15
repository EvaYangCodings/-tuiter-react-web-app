import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faHeart, faRetweet, faShare} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useSelector} from "react-redux";

const TuitStats = () => {
    const post = useSelector(state => state)
    return (
        <div className="row mt-2">
            <div className="col">
                <FontAwesomeIcon icon={faCommentDots} /> {post.replies}
            </div>
            <div className="col"><FontAwesomeIcon icon={faRetweet} /> {post.retuits}</div>
            <div className="col"><FontAwesomeIcon icon={faHeart} /> {post.likes}</div>
            <div className="col"><FontAwesomeIcon icon={faShare} /> </div>
        </div>
    )
}

export default TuitStats;