import React from "react";
import PropTypes from "prop-types";

function Food({ name, id, rating }) {
  return (
    <>
      <h1>
        {id}. I like {name}
      </h1>
      <h2>{rating} / 5</h2>
    </>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  { name: "Kimchi", id: 0, rating: 5 },
  { name: "dldld", id: 1, rating: 3 },
  { name: "dkdk", id: 2, rating: 2 },
];

function renderFood(dish) {
  const { name, id, rating } = dish;
  return <Food name={name} id={id} key={id} rating={rating} />;
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
