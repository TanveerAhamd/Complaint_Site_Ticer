import { useState } from "react"
import "./Searchbox.css"
import { Link } from "react-router-dom"
import axios from "axios"
import trackingimage from '../dashboard/track_complaint.png'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Trackcomplain() {
    const navigate = useNavigate()
    const [requid, setRequid] = useState("")

    const search =  async() => {

        // need to set
        if(requid == ""){
            alert("Complain Id is required !");
        } else{
          await axios.get(`http://localhost:3003/api/applications?requestid=${requid}`)
         .then(res => {
                if (res.data.applications.length >0) {
                    navigate(`/dashboard/details/${res.data.applications[0]._id}`)
                } else{
                 toast("This Request Id do not Exist")   
                }
            })
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            search();
        }
    };

    return (
        <>
            <div className='container '>
                <div className="row my-5">
                    <div className="col-5 offset-1 text-left  ps-4">
                        <div className="w-75">
                            <img src={trackingimage} alt="complaintfomr image" className="w-75" />
                            <h3 class="font-bolder p-2">Track Complaint</h3>
                            <h5 class="text-grey mb-2 p-2 ">Please provide your Complaint Number.</h5>
                            <Link class="btn btn-success w-100 shadow rounded" to="/registerComplain">Register Complain</Link>
                        </div>
                    </div>
                    <div className="col-6 align-self-center">
                        <div className="mx-auto w-75 d-flex flex-wrap justify-content-center">
                            <h5 class="text-grey mb-2 p-2  ">Please Enter Complaint Number.</h5>
                            <input type="text " onKeyDown={handleKeyDown} onChange={(e) => { setRequid(e.target.value) }} placeholder="Enter complain-id to track Status" className="searchbox form-control " />
                            <button onClick={search} class="btn w-75 my-3 shadow rounded text-white" style={{backgroundColor : "#0f7690"}}>Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Trackcomplain