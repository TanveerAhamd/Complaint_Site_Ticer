import React, { useState } from 'react';
import './viewDetail.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const ViewDetail = ({ complain, user }) => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const updateStatus = () => {
    setLoading(true);
    axios
      .put(`https://server-delta-mocha.vercel.app/api/updatecomplain/${complain._id}`, {
        Status: status,
      })
      .then((res) => {
        toast("Status updated Successfully !", {
          autoClose: 1000,
        });
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      })
      .finally(() => {
        setLoading(false);
      });

    navigate("/dashboard")

  };

  console.log("user is ", user)
  return (
    <div className="viewDetailWrapaper mt-3">
      <div className="container">
        <div className=" mx-auto shadow rounded">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center p-2 text-black-70 m-0">Complaint Detail view</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 p-3">
                  <div className="p-1 text-left fw-semibold">Complaint ID :</div>
                  <div className="p-1 text-left fw-semibold">Date :</div>
                  <div className="p-1 text-left fw-semibold">Name :</div>
                  <div className="p-1 text-left fw-semibold">Department :</div>
                  <div className="p-1 text-left fw-semibold">Message :</div>
                  <div className="p-1 text-left fw-semibold">Status :</div>
                </div>
                <div className="col-md-9 p-3">
                  <div className="p-1 text-left fw-semibold">{complain.Requestid}</div>
                  <div className="p-1 text-left">
                    {complain.createdAt}
                  </div>
                  <div className="p-1 text-left">{complain.Name}</div>
                  <div className="p-1 text-left">{complain.Department}</div>
                  <div className="p-1 text-left">{complain.Complainmessage}</div>
                  <div className="p-1 text-left">
                    {user !== null && user?.role === 'admin' ? (
                      <>
                        <select
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                          className="selected form-select-sm"
                        >
                          <option value="">Change Status</option>
                          <option value="ACTIVE">ACTIVE</option>
                          <option value="RESOLVED">RESOLVED</option>
                        </select>
                        <button
                          className="ms-2 btn btn-success"
                          onClick={updateStatus}
                          value={loading}
                        >
                          {loading ? 'Updating...' : 'Update'}
                        </button>
                      </>
                    ) : (

                      complain.Status === "ACTIVE" ? (
                        <>

                          <mark>ACTIVE</mark>

                        </>
                      ) : (
                        <>

                          <span className='btn btn-outline-success  rounded px-2'>RESOLVED</span>

                        </>
                      )


                    )}
                  </div>

                  {/* <div className="text-center">
                    {(user =! null && user?.role === "admin") ? (
                  null
                    ):(
                     <button
                        className="btn btn-success ms-2"
                        onClick={updateStatus}
                        disabled={loading}
                      >
                        {loading ? 'Updating...' : 'Change Status'}
                      </button>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
