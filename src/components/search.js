import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { change1 } from './slice'

function Search(){

    const count = useSelector((state) => state.counter1)
    const dispatch = useDispatch()
  

    function change2(val){
        dispatch(change1(val.target.value))
    }

    return(
        <>
        <div className="p-2 input-group input-group-lg">
        <input type="text" value={count.val2} className="w-100 form-control" onChange={change2} placeholder="Search"></input>
        </div>
        </>
    );
}
export default Search;