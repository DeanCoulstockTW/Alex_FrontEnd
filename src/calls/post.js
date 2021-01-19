import "../App.css";
import React, { useEffect, useState } from "react";

const SendCreateCall = ({ payload }) => {
  const [createResponse, setResponse] = useState(null);
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    };
    fetch(
      "https://alex-code-test.azurewebsites.net/api/transactions",
      requestOptions
    ).then((response) => setResponse(response.status));
  }, []);
  const Realism = ({ children, waitBeforeShow = 1000 }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShow);
    }, [waitBeforeShow]);

    return isShown ? children : null;
  };

  return (
    <div className="postResponse">
      <Realism>
        <div className="responseCode">
          Your response was : {createResponse} OK
        </div>
      </Realism>
    </div>
  );
};

export default SendCreateCall;
