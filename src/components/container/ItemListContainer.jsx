import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';
import { productsInfo as productsData } from '../../products';
import ItemList from '../ItemList';
import lottie from 'lottie-web';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const container = useRef(null);

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

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: require('../../assets/loading.json'),
    });
  }, []);

  return (
    <>
      {loading ? (
        <Center>
          <Box>
            <div ref={container}></div>
          </Box>
        </Center>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
