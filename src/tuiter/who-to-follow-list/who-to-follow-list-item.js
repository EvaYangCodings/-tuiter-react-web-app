import React from "react";
const userToFollowListItem = (
    {
        user = {userName: 'NASA', handle: 'NASA', avatarIcon:'nasa.jpeg'}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row mb-2">
                <div className="col-2 pe-0 align-self-center">
                    <img alt="" className="rounded-circle" height={48} src={`src/images/${user.avatarIcon}`}/>
                </div>
                <div className="col-8 pe-0 align-self-center">
                    <div className="fw-bold">{user.userName}</div>
                    <div className="text-secondary">@{user.handle}</div>
                </div>
                <div className="col-2 pe-0 align-self-center">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>

    );
};

export default userToFollowListItem;