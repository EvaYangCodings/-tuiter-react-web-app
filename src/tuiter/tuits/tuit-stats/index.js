import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faHeart, faRetweet, faShare} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

const TuitStats = (
    {
        stats = { "id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "src/images/teslaRedBackground.jpeg",
            "liked" :false,
            "replies" : 20,
            "retuits":  10,
            "likes" :  200,
            "handle" : "@SpaceX",
            "tuit" : "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const [post, setPost] = useState(stats);
    const handleLike = () => {
        if (post.liked) {
            setPost(prevPost => ({
                ...prevPost,
                likes: prevPost.likes - 1,
                liked: false
            }));
        } else {
            setPost(prevPost => ({
                ...prevPost,
                likes: prevPost.likes + 1,
                liked: true
            }));
        }
    };
    return (
        <div className="row mt-2">
            <div className="col">
                <FontAwesomeIcon icon={faCommentDots} /> {stats.replies}
            </div>
            <div className="col"><FontAwesomeIcon icon={faRetweet} /> {stats.retuits}</div>
            <div className="col">
                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={handleLike}
                    style={{ color: post.liked ? "red" : "black", cursor: "pointer" }}
                />{" "}
                {post.likes}
            </div>
            <div className="col"><FontAwesomeIcon icon={faShare} /> </div>
        </div>
    )
}

export default TuitStats;