import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "../HomeScreen/HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js"


function homeComponent() {
    $('#wd-home').append(`
        <div class="row mt-1">
            <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1">${NavigationSidebar()}</div>
            <div class="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11" style="padding:15px; border: 1px solid lightgrey">
                ${HomeComponent()}
            </div>
            <div class="col-4 d-none d-lg-block">${PostSummaryList()}</div>
        </div>
    `);
}
$(homeComponent);