import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {faSearch, faGear} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
const ExploreComponent = () => {
    return(
        <div>
            <div className="row pt-1">
                <div className="col-11 position-relative">
                    <FontAwesomeIcon icon={faSearch} className="ms-4 position-absolute top-50 start-1 translate-middle-y wd-magnify-glass"/>
                    <input className="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
                </div>
                <div className="col-1 mt-1">
                    <FontAwesomeIcon  icon={faGear} className="wd-bottom-4 text-primary float-end fs-2 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-1 mt-2">
                <li className="nav-item">
                    <Link className="nav-link active">For You</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">News</Link>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img alt="" src="../../images/Starship.png" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </div>
    );
};
export default ExploreComponent;