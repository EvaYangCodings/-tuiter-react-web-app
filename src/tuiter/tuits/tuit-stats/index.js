import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faHeart, faRetweet, faShare, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../../services/tuits-thunks";
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
            "unlikes": 5,
            "handle" : "@SpaceX",
            "tuit" : "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    // const [post, setPost] = useState(stats);
    // const handleLike = () => {
    //     if (post.liked) {
    //         setPost(prevPost => ({
    //             ...prevPost,
    //             likes: prevPost.likes - 1,
    //             liked: false
    //         }));
    //     } else {
    //         setPost(prevPost => ({
    //             ...prevPost,
    //             likes: prevPost.likes + 1,
    //             liked: true
    //         }));
    //     }
    // };
    const dispatch = useDispatch();
    return (
        <div className="row mt-2">
            <div className="col">
                <FontAwesomeIcon icon={faCommentDots} /> {stats.replies}
            </div>
            <div className="col"><FontAwesomeIcon icon={faRetweet} /> {stats.retuits}</div>
            <div className="col" onClick={() => dispatch(updateTuitThunk({
                ...stats,
                likes: stats.likes + 1
            }))}>
                <FontAwesomeIcon
                    icon={faHeart}
                    // style={{ color: stats.liked ? "red" : "black", cursor: "pointer" }}
                />{" "}
                {stats.likes}
            </div>

            <div className="col" onClick={() => dispatch(updateTuitThunk({
                ...stats,
                unlikes: stats.unlikes + 1,
                
            }))}>
                <FontAwesomeIcon
                    icon={faThumbsDown}
                    // style={{ color: stats.liked ? "red" : "black", cursor: "pointer" }}
                />{" "}
                {stats.unlikes}
            </div>
            <div className="col"><FontAwesomeIcon icon={faShare} /> </div>
        </div>
    )
}

export default TuitStats;