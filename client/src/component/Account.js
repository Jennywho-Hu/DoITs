import React, { Component } from "react";
import "../App.css";
import avatarimg from "../images/avatar.png";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Jenny"
    };
  }
  render() {
    return (
      <div className="item-0">
        <p className="logo">ToITs</p>
        <div className="container" id="userInfor">
          <img src={avatarimg} className="avatar" alt="avatar" />
          <p className="userName">{this.state.username}</p>
        </div>
      </div>
    );
  }
}
