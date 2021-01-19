import React from "react";
import { Transactions } from "./calls/getTransaction";
import { NewTransactionPostRequest } from "./components/NewTransaction";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchToggleOn: false,
      postToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      fetchToggleOn: !state.fetchToggleOn,
    }));
  }
  handleClickPost() {
    this.setState((state) => ({
      postToggleOn: !state.postToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Fetch/Hide Transactions</button>
        <button onClick={this.handleClickPost}>Post/Hide sample payload</button>

        {this.state.fetchToggleOn && <Transactions />}
        {this.state.postToggleOn && <NewTransactionPostRequest />}
      </div>
    );
  }
}
