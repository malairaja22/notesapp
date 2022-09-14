import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { change,save2 } from './slice'

 

function Textbox(){

const count = useSelector((state) => state.counter1)
  const dispatch = useDispatch()
    
    function save1(val){
        val.preventDefault();
        dispatch(save2());   
    }
    function change1(val){
      
      dispatch(change(val.target.value));

      
    }
    return( 
        <div className="col-12 col-md-6 p-2 col-lg-4">
        <div className="p-2 card">
            <form className="card-body row ">
            <textarea  className="form-control" onChange={change1} value={count.val1} maxLength="300"
             placeholder="Type to add a new note..." required></textarea>
            <div className="row">
                <div className="w-50 p-2">
                <p>{count.count1} Remaining</p>
                </div>
                <div className="w-50 p-2 d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2 sm" type="submit" onClick={save1}>Save</button>
                </div>
            </div>
            </form>
        </div>    </div>    
    );
}

export default Textbox;