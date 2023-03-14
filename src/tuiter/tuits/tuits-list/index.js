import React from "react";
import TuitItem
    from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group mt-2">
            {
                postsArray.map(post =>
                    <TuitItem
                        key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default TuitsList;
