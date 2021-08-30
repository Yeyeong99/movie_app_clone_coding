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

function renderFood(dish) {
  const { name, id } = dish;
  return <Food name={name} id={id} key={id} />;
}
function App() {
  return (
    <div className="App">
      {/* <Food fav="kimchi" />
      <Food fav="kkkk" />
      <Food fav="what" />
      <Food fav="sleep tight" /> */}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
