// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
// Create a react component
const App = () => {
  const buttonText = { text: "Click Me!!" };
  const labelText = { text: "Enter Name: " };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText.text}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
