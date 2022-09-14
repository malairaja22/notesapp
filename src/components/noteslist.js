import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { remove1 } from './slice'
import Textbox from "./textbox";



function Noteslist() {
    const count = useSelector((state) => state.counter1)
    const dispatch = useDispatch()

    function setStatus1(val) {
        dispatch(remove1(val.target.value));
    }

    return (
        <>
            <div className="container">
                
                <ul className="row">
                    {
                        count.arr1.map((val, i) =>
                            <div className="col-12 col-md-6 p-2 col-lg-4">
                                <div key={i} className="card  p-2" >
                                    <div className="card-body row">
                                        <div className="w-100">
                                            <li className="p-2"><div className="textview1">{val.text1} </div></li>
                                        </div>
                                        <div className="row">
                                            <div className="w-75 p-2">
                                                <p>{val.date}/{val.month}/{val.year}</p>
                                            </div>
                                            <div className="w-25 p-2 d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button className="btn btn-danger" value={i} onClick={setStatus1} >X</button>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                        )
                    }
                    <Textbox />
                
                </ul>
                
            </div>
        </>
    );
}

export default Noteslist;