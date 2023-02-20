import React from "react";
const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon:'nasa.jpeg'}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row mb-2">
                <div className="col-2 d-flex align-items-center">
                    <img className="rounded-circle" height={48} src={`../../images/${who.avatarIcon}`}/>
                </div>
                <div className="col-7 align-items-center">
                    <div className="fw-bold">{who.userName}</div>
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>

    );
};

export default WhoToFollowListItem;