import { useEffect, useRef, useState } from "react";
import TalkingRobot from "../talking-robot/TalkingRobot";
import "./Main.css";

const Main = (props) => {
  const elInputName = useRef(null);
  const elInputMessage = useRef(null);
  const elForma = useRef(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  let chat = props.messageList;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      elInputName.current.value.trim() !== "" &&
      elInputMessage.current.value.trim()
    ) {
      setName(elInputName.current.value);
      setMessage(elInputMessage.current.value);
    }
    event.target.reset();
  };

  useEffect(() => {
    if (name.trim() !== "" && message.trim()) {
      setName(elInputName.current.value);
      setMessage(elInputMessage.current.value);
      console.log("name:", name);
      console.log("message:", message);
      chat.push({
        id: props.messageList.length + 1,
        author: name,
        text: message,
      });
      props.setMessageList(chat);

      elInputName.current.focus();

      chat.push({
        id: props.messageList.length + 1,
        author: "Robot",
        text: `Привет, ${name}!`,
      });

      props.setMessageList(chat);
      elInputName.current.focus();
      console.log(chat);
    }
  }, [name, message, props, chat]);

  return (
    <div className="main">
      <div className="container">
        <h2 className="text">You can ask the robot Max a&nbsp;question:</h2>
        <form ref={elForma} className="form" onSubmit={handleSubmit}>
          <input
            ref={elInputName}
            type="text"
            name="name"
            placeholder="Type your name"
            className="question"
          />
          <input
            ref={elInputMessage}
            type="text"
            name="message"
            placeholder="Type your message"
            className="question"
          />
          <button type="submit" className="btn-submit">
            SEND
          </button>
        </form>
        <TalkingRobot chat={chat} />
      </div>
    </div>
  );
};

export default Main;
