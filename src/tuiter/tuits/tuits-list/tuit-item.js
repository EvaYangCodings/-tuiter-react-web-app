import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "../tuit-stats";

const TuitItem = (
    {
        tuit = { "id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "../../../images/relativity.jpeg",
            "liked" :false,
            "replies" : 20,
            "retuits":  10,
            "likes" :  200,
            "handle" : "@SpaceX",
            "tuit" : "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1 wd-logo-react ps-1 me-4">
                        <img alt="" className="rounded-circle" src={tuit.image}/>
                    </div>
                    <div className="col-10 ps-0">
                        <div>
                            <span>
                                <span className="fw-bold me-1">{tuit.userName}</span>
                                <FontAwesomeIcon icon={faCircleCheck}/>
                                <span className="ms-1">{tuit.handle}</span>
                                <span className="text-secondary"> . {tuit.time}</span>
                            </span>
                        </div>
                        <div className="mt-2">
                            {tuit.tuit}
                        </div>
                        <TuitStats/>
                    </div>
                 </div>
            </li>
)
};
export default TuitItem;