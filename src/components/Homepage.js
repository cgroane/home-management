import React, { Component } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
      <div class="background">
        <div class="white">
          <img src="https://cdn.shopify.com/s/files/1/1049/7252/products/green-house-home-logo-01_580x.jpg?v=1482351742" />
          <h3>Username</h3>
          <input />
          <h3>Password</h3>
          <input />
          <div class="buttons">
            <Link to="/Dashboard" class="homebutton">
              Login{' '}
            </Link>
            <Link to="/Dashboard" class="homebutton" id="hp2">
              Register{' '}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
