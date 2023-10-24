import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>This is about </h1>
      <User name={"aditya singh func"} />
      <UserClass name={"aditya singh class"} />
    </div>
  );
};

export default About;
