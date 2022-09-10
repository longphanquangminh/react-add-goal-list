// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  // return <h1>A React App!</h1>;
  // return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>; // => React.createElement('h1', {title: 'This works'}, ...)

  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);

    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
  // return React.createElement('h1', {}, 'Hi, this is React!');
};

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>; // => React.createElement('h1', {title: 'This works'}, ...)
//   }
// }

export default App;
