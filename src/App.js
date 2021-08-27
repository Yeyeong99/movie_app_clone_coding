import React from "react";

function Food({ name, id }) {
  return (
    <h1>
      {id}. I like {name}
    </h1>
  );
}

const foodILike = [
  { name: "Kimchi", id: 0 },
  { name: "dldld", id: 1 },
  { name: "dkdk", id: 2 },
];

function App() {
  return (
    <div className="App">
      {/* <Food fav="kimchi" />
      <Food fav="kkkk" />
      <Food fav="what" />
      <Food fav="sleep tight" /> */}
      {foodILike.map((dish) => (
        <Food name={dish.name} id={dish.id} />
      ))}
    </div>
  );
}

export default App;
