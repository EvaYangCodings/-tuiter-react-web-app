import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
  <div class="row">
    <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1">
<!--    <h3>NavigationSidebar</h3>-->
        ${NavigationSidebar()}
   </div>
    <div class="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11">
<!--    <h3>ExploreComponent</h3>-->
   </div>
    <div class="col-4 d-none d-lg-block">
<!--    <h3>WhoToFollowList </h3>-->
        ${WhoToFollowList()}
   </div>
  </div>
  <br>
  <br>
  <br>
   `);
}
$(exploreComponent);