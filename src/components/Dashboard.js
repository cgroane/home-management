import React, { Component } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="backgroundDash">
        <div class="whiteDash">
          <div class="border">
            <h2>HOUSER Dashboard</h2>
            <Link to="./Homepage.js" class="logoutbutton">
              {' '}
              Logout
            </Link>
          </div>
          <Link to="/W1" class="dashbutton">
            Add New Property{' '}
          </Link>
          <div class="wrap">
            <h3 class="rent">
              List properties with "desired rent" greater than: $
            </h3>
            <input
              class="input"
              onChange={e => this.stateUpdate(e.target.value)}
            />

            <div class="buttons">
              <Link to="/Dashboard" class="homebutton">
                Filter{' '}
              </Link>
              <Link to="/Dashboard" class="homebutton" id="hp2">
                Reset{' '}
              </Link>
            </div>
          </div>
          <div class="line" />
          <div>
            <h3>Home Listings</h3>{' '}
          </div>
        </div>
      </div>
    );
  }
}
