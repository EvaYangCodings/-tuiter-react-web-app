import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
import "./index.css"
const ProfileComponent = () => {
    const user = useSelector(state => state.profile);
    return(
        <>

            <div className="row">
                <div className="col-2">
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
                <img className="position-absolute w-25 rounded-circle wd-profile-photo"
                     src="../../images/react.jpeg"
                />
                <button className="float-end mt-3 rounded-pill btn btn-light"><b>Edit profile</b></button>
            </div>

            <div className="wd-user-name"><h4>{user.firstName}{' '}{user.lastName}</h4></div>
            <div>{user.handle}</div>
            <div className="mt-3">{user.bio}</div>
            <div className="text-primary fs-2">
                <i className="bi bi-card-image me-3"/>
                <i className="bi bi-filetype-gif me-3"/>
                <i className="bi bi-bar-chart me-3"/>
                <i className="bi bi-emoji-smile me-3"/>
                <i className="bi bi-geo-alt"/>
            </div>
        </>


    )
}

export default ProfileComponent;