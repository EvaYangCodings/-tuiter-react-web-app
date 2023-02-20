import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow";

function Tuiter() {
    return (
        <div className="row mt-2 mb-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter;
// import {Link} from "react-router-dom";
// import Nav from "../nav";
// import NavigationSidebar from "./navigation-sidebar";
// import WhoToFollowListItem from "./who-to-follow/who-to-follow-list-item";
// import WhoToFollowList from "./who-to-follow";
// import PostSummaryItem from "./post-summary-list/post-summary-item";
// import PostSummaryList from "./post-summary-list";
//
// function Tuiter() {
//     return(
//         <div>
//             <Nav/>
//             <NavigationSidebar active="home"/>
//             <WhoToFollowList/>
//             <PostSummaryList/>
//             {/*<PostSummaryItem/>*/}
//             {/*<WhoToFollowListItem who={{*/}
//             {/*    userName: 'NASA', handle: 'NASA',*/}
//             {/*    avatarIcon: 'nasa.jpeg',*/}
//             {/*}}/>*/}
//             {/*<WhoToFollowListItem who={{*/}
//             {/*    userName: 'Tesla', handle: 'tesla',*/}
//             {/*    avatarIcon: 'TESLA.PNG',*/}
//             {/*}}/>*/}
//             {/*<WhoToFollowListItem who={{*/}
//             {/*    userName: 'Relativity', handle: 'Relativity',*/}
//             {/*    avatarIcon: 'relativity.jpeg',*/}
//             {/*}}/>*/}
//
//             {/*<WhoToFollowListItem/>*/}
//             {/*<h1>Tuiter</h1>*/}
//         </div>
//     );
// };
//
// export default Tuiter;