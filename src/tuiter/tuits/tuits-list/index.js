import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import { findTuitsThunk } from "../../../services/tuits-thunks.js";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
      
    return(
        <ul className="list-group mb-2">
            {
                loading && 
                <li className="list-group-item">
                Loading
                </li>
            }
            
            {
                tuits.map(post =>
                    <TuitItem
                        key={post._id} tuit={post}/> )
            }
        </ul>
    );
};
export default TuitsList;
