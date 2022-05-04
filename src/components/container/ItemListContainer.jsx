import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { productsInfo as productsData } from '../../products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log('CategoryId: ', id);

  useEffect(() => {
    const getDataProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Nuevo');
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
