import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateField} from "../reducers/profile-reducer";

const EditProfile = () => {
    const user = useSelector(state => state.profile)
    const dispatch = useDispatch();
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
    const handleChange = (field) => (e) => {
        if (field === "name") {
            const nameParts = e.target.value.trim().split(" ");
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "";
            dispatch(updateField({ field: "firstName", value: firstName }));
            dispatch(updateField({ field: "lastName", value: lastName }));
        } else {
            dispatch(updateField({ field, value: e.target.value }));
        }
    };
    return(
        <div>
            <div className="row align-bottom">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"/>
                    </Link>
                </div>
                <div className="col-9 fs-5 fw-bold">Edit profile</div>
                <div className="col-2">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-dark rounded-pill fw-bold">Save</button>
                    </Link>
                </div>
            </div>
            <div className="position-relative mt-2 wd-edit-profile-banner">
                <img alt="" src="../../images/banner-web-development.png" className="w-100"/>
                <img alt="" className="position-absolute w-25 rounded-circle wd-profile-photo"
                     src="../../images/react.jpeg"
                />
            </div>
            <div className="wd-edit-profile-border wd-input-container">
                <label className="text-secondary">Name</label>
                <textarea
                    className="border-0 ps-0"
                    rows="1"
                    value={`${user.firstName}${user.lastName ? " " : ""}${user.lastName}`}
                    onChange={handleChange("name")}
                />
            </div>
            <div className="wd-edit-profile-border wd-input-container">
                <label className="text-secondary">Bio</label>
                <textarea className="border-0 ps-0"
                          value={user.bio}
                          onChange={handleChange("bio")}>
                </textarea>
            </div>
            <div className="wd-edit-profile-border wd-input-container">
                <label className="text-secondary">Location</label>
                <textarea
                    className="border-0 ps-0"
                    rows="1"
                    value={user.location}
                    onChange={handleChange("location")}
                />
            </div>
            <div className="wd-edit-profile-border wd-input-container">
                <label className="text-secondary">Website</label>
                <textarea
                    className="border-0 ps-0"
                    rows="1"
                    value={user.website}
                    onChange={handleChange("website")}
                />
            </div>
            <div className="wd-edit-profile-border wd-input-container">
                <label className="text-secondary">Birth date.
                    <Link>Edit</Link>
                </label>
                <textarea
                    className="border-0 ps-0"
                    rows="1"
                    value={formatDate(user.dateOfBirth)}
                />
            </div>
        </div>
    )
}

export default EditProfile;