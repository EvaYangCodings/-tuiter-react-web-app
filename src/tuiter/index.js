import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer"
import {Provider} from "react-redux";

const store = configureStore({reducer: {who:whoReducer}})
function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2 mb-2">
                <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11"
                     style={{"position": "relative"}}>
                    <ExploreComponent/>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
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