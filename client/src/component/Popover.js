import React, { Component } from "react";
import "../App.css";
import axios from "axios";

export default class Popover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectname: ""
    };

    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    var popLayer = document.querySelector(".popLayer");
    var modal = document.querySelector(".modal");
    popLayer.style.display = "none";
    modal.style.display = "none";
  }

  handleSubmit(e) {
    var popLayer = document.querySelector(".popLayer");
    var modal = document.querySelector(".modal");
    popLayer.style.display = "none";
    modal.style.display = "none";

    e.preventDefault();

    const project = {
      projectname: this.state.projectname
    };

    axios
      .post("http://localhost:5000/projects/add", project)
      .then(res => console.log(res.data));
  }

  onChangeProjectName(e) {
    this.setState({
      projectname: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="modal">
          <h1>Add new Task</h1>
          <form>
            {" "}
            <input
              type="text"
              placeholder="Please enter the project name"
              id="projectInput"
              onChange={this.onChangeProjectName}
              value={this.state.projectname}
            />
            <button
              className="cancel"
              type="button"
              onClick={() => this.handleCancel()}
            >
              Cancel
            </button>
            <button
              className="confirm"
              type="button"
              onClick={e => this.handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="popLayer"></div>
      </div>
    );
  }
}
