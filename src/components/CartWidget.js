import React, { Component } from "react";
import image from "../components/cart.jpg";

export default class CartWidget extends Component {
  render() {
    return (
        <img width={40} src={image} />
    );
  }
}
