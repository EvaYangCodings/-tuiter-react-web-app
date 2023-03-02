import PostItem from "./PostItem.js";
import posts from "./posts.js";


function PostList (){
    return (`
        ${
        posts.map(post => (`
            <div class="row mb-2 wd-single-post">
                ${PostItem(post)}
            </div>
            `)).join('')
        }       
    `)
};

export default PostList;

