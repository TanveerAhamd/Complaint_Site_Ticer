import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ViewDetail from '../../components/viewDetail/ViewDetail';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';  // Import jwt-decode library
import './Detail.css';
import ChatBox from "./ChatBox"
import { SERVER_URL } from '../../helpers/http';


const Details = () => {
  const { id } = useParams();
  const [complain, setComplain] = useState({});
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("user");  // Variable to store decoded token
  const navigate = useNavigate();

  useEffect(() => {
    fetchuser()
  }, []);
  
  const fetchuser =async()=>{
    const token = await localStorage.getItem("userId");
    console.log('token',token)
   
  
    if (token) {
      const decodedUser = await jwtDecode(token);
      setUser(decodedUser);
      console.log(user)
    } 
  }
console.log(user)
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/getbyid/${id}`).then((res) => {
      setComplain(res.data.complain);
    });
    fetchmessage();
  }, [id, user, navigate]);

  const fetchmessage = () => {
    axios.get(`${SERVER_URL}/api/messages/${id}`).then((res) => {
      setMessages(res.data);
    });
  }
console.log(user)
  return (
    <div>
      <ViewDetail complain={complain} user={user}/>
      <ChatBox messages={messages} id={id} fetchmessage={fetchmessage} user={user}/>
    </div>
  );
};

export default Details;
