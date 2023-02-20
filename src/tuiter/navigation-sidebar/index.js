import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    library.add(fab)
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item">
                <FontAwesomeIcon icon={['fab', 'twitter']} color="#0d6efd"/>
            </Link>

            <Link to="#" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faHome}/>
                    <span className="nav-link-text ms-2">Home</span>
                </div>
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faHashtag}/>
                    <span className="nav-link-text ms-3">Explore</span>
                </div>
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faBell}/>
                    <span className="nav-link-text ms-3">Notifications</span>
                </div>
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span className="nav-link-text ms-3">Messages</span>
                </div>
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faBookmark}/>
                    <span className="nav-link-text ms-4">Bookmarks</span>
                </div>
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faList}/>
                    <span className="nav-link-text ms-3">Lists</span>
                </div>
            </Link>

            <Link to="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                    <span className="nav-link-text ms-3">Profile</span>
                </div>
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div>
                    <FontAwesomeIcon icon={faEllipsisH}/>
                    <span className="nav-link-text ms-3">More</span>
                </div>
            </Link>

        </div>
    );
};

export default NavigationSidebar;