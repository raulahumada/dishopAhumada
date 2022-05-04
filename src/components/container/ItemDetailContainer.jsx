import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsInfo as productsData } from '../../products';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const productInfo = await getDataProducts();
      if (productInfo) {
        setLoading(false);
        setProduct(productInfo);
      }
    })();
  }, []);

  const getDataProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData.find((item) => item.id == id));
      }, 1000);
    });
  };

  return <>{loading ? <p>Cargando...</p> : <ItemDetail item={product} />}</>;
};

export default ItemDetailContainer;
