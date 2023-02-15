import NavigationSidebar from "../NavigationSidebar/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
  <div class="row">
    <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1 bg-warning">
<!--    <h3>NavigationSidebar</h3>-->
        ${NavigationSidebar()}
   </div>
    <div class="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11 bg-primary">
<!--    <h3>ExploreComponent</h3>-->
${NavigationSidebar()}
   </div>
    <div class="col-4 d-none d-lg-block bg-danger">
<!--    <h3>WhoToFollowList </h3>-->
${NavigationSidebar()}
   </div>
  </div>
   `);
}
$(exploreComponent);