const PostItem =(post) => {
    return (`      
            <div class="col-1 wd-logo">
                <img src="${post.logo}">
            </div>
                    
            <div class="col-11 ps-4">
                <div class="row">
                    <div class="col-11 ps-0">
                        <span>
                            <span class="fw-bold">${post.userName}</span>
                            <i class="fas fa-check-circle"></i>
                            <span>${post.handle}</span>
                            <span class="text-secondary"> . ${post.time}</span>
                        </span>
                    </div>
                    <div class="col-1">
                        <i class="fas fa-ellipsis-h float-end"></i>
                    </div>
                    
   
                </div>               
                <div class="row">${post.text}</div>
                <div class="row mt-2">
                    <ul class="list-group wd-post-box">
                        <li class="list-group-item wd-image-box">
                            <img class="wd-post-image" src="${post.image}">
                        </li>
                        <li class="list-group-item wd-post-article">${post.article}</li>
                    </ul>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <i class="far fa-comment-dots"></i> ${post.reply}
                    </div>
                    <div class="col"><i class="fas fa-retweet"></i> ${post.retweet}</div>
                    <div class="col"><i class="far fa-heart"></i> ${post.like}</div>
                    <div class="col"><i class="far fa-share-square"></i> ${post.share}</div>
                </div>
            </div>
                
    `)
}

export default PostItem;