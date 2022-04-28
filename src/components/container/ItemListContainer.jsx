import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { productsInfo as productsData } from '../../products';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });
    getDataProducts.then((result) => {
      setLoading(false);
      setProducts(result);
    });
    getDataProducts.catch((ex) => {
      setLoading(false);
      alert(ex.message);
    });
  }, []);

  return (
    <>
      {loading && <p>Cargando...</p>}
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
