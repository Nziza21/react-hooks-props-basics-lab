import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar name = "Liza"/>
      <Home city = "New York"/>
      <About bio = "I made this!"/>
      
    </div>
  );
}

export default App;
