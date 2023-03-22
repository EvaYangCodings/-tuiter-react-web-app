import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
import "./index.css"
const ProfileComponent = () => {
    const formatDate = (dateString) => {
        if (dateString.includes('/')) {
            const parts = dateString.split('/');
            if (parts.length === 3) {
                // Format: "7/7/1968"
                const [month, day, year] = parts;
                const date = new Date(year, month - 1, day);
                return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
            } else if (parts.length === 2) {
                // Format: "4/2009"
                const [month, year] = parts;
                const date = new Date(year, month - 1);
                return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
            }
        }
        return dateString; // Fallback to return the input string if not formatted as expected
    };


    const user = useSelector(state => state.profile);
    return(
        <>

            <div className="row">
                <div className="col-1 ms-3">
                    <Link to="/tuiter/home">
                        <i className="bi bi-arrow-left"/>
                    </Link>
                </div>
                <div className="col-10">
                    <div><h4>{user.firstName} {user.lastName}</h4></div>
                    <div className="text-secondary">{user.tuitsCount}Tuits</div>
                </div>
            </div>
            {/*<div>*/}
                {/*<img alt="" src="../../../public/images/banner.jpeg"/>*/}
            {/*</div>*/}
            <div className="position-relative mb-2">
                <img alt="" src="../../images/banner-web-development.png" className="w-100"/>
                <img alt="" className="position-absolute w-25 rounded-circle wd-profile-photo"
                     src="../../images/react.jpeg"
                />
                <button className="float-end mt-3 rounded-pill btn btn-light"><b>Edit profile</b></button>
            </div>

            <div className="wd-user-name"><h4>{user.firstName}{' '}{user.lastName}</h4></div>
            <div>{user.handle}</div>
            <div className="mt-3">{user.bio}</div>
            <div className="row text-secondary mt-1">
                <div className="col-3 pe-0 me-0">
                    <i className="bi bi-geo-alt me-1"/>{user.location}
                </div>
                <div className="col-2 ps-0 ms-0">
                    <i className="bi bi-balloon me-1"/>{formatDate(user.dateOfBirth)}
                </div>
                <div className="col-3 ps-0 ms-0">
                    <i className="bi bi-calendar-check me-1"/>Joined{' '}{formatDate(user.dateJoined)}
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-3"><span className="fw-bold">{user.followingCount}</span>{' '}Following</div>
                <div className="col-3 ms-0 ps-0"><span className="fw-bold">{user.followersCount}</span>{' '}Followers</div>
            </div>
        </>


    )
}

export default ProfileComponent;