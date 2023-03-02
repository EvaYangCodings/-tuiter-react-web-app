import PostItem from "./PostItem.js";
import posts from "./posts.json";


function PostList (){
    return (
        posts.map(post => (
            <div className="row mb-2 wd-single-post">
                <PostItem
                    key = {post.id}
                    post = {post}/>
            </div>
            ))
    )
};

export default PostList;

