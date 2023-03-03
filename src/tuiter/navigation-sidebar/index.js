import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {a} from "react-router-dom";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    library.add(fab)
    return (
        <div className="list-group">
                <Link to="#" className="list-group-item d-none d-xl-inline-block" aria-hidden="true">
                    <FontAwesomeIcon icon={['fab', 'twitter']} color="#0d6efd"/>
                </Link>

                <Link to="#" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faHome}/>
                        <span className="nav-a-text ms-2 d-none d-xl-inline-block">Home</span>
                    </div>
                </Link>
                <Link to="#" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faHashtag}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Explore</span>
                    </div>
                </Link>
                <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                    <div>
                        <FontAwesomeIcon icon={faBell}/>
                        <span className="nav-a-text ms-2 ps-1 d-none d-xl-inline-block">Notifications</span>
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

            </div>
    );
};

export default NavigationSidebar;