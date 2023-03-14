import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";


function WhoToFollowList (){
    return (
        <ul className="list-group mt-1">
            <li className = "list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                who.map(user => 
                    <WhoToFollowListItem
                        key={user.id}
                        who={user}/>
                
                )
            }
        </ul>
    )
}

export default WhoToFollowList;