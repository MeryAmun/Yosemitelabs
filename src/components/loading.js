import React from 'react';
import Loader from "react-loader-spinner";
export default class Loading extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={60}
        width={60}
        timeout={5000} //3 secs
      />
    );
  }
}