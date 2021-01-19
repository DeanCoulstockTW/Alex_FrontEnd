import "../App.css";
import React from "react";
import SendCreateCall from "../calls/post";

class NewTransactionPostRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: null,
      statusId: null,
      // hardcode values to POST for now, even though the state is being updated with input (due to some issues).
      id: "6976fe63-c665-445b-835c-42dabe9fa3b7",
      fromAccount: "123-456",
      toAccount: "123-456",
      description: "Sample transaction description",
      amount: "123456.78",
      date: "2016-08-29T09:12:33.001Z",
      ownerId: "78cf59a3-3e43-4897-9bab-bfdf30b41e84",
      ownerName: "John Smith",
      postToggleOn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //maybe do stuff here in the near future
  }

  handleClickPost() {
    this.setState((state) => ({ postToggleOn: !state.postToggleOn }));
  }

  render() {
    const payload = {
      id: this.state.id,
      fromAccount: this.state.fromAccount,
      toAccount: this.state.toAccount,
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
      owner: {
        id: this.state.ownerId,
        name: this.state.ownerName,
      },
    };
    return (
      <>
        {/* Needs rework into its own component... come back later */}
        <div className="inputs-container">
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">id: </div>
            <textarea
              value={this.state.id}
              onChange={this.handleChange}
              name="id"
            />
            <div className="inputs">fromAccount:</div>
            <textarea
              value={this.state.fromAccount}
              onChange={this.handleChange}
              name="fromAccount"
            />
            <div className="inputs"> toAccount:</div>
            <textarea
              value={this.state.toAccount}
              onChange={this.handleChange}
              name="toAccount"
            />
            <div className="inputs"> description:</div>
            <textarea
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
            <div className="inputs">amount:</div>
            <textarea
              value={this.state.amount}
              onChange={this.handleChange}
              name="amount"
            />
            <div className="inputs">date:</div>{" "}
            <textarea
              value={this.state.date}
              onChange={this.handleChange}
              name="date"
            />
            <div className="inputs">ownerId:</div>
            <textarea
              value={this.state.ownerId}
              onChange={this.handleChange}
              name="ownerId"
            />
            <div className="inputs">ownerName:</div>
            <textarea
              value={this.state.ownerName}
              onChange={this.handleChange}
              name="ownerName"
            />
            <br />
            <div className="submitButtonContainer">
              <input className="submitButton" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <SendCreateCall payload={payload} />
      </>
    );
  }
}

export { NewTransactionPostRequest };
