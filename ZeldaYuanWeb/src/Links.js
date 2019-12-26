import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <div>
        <h2>LINKS</h2>
        <p>Here is some links</p>
        <ol>
          <li>C++ <a href="https://github.com/ZeldaYuan/CPP"> link</a></li>
          <li>iOS<a href="https://github.com/ZeldaYuan/iOS"> link</a></li>
          <li>Android<a href="https://github.com/ZeldaYuan/Android"> link</a></li>
          <li>ReactNative<a href="https://github.com/ZeldaYuan/ReactNative"> link</a> </li>
          <li>Redux<a href="https://github.com/ZeldaYuan/Redux" target="_blank" rel="noopener noreferrer"> link</a></li>
        </ol>
      </div>
    );
  }
}
export default Links;
