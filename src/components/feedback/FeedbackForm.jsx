import { http } from '../../helpers/http';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState("");

    const handleSubmit = async () => {
        if (name != '' && contact != '' && message != '') {
            console.log(name,contact,message,email)
            // https://server-delta-mocha.vercel.app
            await http.post("https://server-delta-mocha.vercel.app/api/addfeedback", {
                Name: name,
                Email: email,
                // Department: department,
                Contact: contact,
                FeedbackMessage: message
            }).then((res) => {
                // need to
                console.log("submition res", res.data.status)
                if(res.data.status == 'success'){
                    console.log(res.data.message)
                    toast(`Dear ${name}`+ res.data.message);
                }

            }).catch(e => console.log(e.message))
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
            <div className=" w-75 mx-auto my-2">
                <div className="text-center">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/satisfied.png" alt="satisfied" />
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className=" card shadow rounded mx-auto">
                            {/* <h4 className=' text-dark-d4 font-bold text-center card-header p-3 text-black-75 m-0 mb-3 '>ENTER YOUR INFORMATION BELOW</h4> */}
                            <h5 class="text-dark-d4 font-bold text-center card-header ">Feedback Form</h5>
                            <div className="card-body p-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        className="form-control p-2"
                                        autocomplete="off"
                                        aria-describedby="emailHelp"
                                        placeholder='Your Name '
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={contact}
                                        autocomplete="off"
                                        onChange={(e) => { setContact(e.target.value) }}
                                        className="form-control p-2"
                                        placeholder='Contact Number'
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        value={email}
                                        autocomplete="off"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="form-control p-2"
                                        placeholder='Enter Email'
                                    />
                                </div>
                                {/* <select onChange={(e) => { setDepartment(e.target.value) }} className="p-2 form-select mb-3" aria-label="Default select example">
                                    <option defaultValue=''>Select Department</option>
                                    <option value="Administration">Administration</option>
                                    <option value="Admition">Admission</option>
                                    <option value="TeachingStaff">Teaching Staff</option>
                                    <option value="SupportingStaff">Supporting Staff</option>
                                </select> */}
                                {/* <div className="input-group mb-3">
                        <input type="file" autocomplete="off" className="form-control p-2" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    </div> */}
                                <div className=" mb-3 h-50 form-outline">
                                    <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className="form-control" id="textAreaExample1" placeholder='Feedback / Suggestion ' rows="4"></textarea>
                                </div>
                                <div className="text-center cf">
                                    <button onClick={handleSubmit} className=" p-2 text-center btn btn-color btn-sm text-white w-50 ">
                                        Submit Feedback
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

export default FeedbackForm