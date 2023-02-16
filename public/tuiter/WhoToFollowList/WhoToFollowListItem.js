const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-1 ps-0  align-self-center">
                    <img src="${who.avatarIcon}" class="rounded-circle" style="height: 50px">
                </div>
                <div class="col-xl-8 col-lg-6 align-self-center">
                    <div class="fw-bolder ps-4 pe-1">${who.userName}
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="text-secondary ps-4">${who.handle}</div>
                </div>
                <div class="col-2 align-self-center">
                    <a href="#">
                        <button class="btn btn-primary rounded-pill">
                        Follow
                        </button>
                    </a>
                </div>
            </div>
        </div>
    `);

}

export default WhoToFollowListItem;