import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {a} from "react-router-dom";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    library.add(fab)
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group">
                <Link to="#" className="list-group-item d-none d-xl-inline-block" aria-hidden="true">
                    <FontAwesomeIcon icon={['fab', 'twitter']} color="#0d6efd"/>
                </Link>


                <Link to="/tuiter/home" className={`list-group-item

                    ${active === 'home'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faHome}/>
                        <span className="nav-a-text ms-2 d-none d-xl-inline-block">Home</span>
                    </div>
                </Link>

                <Link to="/tuiter/explore" className={`list-group-item

                    ${active === 'explore'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faHashtag}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Explore</span>
                    </div>
                </Link>

                <Link to="/" className={`list-group-item
                    ${active === 'labs'?'active':''}`}>

                    <div>
                        <FontAwesomeIcon icon={faBell}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Labs</span>
                    </div>
                </Link>
                <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Messages</span>
                    </div>
                </Link>
                <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faBookmark}/>
                        <span className="nav-a-text ms-3 d-none d-xl-inline-block">Bookmarks</span>
                    </div>
                </Link>
                <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faList}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Lists</span>
                    </div>
                </Link>

                <Link to="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faUser}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Profile</span>
                    </div>
                </Link>
                <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">More</span>
                    </div>
                </Link>

                <button className="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
        </div>

    );
};

export default NavigationSidebar;