import { Button, Stack, Text } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useCartContext } from '../context/CartContext';

const ItemCount = ({ stock, onAdd, id }) => {
  const [products, setProducts] = useState([]);
  console.log(stock);
  const [count, setCount] = useState(0);

  const { addToCart } = useCartContext();

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    getDataProducts();
  }, []);

  const getDataProducts = () => {
    const db = getFirestore();
    const productCollections = collection(db, 'items');
    getDocs(productCollections).then((snapshot) => {
      if (snapshot.size > 0) {
        console.log(snapshot.docs);
        console.log(id);

        const productData = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        console.log(productData);
        setProducts(productData);
      }
    });
  };

  const handleClick = (id, cantidad) => {
    console.log('1');

    const findProduct = products.find((producto) => producto.id === id);

    if (!findProduct) {
      alert('Error en la base de datos');
      return;
    }

    addToCart(findProduct, cantidad);
    onAdd(count);
  };

  return stock > 0 ? (
    <>
      <div className="flex gap-4 mt-4">
        <Stack direction="row" spacing={4}>
          <Button onClick={handleRemove} colorScheme="blue" variant="solid">
            Disminuir
          </Button>
          <Text> Cantidad: {count}</Text>
          <Button
            onClick={handleAdd}
            marginLeft="2"
            colorScheme="blue"
            variant="solid"
          >
            Agregar
          </Button>
        </Stack>

        <div>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'md'}
            onClick={() => handleClick(id, count)}
            py={'7'}
            textTransform={'uppercase'}
            _hover={{
              boxShadow: 'lg',
            }}
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </>
  ) : (
    <Text
      fontSize={'2xl'}
      fontWeight="bold"
      color="red.500"
      textTransform={'uppercase'}
    >
      No hay stock de este producto ⛔
    </Text>
  );
};

export default ItemCount;
