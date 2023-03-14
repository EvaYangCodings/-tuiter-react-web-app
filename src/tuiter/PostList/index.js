import PostItem from "./PostItem.js";
import posts from "./posts.json";

function PostList (){
    return (
        posts.map(post => (
            <div key = {post.id} className="row mb-2 wd-single-post">
                <PostItem
                    post = {post}/>
            </div>
            ))
    )
}

export default PostList;

