import React, { Component } from "react";
import propTypes from "prop-types";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  componentDidMount() {
    fetch(
      "https://rawgit.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          albums: data
        });
      });
  }

  render() {
    return <div>{JSON.stringify(this.state.albums)} </div>;
  }
}

Albums.propTypes = {};

export default Albums;
