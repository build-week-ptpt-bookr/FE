import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get('https://lambda-bookr.herokuapp.com/api/authors/')
      .then(response => {
        setProductList(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className=" grid-view ">
      {productList.map(product => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </section>
  );
}
