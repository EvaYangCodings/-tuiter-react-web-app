const NavigationSidebar = () => {
    return (`
    <div class="list-group">
        <a href="#" class="list-group-item">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="../home/index.html" class="list-group-item">
            <div>
                <i class="fa fa-home" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Home</span>
            </div>
        </a>
        <a href="../explore/index.html" class="list-group-item active">
            <div>
                <i class="fa fa-hashtag me-1" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Explore</span>
            </div>
        </a>
        <a href="#" class="list-group-item">
            <div>
                <i class="fa fa-bell me-1" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Notifications</span>
            </div>
        </a>
        <a href="#" class="list-group-item">
            <div>
                <i class="fa fa-envelope me-1" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Messages</span>
            </div>
        </a>
        <a href="#" class="list-group-item">
            <div>
                <i class="fa fa-bookmark me-1" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Bookmarks</span>
            </div>
        </a>
        <a href="#" class="list-group-item">
            <div>
                <i class="fa fa-list me-1" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Lists</span>
            </div>
        </a>
        <a href="#" class="list-group-item">
            <div>
                <i class="fa fa-user me-1" aria-hidden="true"></i>
                <span class="d-none d-xl-inline-block">Profile</span>
            </div>
        </a>
        <a href="#" class="list-group-item ps-1">
            <div class="row">
                <div class="col-2">
                    <span class="d-flex">
                        <span class="fa-stack" aria-hidden="true" style="padding-right:1px">
                          <i class="fas fa-circle fa-stack-1x ms-2 ps-1"></i>
                          <i class="fas fa-ellipsis-h fa-inverse fa-stack-1x ms-2 ps-2" style="font-size: 8px"></i>
                        </span>
                        <span class="col-2 ms-4 ps-2 align-self-center d-none d-xl-inline-block">More</span>
                    </span>

                </div>
            </div>
        </a>
    </div>
    <button class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>  
    `);
}

export default NavigationSidebar;
// $(NavigationSidebar);