import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';
import ItemList from '../ItemList';
import lottie from 'lottie-web';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const container = useRef(null);

  useEffect(() => {
    getDataProducts();
  }, [id]);

  const getDataProducts = () => {
    setLoading(true);
    const db = getFirestore();
    const productCollections = collection(db, 'items');
    getDocs(productCollections).then((snapshot) => {
      if (snapshot.size > 0) {
        console.log(snapshot.docs);
        console.log(id);
        if (id != undefined) {
          const productsData = snapshot.docs
            .filter(
              (item) => item.data().category.toLowerCase() === id.toLowerCase()
            )
            .map((d) => ({
              id: d.id,
              ...d.data(),
            }));

          setProducts(productsData);
          setLoading(false);
        } else {
          const productData = snapshot.docs.map((d) => ({
            id: d.id,
            ...d.data(),
          }));
          console.log(productData);
          setProducts(productData);
          setLoading(false);
        }
      }
    });
  };

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
