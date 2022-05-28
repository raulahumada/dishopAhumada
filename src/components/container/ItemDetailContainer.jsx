import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import lottie from 'lottie-web';
import { Box, Center } from '@chakra-ui/react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const container = useRef(null);

  useEffect(() => {
    getDataProducts();
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
    const db = getFirestore();
    const productDoc = doc(db, 'items', id);
    getDoc(productDoc).then((result) => {
      console.log(result);
      if (result.exists()) {
        setProduct({ id: result.id, ...result.data() });
        setLoading(false);
      }
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
