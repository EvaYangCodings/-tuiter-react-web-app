import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


function WhoToFollowList (){
    return (`
        <div className="list-group">
        ${
            who.map(user => (`
            
                ${WhoToFollowListItem(user)}
            
            `)).join('')
        }
        </div>
    `)
};

export default WhoToFollowList;
// $(WhoToFollowList);

