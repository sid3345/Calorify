/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class CalculateCalorie extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeBodyFat = this.onChangeBodyFat.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeActivityLevel = this.onChangeActivityLevel.bind(this);

    this.state = {
      username: "",
      bodyFat: 0,
      weight: 0,
      activityLevel: 0,
      users: [],
      BMR: 0,
      TDEE: 0
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeBodyFat(e) {
    this.setState({
      bodyFat: e.target.value,
      BMR: (21.6 * (this.state.weight - ((e.target.value /100) * this.state.weight)) + 370).toFixed(),
    });
    this.setState({
      TDEE: (this.state.BMR * this.state.activityLevel).toFixed()
    });
  }

    onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
      BMR: (21.6 * (e.target.value - ((this.state.bodyFat / 100) * e.target.value)) + 370).toFixed(),
    });
    this.setState({
      TDEE: (this.state.BMR * this.state.activityLevel).toFixed()
    });
  }

  onChangeActivityLevel(e) {
    this.setState({
      activityLevel: e.target.value,
      TDEE: (this.state.BMR * e.target.value).toFixed()
    });
  }

  render() {

    return (
      <>
      <div class="container">
        <div class="card border-0 shadow my-4">
          <div class="card-body p-3"></div>
          <div>
            <h3 style={{ textAlign: "center" }}>Calculate Body Metrics </h3>
            <form onSubmit={this.onSubmit}>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  marginRight: "20px",
                }}
              >
                <label>Username: </label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                >
                  {this.state.users.map(function (user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <label>Body Fat (%): </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.bodyFat}
                  onChange={this.onChangeBodyFat}
                />
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <label>Weight (KG): </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.weight}
                  onChange={this.onChangeWeight}
                />
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <label>Activity Level: </label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.activityLevel}
                  onChange={this.onChangeActivityLevel}
                >
                  <option value= {0}>0: No Activity </option>
                  <option value= {1.2}>1.2: Sedentry</option>
                  <option value= {1.375}>1.375: Lightly Active</option>
                  <option value= {1.55}>1.55: Moderately Active</option>
                  <option value= {1.725}>1.725: Very Active</option>
                  <option value= {1.9}>1.9: Extra Active</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card border-0 shadow my-4">
          <div class="card-body p-3">
            <h5 style={{ textAlign: "center" }}>BMR <br/>(Basal Matabolic Rate) <h1>{ this.state.BMR}</h1></h5>
            <br/>
            <h5 style={{ textAlign: "center" }}>TDEE <br/>(Total Daily Energy Expenditure) <h1>{this.state.TDEE}</h1></h5>
          </div>
        </div>
      </div>
    </>
    );
  }
}
