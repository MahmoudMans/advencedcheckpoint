import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductTable from './ProductTable'
const products=[
  {
    category:"electronic",
    price:"556",
    name:"bleutooth kit"
  },
  {
    category:"clothes",
    price:"4534",
    name:"jacket"
  },
   {
    category:"electronic",
    price:"4568",
    name:"iphone"
  },
  {
    category:"clothes",
    price:"656",
    name:"jeans"
  },
]
ReactDOM.render(
  <React.StrictMode>
    <ProductTable products ={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


