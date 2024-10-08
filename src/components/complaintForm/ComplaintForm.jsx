import { http, SERVER_URL } from '../../helpers/http';
import './complaintForm.css'
import React, { useContext, useState } from 'react'
import { SiteContext } from '../../context/SiteContext';
import newComplaintImage from '../complaintForm/launch_complaint.png'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ComplaintForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState("");
    const SiteCTX = useContext(SiteContext);

    const handleSubmit = async () => {
        if (name != '' && contact != '' && department != '') {
            SiteCTX.setIsLoading(true);
            await http.post(`${SERVER_URL}/api/addcomplain`, {
                Name: name,
                Email: email,
                Department: department,
                Contact: contact,
                Complainmessage: message
            }).then((res) => {
                // need to 
                console.log("submition res", res.data)
                console.log("submition res1", res.data.complain.Requestid)

                // alert(`Dear ${name} your's Complaint ID is ${res.data.complain.Requestid}`);

                // toast(`Application is submitted successfully `);

            }).catch(e => console.log(e.message)).finally(() => SiteCTX.setIsLoading(false))
        } else {
            alert("Field should not be empty !");
        }
        setName("");
        setContact("");
        setMessage("");
        setEmail("");
        setDepartment("")

    }



    return (
        <div className='container '>
            <div className="row my-5">
                <div className="col-md-6  text-left  ps-4">
                    <div className="w-75">
                        <img src={newComplaintImage} alt="complaintfomr image" />
                        <h3 class="font-bolder p-2">New Complaint</h3>
                        <h5 class="text-grey mb-2 p-2 ">Please provide your contact <br /> details and complaint message</h5>
                        <Link class="btn btn-success w-75 shadow rounded mx-auto" to="/trackcomplain">Track Complaint </Link>
                    </div>
                </div>
                <div className="col-md-6 mt-3 mt-sm-3 mt-xs-3 mt-md-0 ">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className=" card shadow rounded mx-auto">
                            {/* <h4 className=' text-dark-d4 font-bold text-center card-header p-3 text-black-75 m-0 mb-3 '>ENTER YOUR INFORMATION BELOW</h4> */}
                            <h5 class="text-dark-d4 font-bold text-center card-header p-3">ENTER YOUR INFORMATION BELOW</h5>
                            <div className="card-body p-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        className="form-control p-2"
                                        autoComplete="off"
                                        aria-describedby="emailHelp"
                                        placeholder='Enter Name '
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={contact}
                                        autoComplete="off"
                                        onChange={(e) => { setContact(e.target.value) }}
                                        className="form-control p-2"
                                        placeholder='Contact Number '
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        value={email}
                                        autoComplete="off"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="form-control p-2"
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <select onChange={(e) => { setDepartment(e.target.value) }} className="p-2 form-select mb-3" aria-label="Default select example">
                                    <option defaultValue=''>Select Department</option>
                                    <option value="Administration">Administration</option>
                                    <option value="Admition">Admission</option>
                                    <option value="TeachingStaff">Teaching Staff</option>
                                    <option value="SupportingStaff">Supporting Staff</option>
                                </select>
                                <div className=" mb-3 h-50 form-outline">
                                    <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className="form-control" id="textAreaExample1" placeholder='Complain / Suggestion ' rows="4"></textarea>
                                </div>
                                <div className="text-center cf">
                                    <button onClick={handleSubmit} className=" p-2 text-center btn btn-color btn-sm text-white w-50">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ComplaintForm