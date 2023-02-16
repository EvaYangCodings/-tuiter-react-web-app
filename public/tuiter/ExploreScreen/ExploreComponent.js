import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-1">
                <div class="col-11 position-relative">
                    <span class="fa fa-search ms-4 position-absolute top-50 start-0 translate-middle-y"></span>
                    <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
                </div>
                <div class="col-1 align-self-center">
                    <i class="fas fa-cog text-primary" style="font-size: 1.5em"></i>
                </div>
            </div>
           <ul class="nav nav-tabs mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="for_you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="../images/Starship.png" width="100%">
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
