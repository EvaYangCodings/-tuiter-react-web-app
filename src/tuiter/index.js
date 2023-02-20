import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return(
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <PostSummaryList/>
            {/*<PostSummaryItem/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    userName: 'NASA', handle: 'NASA',*/}
            {/*    avatarIcon: 'nasa.jpeg',*/}
            {/*}}/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    userName: 'Tesla', handle: 'tesla',*/}
            {/*    avatarIcon: 'TESLA.PNG',*/}
            {/*}}/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    userName: 'Relativity', handle: 'Relativity',*/}
            {/*    avatarIcon: 'relativity.jpeg',*/}
            {/*}}/>*/}

            {/*<WhoToFollowListItem/>*/}
            {/*<h1>Tuiter</h1>*/}
        </div>
    );
};

export default Tuiter;