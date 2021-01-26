import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const returnHome = () => {
    localStorage.clear();
    history.push("/");
    //window.location.reload();
  };

  const history = useHistory();
  return <div>{returnHome()}</div>;
};

export default Logout;
