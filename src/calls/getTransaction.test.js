import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Transaction from "../calls/getTransaction"

test("transactions are fetched", () => {
  render(<App />);
  
  fireEvent.click(screen.getByText('Fetch/Hide Transactions'))

  let transactions = screen.findAllByText('Transaction for Jane Citizen');

  expect(transactions).toBeInTheDocument;
});

// test("transactions are updated with proper values", () => {
    
//   const MockTransactionInfo = {
//       id: "12345678-12345-1234-123c-abc123de7",
//       fromAccount: "987-654",
//       toAccount: "123-456",
//       description: "mock description",
//       amount: "99999.99",
//       date: "2020-10-29T01:11:11:11.001Z",
//       ownerid: "55555555-12345-1234-123c-555555555",
//       ownername: "Johnny test appleseed"
//   }

//   const TestTransaction = () => {
//     return(

//       <Transaction
//       id={MockTransactionInfo.id}
//       fromAccount={MockTransactionInfo.fromAccount}
//       toAccount={MockTransactionInfo.toAccount}
//       description={MockTransactionInfo.description}
//       amount={MockTransactionInfo.amount}
//       date={MockTransactionInfo.date}
//       ownerid={MockTransactionInfo.ownerid}
//       ownername={MockTransactionInfo.ownername}
// />
//       )
// } 
  
  // render( // WORK IN PROGRESS
  //   <TestTransaction/>);
    
  //   fireEvent.click(screen.getByText('Fetch/Hide Transactions'))
  
  //   let transactions = screen.findAllByText('Transaction for Johnny test appleseed');

  //   expect(transactions).toBeInTheDocument;
  // }
  
  // )
  // );
