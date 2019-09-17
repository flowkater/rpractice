import React from "react";
import Average from "./Average";

const App = () => {
  return <Average />;
};

// import LifeCycleSample from "./LifeCycleSample";
// import ErrorBoundary from "./ErrorBoundary";

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000"
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

export default App;

// import React, { Component } from "react";
// import ScrollBox from "./ScrollBox";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={ref => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }
// export default App;
