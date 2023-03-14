import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

function WhoToFollowList (){
    const whoArray = useSelector(
        (state) => state.who
    );
    return (
        <ul className="list-group mt-1">
            <li className = "list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(user =>
                    <WhoToFollowListItem
                        key={user.id}
                        user={user}/>
                )
            }
        </ul>
        // <div>
        //     <h1>Who To Follow!!</h1>
        // </div>
    )
}

export default WhoToFollowList;