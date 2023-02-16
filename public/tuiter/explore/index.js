import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-1">
            <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1">${NavigationSidebar()}</div>
            <div class="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11">${ExploreComponent()}</div>
            <div class="col-4 d-none d-lg-block">${WhoToFollowList()}</div>
        </div>
    `);
}
$(exploreComponent);