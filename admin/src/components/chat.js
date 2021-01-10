import React, { useEffect, useState } from "react";
import Message from "./message";
import "../assets/chat.css";
const Chat = (props) => {
  // const [msg, setMsg] = useState("");
  // const [messages, setMessages] = useState([]);
  // let msgsample = { mine: true, mess: "Hello1", time: "12:00", Username: "aaa" };
  // let msgsample1 = {
  //   mine: false,
  //   msg: "Hello2",
  //   time: "14:00",
  //   Username: "bbb",
  // };
  // _messages.push(msgsample);
  // _messages.push(msgsample1);
  // const handleSend = (event) => {
  //   event.preventDefault();
  //   if (!msg || msg.length === 0) {
  //     return;
  //   }
  //   const d = new Date();
  //   let obj = Object.assign({}, msgsample, {
  //     msg: msg,
  //     time: d.toLocaleTimeString() + " | Today",
  //   });

  //   //setTimeout(() => {
  //   //},100)

  //   AddMessage(obj, true);
  // };

  // function AddMessage(msgObj, isMine) {
  //   // console.log(messages);
  //   // let t = [...messages];
  //   // t.push(msgObj);
  //   setMessages((messages) => [...messages, msgObj]);
  //   console.log(messages);
  //   if (isMine) {
  //     setMsg("");
  //   }
  //   //element.scrollTop = element.scrollHeight;
  // }

  // const handleMsgChange = (event) => {
  //   setMsg(event.target.value);
  // };
  return (
    <div className="mesgs">
      <div id="chat-box" className="msg_history">
        {props.message.map((item) => (
          <Message
            msg={item.message}
            // time={item.time}
            Username={item.senderUsername}
          ></Message>
        ))}
      </div>
      {/* <form onSubmit={handleSend}>
        <div className="type_msg">
          <div className="input_msg_write">
            <input
              disabled
              type="text"
              onChange={handleMsgChange}
              name="msg"
              value={msg}
              className="write_msg"
              placeholder="Type a message"
            />
            <button className="msg_send_btn" type="submit">
              <i class="far fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form> */}
    </div>
  );
};
export default Chat;
