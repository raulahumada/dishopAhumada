import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { productsInfo as productsData } from '../../products';
import ItemDetail from '../ItemDetail';
import lottie from 'lottie-web';
import { Box, Center } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      const productInfo = await getDataProducts();
      if (productInfo) {
        setLoading(false);
        setProduct(productInfo);
      }
    })();
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: require('../../assets/loading.json'),
    });
  }, []);

  const getDataProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData.find((item) => item.id == id));
      }, 1000);
    });
  };

  return (
    <>
      {loading ? (
        <Center>
          <Box>
            <div ref={container}></div>
          </Box>
        </Center>
      ) : (
        <ItemDetail item={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;
