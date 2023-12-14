import { useState, useRef, useEffect } from "react";
import axios from "axios"
const ChatBox = ({ messages, id, fetchmessage, user }) => {

  const [fromadmin, setFromadmin] = useState("")
  const [role, setRole] = useState("")
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendmessage();
    }
  };
  const sendmessage = () => {

    // setRole(user.role)

    console.log(role)

    const sender = (user.role === 'admin') ? 'fromadmin' : 'fromcomplainer';

    axios
      .post(`http://localhost:3003/api/messages`, {
        [sender]: fromadmin,
        complainid: id,
      })
      .then((res) => {
        fetchmessage();
        setFromadmin('');
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="container">
      <div class="accordion w-75 mx-auto shadow rounded" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Chat box | Message
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className=" mx-auto card">
                <div ref={chatBoxRef} className="chat-box">
                  {messages.length === 0 ? (
                    <div className="start-chatting-message">Start chatting...</div>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg._id} className={`message ${msg.fromadmin ? 'admin' : 'user'}`}>
                        {msg.fromadmin}
                        {msg.fromcomplainer}
                      </div>
                    ))
                  )}
                </div>
                <div className="d-flex">
                  <input onKeyDown={handleKeyDown} value={fromadmin} onChange={(e) => { setFromadmin(e.target.value) }} className="sendmessage m-2" placeholder="type your message" type="text" />
                  <button onClick={sendmessage} className="btn btn-warning sendbtn m-2">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default ChatBox