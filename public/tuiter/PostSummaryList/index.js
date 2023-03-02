import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


function PostSummaryList (){
    return (`
        <ul className="list-group" style="padding-left: 0px">
        ${
            posts.map(post => (`
            
                ${PostSummaryItem(post)}
            
            `)).join('')
        }
        </ul>
    `)
};

export default PostSummaryList;

