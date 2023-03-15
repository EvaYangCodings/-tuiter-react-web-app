import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group mb-2">
            {
                postsArray.map(post =>
                    <TuitItem
                        key={post.id} tuit={post}/> )
            }
        </ul>
    );
};
export default TuitsList;
