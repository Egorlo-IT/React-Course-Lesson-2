import RobotPicture from "../../image/robot.gif";
import "./TalkingRobot.css";

const TalkingRobot = (props) => {
  console.log("props.chat", props.chat);
  // if (props.chat.length > 0) {
  //   console.log("props.chat", props.chat);
  // }

  return (
    <div className="talkingRobot">
      <img className="robot" src={RobotPicture} alt="robot" />
      <div className="wrap">
        <p className="answer">
          Hey bro, I am robot Max! Ask me any question and I will answer! :)
        </p>

        {props.chat.length > 0 &&
          props.chat.map((item) => (
            <p className="answer" key={item.id}>
              {item.author === "Robot" ? (
                <span className="mess-robot">
                  {item.author}: <i>{item.text}</i>
                </span>
              ) : (
                <span className="mess-guest">
                  {item.author}: <i>{item.text}</i>
                </span>
              )}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TalkingRobot;
