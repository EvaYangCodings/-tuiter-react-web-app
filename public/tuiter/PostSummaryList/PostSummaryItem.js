const PostSummaryItem =(post) => {
    return (`
        <li class="list-group-item">
                <div class="row">
                    <div class="col-10">
                        <div class="text-secondary">${post.topic}</div>
                        <div class="row">
                            <div>
                                <span>
                                    <span class="fw-bolder">${post.userName}</span>
                                    <i class="fas fa-check-circle"><span class="text-secondary"> - ${post.time}</span></i>
                                </span>
                            </div>
                        </div>
                        <div class="fw-bolder">
                            ${post.title}
                        </div>
                        <div class="text-secondary">${post.tweets}</div>
                    </div>
                    <div class="col-2 pe-0 align-self-center">
                        <img class="float-end" src="${post.image}" height="80px">
                    </div>
                </div>
            </li>          
    `)
}

export default PostSummaryItem;