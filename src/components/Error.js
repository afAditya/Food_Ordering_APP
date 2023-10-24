import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>OOPS !</h1>
      <h2>This is Error Page </h2>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;
