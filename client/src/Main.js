import React, { Component } from "react";
import Account from "./component/Account";
import "./App.css";
import Project from "./component/Project";
import Popover from "./component/Popover";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Popover></Popover>
        <div className="item-0">
          <Account></Account>
          <Project></Project>
          <div>
            <div className="section">Task</div>
            <div className="task">
              <span>Rosasdet</span>
              <input type="checkbox" />
              <div className="taskProject">
                <span>in</span>
                <span className="projectColor">Development</span>
              </div>
            </div>
            <div className="task">
              <span>Rosasdet</span>
              <input type="checkbox" />
              <div className="taskProject">
                <span>in</span>
                <span className="projectColor">Development</span>
              </div>
            </div>
            <div className="task">
              <span>Rosasdet</span>
              <input type="checkbox" />
              <div className="taskProject">
                <span>in</span>
                <span className="projectColor">Development</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-1">
          <div id="search">
            <form className="searchContainer">
              <input
                type="text"
                name="fname"
                id="search-bar"
                placeholder="Search task,date or anything"
              />
            </form>
          </div>
          <div>
            <div className="subSection">
              <span className="month">January</span>
            </div>
            <button className="page">+</button>
            <button className="page">-</button>
          </div>
          <div className="taskContainer">
            <div className="everydayTask">
              <div className="timer">
                <span className="weekDay">TUESDAY</span>
                <span className="date">1/21/2019</span>
                <span className="todayTag">TODAY</span>
              </div>
              <div className="tasks">
                <div className="process"></div>
                <div className="taskContent stateFinish">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectGreen">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectBlue">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectRed">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
              </div>
            </div>
            <div className="everydayTask">
              <div className="timer">
                <span className="weekDay">TUESDAY</span>
                <span className="date">1/21/2019</span>
                <span className="todayTag">TODAY</span>
              </div>
              <div className="tasks">
                <div className="process"></div>
                <div className="taskContent stateFinish">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectGreen">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectBlue">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectRed">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
              </div>
            </div>
            <div className="everydayTask">
              <div className="timer">
                <span className="weekDay">TUESDAY</span>
                <span className="date">1/21/2019</span>
                <span className="todayTag">TODAY</span>
              </div>
              <div className="tasks">
                <div className="process"></div>
                <div className="taskContent stateFinish">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectGreen">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectBlue">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
                <div className="taskContent projectRed">
                  <p id="schedule">09:00am-01:30pm</p>
                  <p id="taskInformation">Refactoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
