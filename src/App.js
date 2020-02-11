import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://gbc-cdn-public-media.azureedge.net/img64004.1426x713.jpg",
    rating: 5
  },
  {
    id:2,
    name: "bulgogi",
    image: "https://cdn.shopify.com/s/files/1/0003/6188/9820/products/beef_bulgogi_0001_1200x1200.jpg?v=1536030333",
    rating: 4.3
  },{
    id:3,
    name: "hotdog",
    image: "http://www.menupan.com/restaurant/restimg/001/zzmenuimg/f1011814_z.jpg",
    rating: 5.6
  },
  {
    id:4,
    name: "gogi",
    image: "http://static.hubzum.zumst.com/hubzum/2018/12/05/13/38035029939e44f3b76c6a0ddae80842.jpg",
    rating: 4.7
  },
]

function Food({name, picture, rating}){ // Food(props)     I like {props.name}
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  )}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
      <Food
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}/> //key값은 리액트 내부에서 필요로해서 해줘야댐 
      ))}
    </div>
  );
}

export default App;
