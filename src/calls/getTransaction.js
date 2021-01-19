import React, { useState, useEffect } from "react";

const Transaction = ({
  id,
  fromAccount,
  toAccount,
  description,
  amount,
  date,
  ownerid,
  ownername,
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Transaction for {ownername}</td>
          <td>
            <p>ID:</p>
            <p>{id}</p>
          </td>
          <td>
            <p>From Account: </p>
            <p>{fromAccount}</p>
          </td>
          <td>
            <p>To Account: </p>
            <p>{toAccount}</p>
          </td>
          <td>
            <p>Description: </p>
            <p>{description}</p>
          </td>
          <td>
            <p>Amount:</p>
            <p>${amount}</p>
          </td>
          <td>
            <p>Date:</p>
            <p>{date}</p>
          </td>
          <td>
            <p>Owner Id:</p>
            <p>{ownerid}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const Transactions = () => {
  const [rawTransactions, setTotalReactPackages] = useState(Array);
  useEffect(() => {
    fetch("https://alex-code-test.azurewebsites.net/api/transactions", {
      crossDomain: true,
      method: "GET",
      headers: { accept: "application/json" },
    })
      .then((resp) => resp.json())
      .then((transactionList) => setTotalReactPackages(transactionList));
  }, []);
  return (
    <>
      <div className="transaction-container">
        {rawTransactions.map((data, key) => {
          return (
            <div className="outerContainer" key={key}>
              <Transaction
                id={data.id}
                fromAccount={data.fromAccount}
                toAccount={data.toAccount}
                description={data.description}
                amount={data.amount}
                date={data.date}
                ownerid={data.owner.id}
                ownername={data.owner.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
