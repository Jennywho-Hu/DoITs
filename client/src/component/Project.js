import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/projects/")
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  getAlert(e) {
    var popLayer = document.querySelector(".popLayer");
    var modal = document.querySelector(".modal");
    popLayer.style.display = "block";
    modal.style.display = "block";
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <div className="section">
          Project
          <button
            className="js-open btn-open is-active"
            id="addProject"
            onClick={this.getAlert}
          >
            ADD+
          </button>
        </div>
        <div className="projectList">
          {this.state.projects.map(function(projects) {
            return (
              <span key={projects._id} value={projects}>
                {projects.projectname}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
