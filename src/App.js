import React from "react";

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}
function App() {
  return (
    <div className="App">
      <Food fav="kimchi" />
      <Food fav="kkkk" />
      <Food fav="what" />
      <Food fav="sleep tight" />
    </div>
  );
}

export default App;
